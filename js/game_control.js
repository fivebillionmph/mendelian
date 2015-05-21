function randomInt(min, max){	// min inclusive, max exclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function random1(){
  return Math.random();
}

(function(){
  window.game_objects = window.game_objects || {};

  window.game_objects.properties = {

  };


  window.game_objects.menu_objects = new Menu();
}());
