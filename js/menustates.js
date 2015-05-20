$(function(){
  // state0 **************************************************
  var state0 = function(menu_objects, menu_column, properties, parent_menu){
    // get properties
    var seed_pouches = menu_objects.seed_pouches;
    var column_width = menu_column.width();
    var sp_props = getSPProperties(properties, column_width);
 
    // draw seed pouches
    for(var i = 0; i < seed_pouches.length; i++){

    }
  };


  var getSPProperties = function(properties, column_width){
    var bounds = {
      width: properties.seed_pouch_width,
      height: properties.seed_pouch_height,
      image: properties.seed_pouch_image,
      border: properties.seed_pouch_border,
      full_size: sp_width + (sp_border * 2),
      n_per_row: Math.floor(column_width / full_sp_size)
    }
    return bounds;
  }

  var left_panel_states = [
    new MenuState(state0),
    new MenuState(state1)
  ];
});
