function Menu(){
// over arching class that holds all the Plots and SeedPouches and draws them
// holds the plots and seed pouches and draws them to the screen

}

Menu.prototype.createSeedPouch  = function(organism1, organism2){
  var seed_pouch = new SeedPouch(organism1, organism2);
  window["game_objects"].seed_pouches.push(seed_pouch);
  return seed_pouch;
};
