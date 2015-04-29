QUnit.test("rule", function(assert){
  var rules = window.game_objects.rules;

  var simple = rules.simple;
  assert.ok(simple.ruleTrue(phenogenes1, genome1), "simple genome1");
  assert.notOk(simple.ruleTrue(phenogenes1, genome2), "simple genome2");
  assert.ok(simple.ruleTrue(phenogenes1, genome3), "simple genome3");

  var codominance_both = rules.codominance_both;
  assert.ok(codominance_both.ruleTrue(phenogenes2, genome1), "codominance_both genome1");
  assert.notOk(codominance_both.ruleTrue(phenogenes2, genome2), "codominance_both genome2");
  assert.notOk(codominance_both.ruleTrue(phenogenes2, genome3), "codominance_both genome3");
  assert.notOk(codominance_both.ruleTrue(phenogenes2, genome4), "codominance_both genome4");
  assert.ok(codominance_both.ruleTrue(phenogenes2, genome5), "codominance_both genome5");
  assert.ok(codominance_both.ruleTrue(phenogenes2, genome6), "codominance_both genome6");

  var codominance_first = rules.codominance_first;
  assert.notOk(codominance_first.ruleTrue(phenogenes2, genome1), "codominance_first genome1");
  assert.notOk(codominance_first.ruleTrue(phenogenes2, genome2), "codominance_first genome2");
  assert.notOk(codominance_first.ruleTrue(phenogenes2, genome3), "codominance_first genome3");
  assert.ok(codominance_first.ruleTrue(phenogenes2, genome4), "codominance_first genome4");
  assert.notOk(codominance_first.ruleTrue(phenogenes2, genome5), "codominance_first genome5");
  assert.notOk(codominance_first.ruleTrue(phenogenes2, genome6), "codominance_first genome6");

  var codominance_second = rules.codominance_second;
  assert.notOk(codominance_second.ruleTrue(phenogenes2, genome1), "codominance_second genome1");
  assert.notOk(codominance_second.ruleTrue(phenogenes2, genome2), "codominance_second genome2");
  assert.ok(codominance_second.ruleTrue(phenogenes2, genome3), "codominance_second genome3");
  assert.notOk(codominance_second.ruleTrue(phenogenes2, genome4), "codominance_second genome4");
  assert.notOk(codominance_second.ruleTrue(phenogenes2, genome5), "codominance_second genome5");
  assert.notOk(codominance_second.ruleTrue(phenogenes2, genome6), "codominance_second genome6");

  var epistasis_first = rules.epistasis_first;
  assert.ok(epistasis_first.ruleTrue(phenogenes3, genome1), "epistasis_first genome1");
  assert.notOk(epistasis_first.ruleTrue(phenogenes3, genome2), "epistasis_first genome2");
  assert.ok(epistasis_first.ruleTrue(phenogenes3, genome3), "epistasis_first genome3");
  assert.ok(epistasis_first.ruleTrue(phenogenes3, genome4), "epistasis_first genome4");
  assert.notOk(epistasis_first.ruleTrue(phenogenes3, genome5), "epistasis_first genome5");
  assert.notOk(epistasis_first.ruleTrue(phenogenes3, genome6), "epistasis_first genome6");

  var epistasis_second = rules.epistasis_second;
  assert.notOk(epistasis_second.ruleTrue(phenogenes3, genome1), "epistasis_second genome1");
  assert.notOk(epistasis_second.ruleTrue(phenogenes3, genome2), "epistasis_second genome2");
  assert.notOk(epistasis_second.ruleTrue(phenogenes3, genome3), "epistasis_second genome3");
  assert.notOk(epistasis_second.ruleTrue(phenogenes3, genome4), "epistasis_second genome4");
  assert.ok(epistasis_second.ruleTrue(phenogenes3, genome5), "epistasis_second genome5");
  assert.ok(epistasis_second.ruleTrue(phenogenes3, genome6), "epistasis_second genome6");

  var two_copy_dominance = rules.two_copy_dominance;
  assert.ok(two_copy_dominance.ruleTrue(phenogenes4, genome1), "two_copy_dominance genome1");
  assert.notOk(two_copy_dominance.ruleTrue(phenogenes4, genome2), "two_copy_dominance genome2");
  assert.notOk(two_copy_dominance.ruleTrue(phenogenes4, genome3), "two_copy_dominance genome3");
  assert.notOk(two_copy_dominance.ruleTrue(phenogenes4, genome4), "two_copy_dominance genome4");

  var incomplete_dominance = rules.incomplete_dominance;
  assert.notOk(incomplete_dominance.ruleTrue(phenogenes4, genome1), "incomplete_dominance genome1");
  assert.notOk(incomplete_dominance.ruleTrue(phenogenes4, genome2), "incomplete_dominance genome2");
  assert.ok(incomplete_dominance.ruleTrue(phenogenes4, genome3), "incomplete_dominance genome3");
  assert.ok(incomplete_dominance.ruleTrue(phenogenes4, genome4), "incomplete_dominance genome4");
});
