var assert = require('chai').assert;
var Hobbit = require('../exercises/hobbit');

describe('Hobbit', function () {

  it('should be a function', function () {
    assert.isFunction(Hobbit);
  });

  it('should instantiate our good friend, Hobbit', function () {
    var hobbit = new Hobbit();
    assert.isObject(hobbit);
  });

  it('should have a name', function () {
    var hobbit = new Hobbit('Bilbo');
    assert.equal(hobbit.name, 'Bilbo');
  });

  it('should have an unadventurous disposition', function() {
    var hobbit = new Hobbit('Samwise');
    assert.equal(hobbit.disposition, 'homebody');
  });

  it('should have an age', function() {
    var hobbit = new Hobbit('Meriadoc');
    assert.equal(hobbit.age, 0);
  });

  it('should have gained 1 year after every birthday', function() {
    var hobbit = new Hobbit('Meriadoc');
    assert.equal(hobbit.age, 0);
    hobbit.celebrate_birthday();
    hobbit.celebrate_birthday();
    hobbit.celebrate_birthday();
    assert.equal(hobbit.age, 3);
  });

  function timeTravel(num, hobbit) {
    for(var i = 0; i < num; i++) {
      hobbit.celebrate_birthday();
    }
  }

  it('should be considered a child at the age of 32', function() {
    var hobbit = new Hobbit('Taylor');
    timeTravel(32, hobbit);
    assert.equal(hobbit.age, 32);
    assert(!hobbit.adult());
  });

  it('should be considered an adult at 33', function() {
    var hobbit = new Hobbit('Taylor');
    timeTravel(33, hobbit);
    assert.equal(hobbit.age, 33);
    assert(hobbit.adult());
  });



  it('should be short', function() {
    var hobbit = new Hobbit('Bree');
    assert.equal(hobbit.short, true);
  });

  it('should be considered old after the age of 101', function() {
    var hobbit = new Hobbit('Dale');
    timeTravel(102, hobbit);
    assert.equal(hobbit.age, 102);
    assert.equal(hobbit.old(), true);
    var hobbit2 = new Hobbit('Cheech');
    timeTravel(101, hobbit2);
    assert.equal(hobbit2.age, 101);
    assert.equal(hobbit2.old(), false);
  });

  it('should have the ring if its name is frodo', function() {
    var hobbit = new Hobbit('Frodo');
    var hobbit2 = new Hobbit('Sam');
    assert.equal(hobbit.hasRing(), true);
    assert.equal(hobbit2.hasRing(), false);
  });

});
