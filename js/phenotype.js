function Phenotype(genes, phenotypes, rules){
  this.genes = genes;	// array of gene indexes corresponding to the index in Organism.genome
  this.phenotypes = phenotypes;	// array of possible phenotype expressions
  this.rules = rules;	// array of Rule, rules.length == phenotypes.length - 1
}
