QUnit.test("menu", function(assert){
  var sp1 = new SeedPouch(org1, org2, randomInt, random1)
  var sp2 = new SeedPouch(org1, org2, randomInt, random1)
  var sp3 = new SeedPouch(org1, org2, randomInt, random1)

  var menu = window.game_objects.menu;
  assert.equal(menu.seed_pouches.length, 0, "there are no seed pouches");
  menu.addSeedPouch(sp1);
  menu.addSeedPouch(sp2);
  menu.addSeedPouch(sp3);
  assert.equal(menu.seed_pouches.length, 3, "there are now three seed pouches");
  menu.addSeedPouch(sp3);
  assert.equal(menu.seed_pouches.length, 3, "same seed pouch was not added twice");
  menu.removeSeedPouch(sp2);
  assert.equal(menu.seed_pouches.length, 2, "seed pouch was removed");
  assert.equal(menu.seed_pouches[0], sp1, "first seed pouch is still in");
  assert.equal(menu.seed_pouches[1], sp3, "third seed pouch is still in");
  assert.notEqual(menu.seed_pouches[0], sp2, "second seed pouch not in first slice");
  assert.notEqual(menu.seed_pouches[1], sp2, "second seed pouch not in second slice");
});
