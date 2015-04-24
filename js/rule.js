function Rule(subrule){
  if(subrule.constructor != Array) throw new Error("subrules must be an array");
  this.subrule = subrule;	// subrules are "or" delimited - just one subrule must be true for the rule to be true
}

Rule.prototype.ruleTrue = function(pheno_genes, genome){
  var subrules = this.subrule;

  for(var i = 0; i < subrules.length; i++){
    var subrule = subrules[i];
    if(subrule.subruleTrue(pheno_genes, genome)) return true;	// each subrule is "or" delmited, so if any subrule is true, then the entire rule is true
  }
  return false;	// if none of the subrules were true, then the rule is false
}
