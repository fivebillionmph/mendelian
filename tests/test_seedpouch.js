QUnit.test("seedpouch", function(assert){
  // set up functions
  testRandomInt = function(x,y){ return 0; }
  testRandom1 = function(){return 1;}
  testRandom0 = function(){return 0;}
  arraysEqual = function(a,b){
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }


  var seed_pouch = new SeedPouch(org1, org2, testRandomInt, testRandom1);
  var test_child = seed_pouch.crossParents();
  assert.ok(arraysEqual(org1.genome[0], test_child.genome[0]), "parent1 vs child");	// genome 1 of child equals genome of parent1
  assert.ok(arraysEqual(org2.genome[0], test_child.genome[1]), "parent2 vs child"); // genome 2 of child equals genome of parent2

  var seed_pouch_crossing_over = new SeedPouch(org1, org2, testRandomInt, testRandom0);
  var test_child_crossing_over = seed_pouch_crossing_over.crossParents();
  assert.ok(arraysEqual(org1.genome[1], test_child_crossing_over.genome[0]), "parent1 vs child with crossing over");	// because of complete crossing over, the child should have the second genome
  assert.ok(arraysEqual(org2.genome[1], test_child_crossing_over.genome[1]), "parent2 vs child with crossing over");

  var random_seed_pouch = new SeedPouch(org1, org2, randomInt, random1);
  var random_children = random_seed_pouch.crossParentsN(100);
  assert.equal(random_children.length, 100, "check length of random_children");
  var children_not_equal = false;
  var different_from_parents = false;
  for(var i = 1; i < random_children.length; i++){
    if(arraysEqual(random_children[0].genome[0], random_children[i].genome[0]) == false) children_not_equal = true;	// makes sure that children are different
    if(arraysEqual(random_children[i].genome[0], org1.genome[0]) == false && arraysEqual(random_children[i].genome[1], org1.genome[1]) == false) different_from_parents = true;	// makes sure crossing over worked by not having a single chromosome exactly equal to the parents
    if(children_not_equal && different_from_parents) break;
  }
  assert.ok(children_not_equal, "children are different -- MAY FAIL, REFRESH A FEW TIMES IF IT FAILS");
  assert.ok(different_from_parents, "chromosomes are not exactly the same due to crossing over -- MAY FAIL, REFRESH A FEW TIMES IF IT FAILS");
});
