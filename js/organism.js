function Organism(genome){
  this.genome = genome;	// genome is array of 2 arrays, one for mother and one for father
  this.expressions = [];

  // build attributes from phenotype definitions and organisms genotype
  var global_phenotypes = window["game_objects"].phenotypes;
  for(var i = 0; i < global_phenotypes.length; i++){
    var this_phenotype = global_phenotypes[i];
    this.expressions.push(this.getExpression(this_phenotype, this.genome));
  }
}

Organism.prototype.getExpression = function(phenotype, genome){
  var pheno_genes = phenotype.genes;
  var i = 0;
  for(; i < phenotype.rules.length; i++){
    var rule = phenotype.rules[i];
    for(var j = 0; j < rule.subrule.length; j++){
      var subrule = rule.subrule[j];
      if(subrule.subruleTrue(pheno_genes, genome)){
        return phenotype.phenotypes[i];	// since "or" delimited, immediately return true
      }
    }
  }
  return phenotype.phenotypes[i];	// default last to last phenotype
};
