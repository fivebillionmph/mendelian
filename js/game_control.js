(function(){

  function gameObjects(){

    // menu items
    this.seed_pouches = [];

    this.plots = [];

    // genotype items, custom designed for testing. use a method of random generation for picking from a preconfigured set for later
    this.subrules = {
      "one_copy_dominance": new Subrule([0], [3], [0]),
      "codominance_both": new Subrule([0,1], [3,3], [0,0]),	// first allele of first and second gene both have at least one copy
      "codominance_first": new Subrule([0,1], [3,0], [0,0]),	// first allele of first gene has one or two copies, first allele of second gene has zero copies
      "codominance_second": new Subrule([0,1], [0,3], [0,0]),	// first allele of first gene has zero copies, first allele of second gene has one or two copies
      "two_copy_dominance": new Subrule([0], [2], [0]),
      "incomplete_dominance": new Subrule([0,0], [1,1], [0,1])	// both first and second allele of first gene each have one copy
    };

    this.rules = {
      "simple": new Rule([this.subrules["one_copy_dominance"]]),
      "codominance_both": new Rule(this.subrules["codominance_both"]),
      "codominance_first": new Rule(this.subrules["codominance_first"]),
      "codominance_second": new Rule(this.subrules["codominance_second"]),
      "epistasis_first": new Rule(this.subrules["one_copy_dominance"]),	// if the first gene has the first allele, all other genes don't matter
      "epistasis_second": new Rule(this.subrules["codominance_second"]),
      "two_copy_dominance": new Rule(this.subrules["two_copy_dominance"]),
      "incomplete_dominance": new Rule(this.subrules["incomplete_dominance"])
    };
    // for testing, there are 4 phenotypes: height, spotted, flower color, seed pod color
    // height: tall/short - simple dominance A- = tall, aa = short
    // spotted: co dominance - B-cc = striped, --C- = spotted, B-C- = striped and spotted, bbcc = plain
    // flower color: epistasis - D---- = red, ddE- = blue; ddee = white
    // seed pod color: incomplete dominance - FF = red, Ff = pink, ff = white
    this.phenotypes = [
      // height: tall/short - simple dominance A- = tall, aa = short
      new Phenotype(
        [0],	// only uses first gene
        ["tall", "short"],
        [this.rules["simple"]]
      ),

      // spotted: co dominance - B-cc = striped, bbC- = spotted, B-C- = striped and spotted, bbcc = plain
      new Phenotype(
        [1,2],	// uses second and third genes
        ["striped and spotted", "striped", "spotted", "plain"],
        [this.rules["codominance_both"], this.rules["codominance_first"], this.rules["codominance_second"]]
      ),

      // flower color: epistasis - D---- = red, ddE- = blue; ddee = white
      new Phenotype(
        [3,4],
        ["red", "blue", "white"],
        [this.rules["epistasis_first"], this.rules["epistasis_second"]]
      ),

      // seed pod color: incomplete dominance - FF = red, Ff = pink, ff = white
      new Phenotype(
        [5],
        ["red", "pink", "white"],
        [this.rules["two_copy_dominance"], this.rules["incomplete_dominance"]]
      )
    ];

  }


  var game_objects = new gameObjects();

  window["game_objects"] = game_objects;

  createSeedPouch(new Organism([[1,1,1,0,0,0],[1,0,0,1,1,0]]), new Organism([[0,0,0,1,1,1],[0,1,1,0,0,0]]));
}());

function createSeedPouch(organism1, organism2){
  var seed_pouch = new SeedPouch(organism1, organism2);
  window["game_objects"].seed_pouches.push(seed_pouch);
  return seed_pouch;
}

function combineGenomes(genome1, genome2){
  var crossing_over = .15;	// chance of crossing over
  if(genome1[0].length != genome1[1].length || genome1[0].length != genome2[0].length || genome1[0].length != genome2[1].length)
    throw new Error("genome lengths do not match");
  var chromosome1 = extractRandomChromosome(genome1, crossing_over);
  var chromosome2 = extractRandomChromosome(genome2, crossing_over);
  var new_genome = [chromosome1, chromosome2];
  return new_genome;
}

function extractRandomChromosome(genome, crossing_over){
  var main_idx = randomInt(0,2);
  var c1 = genome[main_idx];	// the main chromsome randomly selected
  var c2 = genome[main_idx == 0 ? 1 : 0];	// the other chromosome, that crossing over can act on
  var new_length = c1.length;
  var new_chromosome = [];
  for(var i = 0; i < new_length; i++){
    var dice_roll = Math.random();
    new_chromosome.push(dice_roll < crossing_over ? c2[i] : c1[i]);
  }
  return new_chromosome;
}

function randomInt(min, max){	// min inclusive, max exclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function getExpression(phenotype, genome){
  var genes = phenotype.genes;
  var i = 0;
  for(; i < phenotype.rules.length; i++){
    var rule = phenotype.rules[i];
    for(var j = 0; j < rule.subrule.length; j++){
      var subrule = rule.subrule[j];
      if(subruleTrue(subrule, genes, genome)){
        return phenotype.phenotypes[i];	// since or delimited, immediately return true
      }
    }
  }
  return phenotype.phenotypes[i+1];	// default last to last phenotype
}

function subruleTrue(subrule, pheno_genes, genome){
  // pheno_genes specifies which subset of the genome is used in this phenotype
  var gene_index = subrule.gene_index;	// array of gene indexes corresponding to an index in genome
  var ncopies = subrule.ncopies;	// array of ncopies
  var allele_index = subrule.allele_index;	// array of which allele there needs to be ncopies of
  if(gene_index.length != ncopies.length || gene_index.length != allele_index.length) throw new Error("subrule arrays do not align");

  var len = gene_index.length;
  for(var i = 0; i < len; i++){
    var gene_index_i = gene_index[i];
    var ncopies_i = ncopies[i];
    var allele_index_i = allele_index[i];

    if(gene_index_i >= pheno_genes.length) throw new Error("out of bounds gene_index in phenotype genes");
    var genome_i = [genome[0][pheno_genes[gene_index_i]], genome[1][pheno_genes[gene_index_i]]];
    var ncopies_count = genome_i.filter(function(x){ return x == ncopies_i; }).length;
    if(allele_index_i == 3 && ncopies_count == 0) return false;	// since and delimited, immediately return false
    if(allele_index_i != ncopies_count) return false;
  }
  return true;
}
