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
    var full_size_width = width + (border * 2);
    var full_size_height = height + (border * 2);
    var n_per_row = Math.floor(column_width / full_size_width);

    var bounds = {
      width: width,
      height: height,
      image: image,
      border: border,
      full_size_width: full_size_width,
      full_size_height: full_size_height,
      n_per_row: n_per_row
    };
    return bounds;
  };

  var addSeedPouch = function(seed_pouch, idx, sp_props, menu_column){
    var column = (idx + 1) % sp_props.n_per_row;
    var row = Math.floor(idx / sp_props.n_per_row);
    var top_offset = (row - 1) * sp_props.full_size_height;
    var left_offset = (column - 1) * sp_props.full_size_width;
    
  };

  var left_panel_states = [
    new MenuState(state0),
    new MenuState(state1)
  ];
});
