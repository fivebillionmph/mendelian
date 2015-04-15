(function(){

  function gameObjects() = {
    // goal: get rid of this object. somehow pass the responsibility of holding each of these arrays to other locations

    // menu items
    this.seed_pouches = [];
    this.plots = [];

    // genotype items, custom designed for testing. use a method of random generation for picking from a preconfigured set for later
    // for testing, there are 4 phenotypes: height, spotted, flower color, seed pod color
    // height: tall/short - simple dominance A- = tall, aa = short
    // spotted: co dominance - B-cc = striped, --C- = spotted, B-C- = striped and spotted, bbcc = plain
    // flower color: epistasis - D---- = red, ddE- = blue; ddee = white
    // seed pod color: incomplete dominance - FF = red, Ff = pink, ff = white
    this.phenotypes = [
      // height: tall/short - simple dominance A- = tall, aa = short
      new Phenotype(
        [0],	// only uses first gene
        
      ),

      // spotted: co dominance - B-cc = striped, --C- = spotted, B-C- = striped and spotted, bbcc = plain
      new Phenotype(

      ),

      // flower color: epistasis - D---- = red, ddE- = blue; ddee = white
      new Phenotype(

      ),

      // seed pod color: incomplete dominance - FF = red, Ff = pink, ff = white
      new Phenotype(

      )
    ];
    this.rules = [];
    this.subrules = [];


    this.add = function(array, obj){
      if(this.hasOwnProperty(array) && Array.isArray(this[array])){
        this[array].push(obj);
      }else{
        throw new Error(array + " not found in gameObjects");
      }
    }

    this.remove = function(array, idx){
      if(this.hasOwnProperty(array) && Array.isArray(this[array]) && this[array].length > idx){
        array.splice(idx, 1);
      }
    }

  }


  var game_objects = new gameObjects();

  window["game_objects"] = game_objects;
  
}());

function createSeedPouch(organism1, organism2){
  return new SeedPouch(organism1, organism2);
}

function combineGenomes(genome1, genome2){
  var crossing_over = .15;	// chance of crossing over
  if(genome1[0].length != genome1[1].length || genome1[0].length != genome2[0].length || genome1[0].length != genome2[1].length)
    throw new Error("genome lengths do not match, something went terribly wrong");
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

function subruleTrue(subrule, genes, genome){
  var gene_index = subrule.gene_index;	// array of gene indexes corresponding to an index in genome
  var ncopies = subrule.ncopies;	// array of ncopies
  var allele_index = subrule.allele_index;	// array of which allele there needs to be ncopies of
  if(gene_index.length != ncopies.length || gene_index.length != allele_index.length) throw new Error("subrule arrays do not align");

  var len = gene_index.length;
  for(var i = 0; i < len; i++){
    var gene_index_i = gene_index[i];
    var ncopies_i = ncopies[i];
    var allele_index_i = allele_index[i];

    if(gene_index_i >= genome[0].length) throw new Error("out of bounds gene_index in genome");
    var genome_i = [genome[0][gene_index_i], genome[1][gene_index_i]];
    var ncopies_count = genome_i.filter(function(x){ return x == ncopies_i; }).length;
    if(allele_index_i == 3 && ncopies_count == 0) return false;	// since and delimited, immediately return false
    if(allele_index_i != ncopies_count) return false;
  }
  return true;
}
