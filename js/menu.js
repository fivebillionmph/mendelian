function Menu(){
// over arching class that holds all the Plots and SeedPouches and draws them
// holds the plots and seed pouches and draws them to the screen
  this.seed_pouches = [];
  this.plots = [];
}

Menu.prototype.addSeedPouch = function(seed_pouch){
  this.add("seed_pouches", seed_pouch);
}

Menu.prototype.removeSeedPouch = function(seed_pouch){
  this.remove("seed_pouches", seed_pouch);
}

Menu.prototype.addPlot = function(plot){
  this.add("plots", plot);
}

Menu.prototype.removePlot = function(plot){
  this.remove("plots", plot);
}

Menu.prototype.add = function(prop, obj){
  this[prop].push(obj);
}

Menu.prototype.remove = function(prop, obj){
  for(var i = 0; i < this[prop].length; i++){
    if(this[prop][i] === obj){
      this[prop].splice(i, 1);
      break;
    }
  }
}
