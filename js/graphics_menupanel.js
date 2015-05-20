function MenuPanel(menu_objects, menu_column, states, properties){
  this.menu_objects = menu_objects;
  this.menu_column = menu_column;
  this.states = states;
  this.current_state = states[0];
}

MenuPanel.prototype.update = function(){
  this.current_state.update(this.menu_objects, this.menu_column, this);
}

MenuPanel.prototype.changeState = function(idx){
  this.current_states = states[idx];
}
