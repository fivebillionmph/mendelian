function Menu(){
// over arching class that holds all the Plots and SeedPouches and draws them
// holds the plots and seed pouches and draws them to the screen
  this.seed_pouches = [];
  this.plots = [];
}

Menu.prototype.addSeedPouch = function(seed_pouch){
  this.seed_pouches.push(seed_pouch);
}

Menu.prototype.removeSeedPouch = function(seed_pouch){
  for(var i = 0; i < this.seed_pouches.length; i++){
    if(this.seed_pouches[i] === seed_pouch){
      this.seed_pouches.splice(i, 1);
      break;
    }
  }
}

Menu.prototype.addPlot = function(plot){
  this.plots.push(plot);
}

Menu.prototype.removePlot = function(plot){
  for(var i = 0; i < this.plots.length; i++){
    if(this.plot[i] === plot){
      this.plot.splice(i, 1);
      break;
    }
  }
}
