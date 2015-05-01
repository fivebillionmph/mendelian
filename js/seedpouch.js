function SeedPouch(organism1, organism2, randomInt, random1, note){
  this.parent1 = organism1;
  this.parent2 = organism2;
  this.randomInt = randomInt;
  this.random1 = random1;
  this.note = "";
}

SeedPouch.prototype.crossParents = function(){
  var genome1 = this.parent1.genome;
  var genome2 = this.parent2.genome;
  var new_genome = this.combineGenomes(genome1, genome2);
  var new_organism = new Organism(new_genome);
  return new_organism;
};

SeedPouch.prototype.crossParentsN = function(n){
  var offspring = [];
  for(var i = 0; i < n; i++){
    offspring.push(this.crossParents());
  }
  return offspring;
};

SeedPouch.prototype.combineGenomes = function(genome1, genome2){
  var crossing_over = .15;	// chance of crossing over
  if(genome1[0].length != genome1[1].length || genome1[0].length != genome2[0].length || genome1[0].length != genome2[1].length)
    throw new Error("genome lengths do not match");
  var chromosome1 = this.extractRandomChromosome(genome1, crossing_over, this.randomInt, this.random1);
  var chromosome2 = this.extractRandomChromosome(genome2, crossing_over, this.randomInt, this.random1);
  var new_genome = [chromosome1, chromosome2];
  return new_genome;
};


SeedPouch.prototype.extractRandomChromosome = function(genome, crossing_over, fRandomInt, fRandom1){
  var main_idx = fRandomInt(0,2);
  var c1 = genome[main_idx];	// the main chromsome randomly selected
  var c2 = genome[main_idx == 0 ? 1 : 0];	// the other chromosome, that crossing over can act on
  var new_length = c1.length;
  var new_chromosome = [];
  for(var i = 0; i < new_length; i++){
    var dice_roll = fRandom1();
    new_chromosome.push(dice_roll < crossing_over ? c2[i] : c1[i]);
  }
  return new_chromosome;
};
