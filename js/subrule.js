function Subrule(gene_index, ncopies, allele_index){
  if(gene_index.constructor != Array || ncopies.constructor != Array || allele_index.constructor != Array) throw new Error("subsubrules must be array");
  if(gene_index.length != ncopies.length || gene_index.length != allele_index.length) throw new Error("sub rule lengths must match");
  if(ncopies > 3 || ncopies < 0) throw new Error("number of copies in subrule must be >= 0 and <= 3");
  this.gene_index = gene_index;	// sub-subrules are "and" delimited - all must be true for the subrule to be true
  this.ncopies = ncopies;	// 0,1,2,3 - (3 = 1 or 2)
  this.allele_index = allele_index;
}
