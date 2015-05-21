$(function(){
  // state0 **************************************************
  var state0 = function(menu_objects, menu_column, properties, parent_menu){
    // get properties
    var seed_pouches = menu_objects.seed_pouches;
    var column_width = menu_column.width();
    var sp_props = getSPProperties(properties, column_width);
 
    // draw seed pouches
    for(var i = 0; i < seed_pouches.length; i++){
      addSeedPouch(seed_pouches[i], i, sp_props, menu_column);
    }
  };


  var getSPProperties = function(properties, column_width){
    var width = properties.seed_pouch_width;
    var height = properties.seed_pouch_height;
    var image = properties.seed_pouch_image;
    var border = properties.seed_pouch_border;
    var full_size = width + (border * 2);
    var n_per_row = Math.floor(column_width / full_size);

    var bounds = {
      width: width,
      height: height,
      image: image,
      border: border,
      full_size: full_size,
      n_per_row: n_per_row
    }
    return bounds;
  };

  var addSeedPouch = function(seed_pouch, idx, sp_props, menu_column){
    
  };

  var left_panel_states = [
    new MenuState(state0),
    new MenuState(state1)
  ];
});
