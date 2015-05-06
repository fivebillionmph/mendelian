QUnit.test("menu", function(assert){
  var sp1 = new SeedPouch(org1, org2, randomInt, random1)
  var sp2 = new SeedPouch(org1, org2, randomInt, random1)
  var sp3 = new SeedPouch(org1, org2, randomInt, random1)

  var menu = window.game_objects.menu;
  assert.equal(menu.seed_pouches.length, 0, "make sure there are no seed pouches");
  menu.addSeedPouch(sp1);
  menu.addSeedPouch(sp2);
  menu.addSeedPouch(sp3);
  assert.equal(menu.seed_pouches.length, 3, "make sure there are now three seed pouches");
  menu.addSeedPouch(sp3);
  assert.equal(menu.seed_pouches.length, 3, "make sure the same seed pouch was not added twice");
  menu.removeSeedPouch(sp2);
  assert.equal(menu.seed_pouches.length, 2, "make sure seed pouch was removed");
  assert.equal(menu.seed_pouches[0], sp1, "make sure the first seed pouch is still in");
  assert.equal(menu.seed_pouches[1], sp3, "make sure the third seed pouch is still in");
});
