/* plant prototypes */

function Organism(genome){
  this.genome = genome;	// genome is array of 2 arrays, one for mother and one for father
  this.expressions = Expressions(this.genome, window["game_objects"].phenotypes);
}

function Phenotype(genes, phenotypes, rules){
  this.genes = genes;	// array of gene indexes corresponding to the index in Organism.genome
  this.phenotypes = phenotypes;	// array of possible phenotype expressions
  this.rules = rules;	// array of Rule, rules.length == phenotypes.length - 1
}

function Subrule(gene_index, ncopies, allele_index){
  if(gene_index.length != ncopies.length || gene_index.length != allele_index.length) throw new Error("sub rule lengths must match");
  if(ncopies > 3 || ncopies < 0) throw new Error("number of copies in subrule must be >= 0 and <= 3");
  this.gene_index = gene_index;	// sub-subrules are "and" delimited - all must be true for the subrule to be true
  this.ncopies = Math.floor(ncopies);	// 0,1,2,3 - (3 = 1 or 2)
  this.allele_index = allele_index;
}

function Rule(subrule){
  this.subrule = subrule;	// subrules are "or" delimited - just one subrule must be true for the rule to be true
}

function Expressions(genome, global_phenotypes){
  // build attributes from phenotype definitions and organisms genotype
  var expressions = [];
  for(var i = 0; i < global_phenotypes.length; i++){
    var this_phenotype = global_phenotypes[i];
    expressions.push(getExpression(this_phenotype, genome));
  }
  return expressions;
}



/* menu prototypes */

function SeedPouch(organism1, organism2){
  this.parent1 = organism1;
  this.parent2 = organism2;

  this.crossParents = function(){
    var genome1 = this.parent1.genome;
    var genome2 = this.parent2.genome;
    var new_genome = combineGenomes(genome1, genome2);
    var new_organism = new Organism(genome);
    return new_organism;
  }
}

function Plot(){

}

function Slot(){
// holds a single plant

}

function SeedPouchBuilder(){
// menu for selecting to plants (could be the same plant, for making a cross

}

function Menu(){
// over arching class that holds all the Plots and SeedPouches and draws them
// holds the plots and seed pouches and draws them to the screen

}


/*
function MenuStateBehavior(state, behavior){
// describes how a DrawnObject is drawn according to a specific state
  this.state = state;
  this.behavior = behavior;
}

function DrawnObject(spritesheet, current_state, behaviors = []){
  // wrapper class for the sprite from Phaser
  this.spritesheet = spritesheet;
  this.menu_state_behaviors = behaviors;
  this.current_state = current_state;
}
*/
