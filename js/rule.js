function Rule(subrule){
  if(subrule.constructor != Array) throw new Error("subrules must be an array");
  this.subrule = subrule;	// subrules are "or" delimited - just one subrule must be true for the rule to be true
}
