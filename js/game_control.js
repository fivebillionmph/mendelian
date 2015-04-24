function randomInt(min, max){	// min inclusive, max exclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

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
      "codominance_both": new Rule([this.subrules["codominance_both"]]),
      "codominance_first": new Rule([this.subrules["codominance_first"]]),
      "codominance_second": new Rule([this.subrules["codominance_second"]]),
      "epistasis_first": new Rule([this.subrules["one_copy_dominance"]]),	// if the first gene has the first allele, all other genes don't matter
      "epistasis_second": new Rule([this.subrules["codominance_second"]]),
      "two_copy_dominance": new Rule([this.subrules["two_copy_dominance"]]),
      "incomplete_dominance": new Rule([this.subrules["incomplete_dominance"]])
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

  SeedPouchBuilder.prototype.createSeedPouch(new Organism([[1,1,1,0,0,0],[1,0,0,1,1,0]]), new Organism([[0,1,1,1,1,1],[0,1,1,1,1,1]]));
}());
