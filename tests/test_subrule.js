QUnit.test("subrule", function(assert){
  //assert.expect(1);
  var subrules = window.game_objects.subrules;

  var one_copy_dominance = subrules.one_copy_dominance;
  assert.ok(one_copy_dominance.subruleTrue(phenogenes1, genome1), "one_copy_dominance genome1");
  assert.notOk(one_copy_dominance.subruleTrue(phenogenes1, genome2), "one_copy_dominance genome2");
  assert.ok(one_copy_dominance.subruleTrue(phenogenes1, genome3), "one_copy_dominance genome3");

  var codominance_both = subrules.codominance_both;
  assert.ok(codominance_both.subruleTrue(phenogenes2, genome1), "codominance_both genome1");
  assert.notOk(codominance_both.subruleTrue(phenogenes2, genome2), "codominance_both genome2");
  assert.notOk(codominance_both.subruleTrue(phenogenes2, genome3), "codominance_both genome3");
  assert.notOk(codominance_both.subruleTrue(phenogenes2, genome4), "codominance_both genome4");
  assert.ok(codominance_both.subruleTrue(phenogenes2, genome5), "codominance_both genome5");
  assert.ok(codominance_both.subruleTrue(phenogenes2, genome6), "codominance_both genome6");

  var codominance_first = subrules.codominance_first;
  assert.notOk(codominance_first.subruleTrue(phenogenes2, genome1), "codominance_first genome1");
  assert.notOk(codominance_first.subruleTrue(phenogenes2, genome2), "codominance_first genome2");
  assert.notOk(codominance_first.subruleTrue(phenogenes2, genome3), "codominance_first genome3");
  assert.ok(codominance_first.subruleTrue(phenogenes2, genome4), "codominance_first genome4");
  assert.notOk(codominance_first.subruleTrue(phenogenes2, genome5), "codominance_first genome5");
  assert.notOk(codominance_first.subruleTrue(phenogenes2, genome6), "codominance_first genome6");

  var codominance_second = subrules.codominance_second;
  assert.notOk(codominance_second.subruleTrue(phenogenes2, genome1), "codominance_second genome1");
  assert.notOk(codominance_second.subruleTrue(phenogenes2, genome2), "codominance_second genome2");
  assert.ok(codominance_second.subruleTrue(phenogenes2, genome3), "codominance_second genome3");
  assert.notOk(codominance_second.subruleTrue(phenogenes2, genome4), "codominance_second genome4");
  assert.notOk(codominance_second.subruleTrue(phenogenes2, genome5), "codominance_second genome5");
  assert.notOk(codominance_second.subruleTrue(phenogenes2, genome6), "codominance_second genome6");

  var two_copy_dominance = subrules.two_copy_dominance;
  assert.ok(two_copy_dominance.subruleTrue(phenogenes4, genome1), "two_copy_dominance genome1");
  assert.notOk(two_copy_dominance.subruleTrue(phenogenes4, genome2), "two_copy_dominance genome2");
  assert.notOk(two_copy_dominance.subruleTrue(phenogenes4, genome3), "two_copy_dominance genome3");
  assert.notOk(two_copy_dominance.subruleTrue(phenogenes4, genome4), "two_copy_dominance genome4");

  var incomplete_dominance = subrules.incomplete_dominance;
  assert.notOk(incomplete_dominance.subruleTrue(phenogenes4, genome1), "incomplete_dominance genome1");
  assert.notOk(incomplete_dominance.subruleTrue(phenogenes4, genome2), "incomplete_dominance genome2");
  assert.ok(incomplete_dominance.subruleTrue(phenogenes4, genome3), "incomplete_dominance genome3");
  assert.ok(incomplete_dominance.subruleTrue(phenogenes4, genome4), "incomplete_dominance genome4");
});
