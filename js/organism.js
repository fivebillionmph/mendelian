function Organism(genome){
  this.genome = genome;	// genome is array of 2 arrays, one for mother and one for father
  this.expressions = [];

  // build attributes from phenotype definitions and organisms genotype
  var global_phenotypes = window["game_objects"].phenotypes;
  for(var i = 0; i < global_phenotypes.length; i++){
    var this_phenotype = global_phenotypes[i];
    this.expressions.push(getExpression(this_phenotype, this.genome));
  }
}
