zebra.ready(function(){
  window.game_objects = window.game_objects || {};
  window.game_objects.zebra = {};

  var sizex = 800;
  var sizey = 400;
  var border_size = 5;
  var bgcolor = "#1E90FF";	// dodger blue :)
  var pancol = "green";

  // import namespaces
  eval(zebra.Import("layout", "ui"));

  // initialize canvas and background panel
  var root = zebraRoot(sizex, sizey);
  var back_panel = zebraBackPanel(sizex, sizey, bgcolor);

  // initialize panels
  zebraPanels(sizex, sizey, border_size, pancol);
});

function zebraRoot(sizey, sizex){
  var root = (new zCanvas(sizex, sizey)).root;
  window.game_objects.zebra.root = root;
  return root;
}

function zebraBackPanel(sizex, sizey, bgcolor){
  var back_panel = new Panel();
  back_panel.setBounds(0,0,sizex,sizey);
  back_panel.setBackground(bgcolor);
  window.game_objects.zebra.root.add(back_panel);
  window.game_objects.zebra.back_panel = back_panel;
  return back_panel;
}

function zebraPanels(sizex, sizey, border_size, pancol){
  var left_panel = new Panel();
  left_panel.setBounds(border_size, border_size, (sizex/4) - (border_size * 2), sizey - (border_size * 2));
  left_panel.setBackground(pancol);

  var right_panel = new Panel();
  right_panel.setBounds(sizex - (sizex/4) + border_size, border_size, (sizex/4) - border_size * 2, sizey - (border_size * 2));
  right_panel.setBackground(pancol);

  var center_panel = new Panel();
  center_panel.setBounds(0,0);
  center_panel.setPreferredSize((sizex/2) - (border_size * 2), sizey - (border_size * 2));
  center_panel.setBackground(pancol);

  var scroll_center_panel = new ScrollPan(center_panel, VERTICAL);
  scroll_center_panel.setBounds((sizex/4) + (border_size * 2), border_size, (sizex/2) - (border_size * 2), sizey - (border_size * 2));

  var go_zebra = window.game_objects.zebra;
  var back_panel = go_zebra.back_panel;
  back_panel.add(left_panel);
  back_panel.add(right_panel);
  back_panel.add(scroll_center_panel);
  go_zebra.left_panel = left_panel;
  go_zebra.right_panel = right_panel;
  go_zebra.center_panel = center_panel;
  go_zebra.scroll_center_panel = scroll_center_panel;
}
