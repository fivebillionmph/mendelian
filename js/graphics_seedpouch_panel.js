function SeedPouchPanel(seed_pouch, properties){
  this.seed_pouch = seed_pouch;

  this.panel = new zebra.ui.ImagePan(properties.plot_img);
  this.panel.tooltip = new zebra.ui.Tooltip(this.seed_pouch.note);

  // events:
  this.panel.mouseClicked = function(e){
    this.spawnSeedPouchDetails();
  }
}
