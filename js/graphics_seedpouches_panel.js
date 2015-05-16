function SeedPouchesPanel(properties, back_panel){
  var seed_pouches = window.menu.game_objects.seed_pouches;

  var bounds = this.getBounds(properties, seed_pouches);

  this.panel = this.buildPanel(properties, bounds);
  this.scroll_panel = this.buildScrollPanel(properties, bounds, panel);
  back_panel.add(this.scroll_panel);

  this.seed_pouch_panels = buildSeedPouchPanels(seed_pouches, properties, bounds, panel);
}

SeedPouchesPanel.prototype.getBounds = function(properties, seed_pouches){
  var scroll_sizex = (properties.sizex / 4) - (properties.border_size * 2);
  var scroll_sizey = properties.sizey - (border_size * 2);

  var sizex = scroll_sizex;
  var sp_per_row = Math.floor(properties.sizex / ((properties.border_size * 2) + properties.seed_pouch_sizex));	// number of seed pouches per row
  var n_seed_pouches = seed_pouches.length;
  var n_sp_row = Math.ceiling(n_seed_pouches / sp_per_row);	// number of seed pouch rows
  var needed_sp_row_size = properties.seed_pouch.sizey + (properties.border_size * 2);	// space needed for one seed pouch row, y direction
  var needed_yspace = n_sp_row * needed_sp_row_size;	// total height needed
  var sizey = 0;
  if(needed_yspace < scroll_sizey) sizey = scroll_sizey;
  else sizey = needed_y_space;

  var bounds = {
    sizex: sizex,
    sizey: sizey,
    scroll_sizex: scroll_sizex,
    scroll_sizey: scroll_sizey
    ncol_seed_pouches: sp_per_row,
    nrow_seed_pouches: n_sp_row
  };
}

SeedPouchesPanel.prototype.buildPanel = function(properties, bounds){
  var panel = new zebra.ui.Panel();
  this.panel.setBounds(0,0);
  this.setPreferredSize(bounds.sizex, bounds.sizey);
  this.setBackground(properties.pancol);
  return panel;
}

SeedPouchesPanel.prototype.buildScrollPanel = function(properties, bounds, panel){
  var scroll_panel = new zebra.ui.ScrollPan(panel, zebra.layout.VERTICAL);
  var scroll_panel.setBounds(properties.border_size, properties.border_size, bounds.scroll_sizex, bounds.scroll_sizey);
  return scroll_panel;
}

SeedPouchesPanel.prototype.buildSeedPouchPanels = function(seed_pouches, properties, bounds, panel){
  var seed_pouch_panels = [];
  for(var i = 0; i < seed_pouches.length; i++){
    seed_pouch_panels.push(new SeedPouchPanel(seed_pouches[i], properties, bounds, i);
  }
  return seed_pouch_panels;
}
