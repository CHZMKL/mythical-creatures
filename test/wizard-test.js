var assert = require('chai').assert;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it('should be a function', function() {
    assert.isFunction(Wizard);
  });

  it('should instantiate our good friend, Wizard', function() {
    var wizard = new Wizard();
    assert.isObject(wizard);
  });

  it('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it.skip('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert(wizard.bearded);
  });

  it.skip('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert(!wizard.bearded);
  });

  it.skip('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it.skip('should has lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it.skip('should start rested', function() {
    //create wizard
    // isRested() returns true
  });

  it.skip('should be able to cast spells', function() {
    //create wizard
    //assert wizard.cast() returns 'MAGIC BULLET'
  });

  it.skip('should only be able to cast 3 spells', function() {
    //create wizard
    //assert isRested()
    //cast()
    //assert isRested()
    //cast()
    //cast()
    //assert isRested() is false
    //assert cast() returns 'I SHALL NOT CAST'
  });
});
