(function(){

  function gameObjects() = {
    // goal: get rid of this object. somehow pass the responsibility of holding each of these arrays to other locations

    // menu items
    this.seed_pouches = [];
    this.plots = [];

    // genotype items
    this.phenotypes = [];
    this.genotypes = [];
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
  crossing_over = .15;	// chance of crossing over
  if(genome1[0].length != genome1[1].length || genome1[0].length != genome2[0].length || genome1[0].length != genome2[1].length)
    throw new Error("genome lengths do not match, something went terribly wrong");
  chromosome1 = extractRandomChromosome(genome1, crossing_over);
  chromosome2 = extractRandomChromosome(genome2, crossing_over);
  new_genome = [chromosome1, chromosome2];
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

function getExpression(phenotype, genotype){
  for(var i = 0; i < phenotype.rules.length; i++){
    var rule = phenotype.rules[i];
    for(var j = 0; j < rule.subrule.length; j++){
      var subrule = rule.subrule[j];
      if(subruleTrue(subrule, genotype)){

      }
    }
  }
}

function subruleTrue(subrule, genotype){

}
