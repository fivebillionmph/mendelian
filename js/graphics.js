zebra.ready(function(){
  var properties = {
    sizex: 800,
    sizey: 400,
    border_size: 5,
    bgcolor: "#1E90FF",	// dodger blue :)
    pancol: "green"
  };

  window.game_objects = window.game_objects || {};
  window.game_objects.zebra = new Graphics(properties);
});

function Graphics(properties){
  // properties
  this.sizex = properties.sizex;
  this.sizey = properties.sizey;
  this.border_size = properties.border_size;
  this.bgcolor = properties.bgcolor;
  this.pancol = properties.pancol;

  // base panels
  this.root = this.zebraRoot(this.sizex, this.sizey);
  this.back_panel = this.zebraBackPanel(this.sizex, this.sizey, this.bgcolor);
  this.seed_pouches_panel = new SeedPouchesPanel(this.sizex, this.sizey, this.border_size, this.pancol); // left panel
  this.plots_panel = new PlotsPanel(this.sizex, this.sizey, this.border_size, this.pancol);	// center panel
  this.builder_panel = new SeedPouchBuilderPanel(this.sizex, this.sizey, this.border_size, this.pancol);	// right panel
}

Graphics.prototype.zebraRoot = function(sizex, sizey){
  var root = (new zebra.ui.zCanvas(sizex, sizey)).root;
  return root;
}

Graphics.prototype.zebraBackPanel = function(sizex, sizey, bgcolor){
  var back_panel = new zebra.ui.Panel();
  back_panel.setBounds(0,0,sizex,sizey);
  back_panel.setBackground(bgcolor);
  return back_panel;
}

Graphics.prototype.zebraPanels = function(sizex, sizey, border_size, pancol){
  var left_panel = new zebra.ui.Panel();
  left_panel.setBounds(0, 0);
  left_panel.setPreferredSize((sizex/4) - (border_size * 2), sizey - (border_size * 2));
  left_panel.setBackground(pancol);

  var scroll_left_panel = new zebra.ui.ScrollPan(left_panel, zebra.layout.VERTICAL);
  scroll_left_panel.setBounds(border_size, border_size, (sizex/4) - (border_size * 2), sizey - (border_size * 2));

  var right_panel = new zebra.ui.Panel();
  right_panel.setBounds(sizex - (sizex/4) + border_size, border_size, (sizex/4) - border_size * 2, sizey - (border_size * 2));
  right_panel.setBackground(pancol);

  var center_panel = new zebra.ui.Panel();
  center_panel.setBounds(0,0);
  center_panel.setPreferredSize((sizex/2) - (border_size * 2), sizey - (border_size * 2));
  center_panel.setBackground(pancol);

  var scroll_center_panel = new zebra.ui.ScrollPan(center_panel, zebra.layout.VERTICAL);
  scroll_center_panel.setBounds((sizex/4) + border_size, border_size, (sizex/2) - (border_size * 2), sizey - (border_size * 2));


  var panels = {};
  var back_panel = go_zebra.back_panel;
  back_panel.add(scroll_left_panel);
  back_panel.add(right_panel);
  back_panel.add(scroll_center_panel);
  panels.left_panel = left_panel;
  panels.right_panel = right_panel;
  panels.center_panel = center_panel;
  panels.scroll_center_panel = scroll_center_panel;
  panels.scroll_left_panel = scroll_left_panel;

  return panels;
}
