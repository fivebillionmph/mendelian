$(function(){
  state0 = function(menu_objects, menu_column, properties, parent_panel){
    
  }




  var menu_objects = window.game_objects.menu_objects;
  var properties = window.game_objects.properties;
  var left_panel = $("left-panel");
  var left_panel_states = [
    new MenuState(state0),
    new MenuState(state1)
  ];
});
