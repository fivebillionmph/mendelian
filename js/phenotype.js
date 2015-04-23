function Phenotype(genes, phenotypes, rules){
  if(genes.constructor != Array || pehenotypes.constructor != Array || rules.constructor != Array) throw new Error("phenotype arguments much be of type array");
  if(rules.length != phenotypes.length - 1) throw new Error("length of rules must be one less than length of phenotypes");

  this.genes = genes;	// array of gene indexes corresponding to the index in Organism.genome
  this.phenotypes = phenotypes;	// array of possible phenotype expressions
  this.rules = rules;	// array of Rule, rules.length == phenotypes.length - 1
}

Phenotype.prototype.getExpression = function(genome){
  var pheno_genes = this.genes;
  var rules = this.rules;
  var phenotypes = this.phenotypes;

  var i = 0;
  for(; i < rules.length; i++){
    var rule = rules[i];
    for(var j = 0; j < rule.subrule.length; j++){
      var subrule = rule.subrule[j];
      if(subrule.subruleTrue(pheno_genes, genome)){
        return phenotypes[i];	// since "or" delimited, immediately return true
      }
    }
  }
  return phenotypes[i];	// default last to last phenotype
};
