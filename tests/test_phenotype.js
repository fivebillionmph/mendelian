QUnit.test("phenotype", function(assert){
  var phenotypes = window.game_objects.phenotypes;

  var p_height = phenotypes[0];
  assert.equal(p_height.getExpression(genome1), "tall", "height genome1");
  assert.equal(p_height.getExpression(genome2), "short", "height genome2");
  assert.equal(p_height.getExpression(genome3), "tall", "height genome3");

  var p_pattern = phenotypes[1];
  assert.equal(p_pattern.getExpression(genome1), "striped and spotted", "pattern genome1");
  assert.equal(p_pattern.getExpression(genome2), "plain", "pattern genome2");
  assert.equal(p_pattern.getExpression(genome3), "spotted", "pattern genome3");
  assert.equal(p_pattern.getExpression(genome4), "striped", "pattern genome4");
  assert.equal(p_pattern.getExpression(genome5), "striped and spotted", "pattern genome5");
  assert.equal(p_pattern.getExpression(genome6), "striped and spotted", "pattern genome6");

  var p_color1 = phenotypes[2];
  assert.equal(p_color1.getExpression(genome1), "red", "color1 genome1");
  assert.equal(p_color1.getExpression(genome2), "white", "color1 genome2");
  assert.equal(p_color1.getExpression(genome3), "red", "color1 genome3");
  assert.equal(p_color1.getExpression(genome4), "red", "color1 genome4");
  assert.equal(p_color1.getExpression(genome5), "blue", "color1 genome5");
  assert.equal(p_color1.getExpression(genome6), "blue", "color1 genome6");

  var p_color2 = phenotypes[3];
  assert.equal(p_color2.getExpression(genome1), "red", "color2 genome1");
  assert.equal(p_color2.getExpression(genome2), "white", "color2 genome2");
  assert.equal(p_color2.getExpression(genome3), "pink", "color2 genome3");
  assert.equal(p_color2.getExpression(genome4), "pink", "color2 genome4");
});
