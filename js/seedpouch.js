function SeedPouch(organism1, organism2){
  this.parent1 = organism1;
  this.parent2 = organism2;

  this.crossParents = function(){
    var genome1 = this.parent1.genome;
    var genome2 = this.parent2.genome;
    var new_genome = combineGenomes(genome1, genome2);
    var new_organism = new Organism(genome);
    return new_organism;
  };

  this.crossParentsN = function(n){
    var offspring = [];
    for(var i = 0; i < n; i++){
      offspring.push(this.crossParents());
    }
    return offspring;
  };
}
