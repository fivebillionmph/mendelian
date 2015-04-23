function Subrule(gene_index, ncopies, allele_index){
  if(gene_index.constructor != Array || ncopies.constructor != Array || allele_index.constructor != Array) throw new Error("subsubrules must be array");
  if(gene_index.length != ncopies.length || gene_index.length != allele_index.length) throw new Error("sub rule lengths must match");
  if(ncopies > 3 || ncopies < 0) throw new Error("number of copies in subrule must be >= 0 and <= 3");
  this.gene_index = gene_index;	// sub-subrules are "and" delimited - all must be true for the subrule to be true
  this.ncopies = ncopies;	// 0,1,2,3 - (3 = 1 or 2)
  this.allele_index = allele_index;
}

Subrule.prototype.subruleTrue = function(pheno_genes, genome){
  // pheno_genes specifies which subset of the genome is used in this phenotype
  var gene_index = this.gene_index;	// array of gene indexes corresponding to an index in genome
  var ncopies = this.ncopies;	// array of ncopies
  var allele_index = this.allele_index;	// array of which allele there needs to be ncopies of
  if(gene_index.length != ncopies.length || gene_index.length != allele_index.length) throw new Error("subrule arrays do not align");

  var len = gene_index.length;
  for(var i = 0; i < len; i++){
    var gene_index_i = gene_index[i];
    var ncopies_i = ncopies[i];
    var allele_index_i = allele_index[i];

    if(gene_index_i >= pheno_genes.length) throw new Error("out of bounds gene_index in phenotype genes");
    var genome_i = [genome[0][pheno_genes[gene_index_i]], genome[1][pheno_genes[gene_index_i]]];	// extract the alleles for this phenotype
    var ncopies_count = genome_i.filter(function(x){ return x == allele_index_i; }).length;	// count number of alleles for specific gene
    if(ncopies_i == 3 && ncopies_count == 0) return false;	// since "and" delimited, immediately return false
    if(ncopies_i != 3 && ncopies_i != ncopies_count) return false;
  }
  return true;
}
