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

  // initialize left panel
  var leftpanel = new Panel();
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

}
