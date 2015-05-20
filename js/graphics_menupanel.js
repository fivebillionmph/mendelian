function MenuPanel(menu_objects, menu_column, states, properties){
  this.menu_objects = menu_objects;
  this.menu_column = menu_column;
  this.states = states;
  this.properties = properties;
  this.current_state = states[0];
}

MenuPanel.prototype.render = function(){
  this.current_state.render(this.menu_objects, this.menu_column, this.properties, this);
}

MenuPanel.prototype.changeState = function(idx){
  this.current_states = states[idx];
}
