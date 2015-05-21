function randomInt(min, max){	// min inclusive, max exclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function random1(){
  return Math.random();
}

(function(){
  window.game_objects = window.game_objects || {};

  window.game_objects.properties = {
    seed_pouch_width: 50,
    seed_pouch_height: 50,
    seed_pouch_image: "images/seed_pouch_image.png",
    seed_pouch_border: 5
  };


  window.game_objects.menu_objects = new Menu();


  window.game_objects.menu_states = {
    seed_pouches_all: 0,
    seed_pouches_single: 1,
    plots_all: 0,
    plots_single: 1,
    slots_single: 2,
    seed_pouches_builder: 0
  };

  window.game_objects.menu_panels = {};
}());
