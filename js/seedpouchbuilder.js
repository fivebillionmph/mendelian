function SeedPouchBuilder(){
// menu for selecting to plants (could be the same plant, for making a cross

}

SeedPouchBuilder.prototype.createSeedPouch  = function(organism1, organism2, note){
  if(note === undefined) note = "";
  var seed_pouch = new SeedPouch(organism1, organism2, randomInt, random1, note);
  window["game_objects"].seed_pouches.push(seed_pouch);
  return seed_pouch;
};
