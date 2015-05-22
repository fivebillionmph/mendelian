function states_builder_seed_pouches(){
  var state0 = function(menu_objects, menu_column, properties, parent_menu){
    // get properties
    var seed_pouches = menu_objects.seed_pouches;
    var column_width = menu_column.width();
    var sp_props = getSPProperties(properties, column_width);
 
    // draw seed pouches
    menu_column.height(sp_props.full_size_height * (Math.floor(seed_pouches.length / sp_props.n_per_row)));
    for(var i = 0; i < seed_pouches.length; i++){
      addSeedPouch(seed_pouches[i], i, sp_props, menu_column, parent_menu);
    }
  };

  var state1 = function(menu_objects, menu_column, properties, parent_menu, optionals){
    var seed_pouch = optionals;
    var column_wdith = menu_column.width();
    var sps_props = getSPSingleProperties(properties, column_width);
    menu_column.height(sps_props.full_height);
  };



  // helper functions **************************************************
  var getSPSingleProperties = function(properties, column_width){
    var bounds = {
      full_height: properties.panel_height,
    };
  }


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

  var addSeedPouch = function(seed_pouch, idx, sp_props, menu_column, parent_menu){
    var column = (idx + 1) % sp_props.n_per_row;
    var row = Math.floor(idx / sp_props.n_per_row);
    var top_offset = (row - 1) * sp_props.full_size_height + sp_props.border;
    var left_offset = (column - 1) * sp_props.full_size_width + sp_props.border;
    var on_click_fun = onClickFun(seed_pouch, parent_menu);	// need to implement
    var seed_pouch_div = $("<div/>", {
      css: {
        position: "absolute",
        top: top_offset,
        left: left_offset,
        width: sp_props.width,
        height: sp_props.height
      },
      onClick: on_click_fun,
    }).appendTo(menu_column);
    $("<img/>", {
      src: sp_props.image
    }).appendTo(seed_pouch_div);
  };

  var onClickFun = function(seed_pouch, parent_menu){
    // need to implement and change update function so that it can accept an optional argument
    var on_click_fun = function(){
      parent_menu.seed_pouches.changeState(window.game_objects.menu_states.seed_pouches_single);
    }
    return on_click_fun;
  }

  var seed_pouches_panel_states = [
    new MenuState(state0),
    new MenuState(state1)
  ];

  window.game_objects.menu_panels.seed_pouches = new Menu(window.menu_objects, $("inner-left-panel"), seed_pouches_panel_states, window.game_objects.properties, window.game_objects.menu_panels);
}
