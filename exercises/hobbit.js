function Hobbit(name) {
  this.name = name;
  this.disposition = "homebody";
  this.age = 0;
  this.short = true;
  this.hasRing = function() {
    if (this.name === "Frodo") {
       return true;
    } else {
        return false;
      }
    };
  this.old = function() {
    return this.age > 101;
  };
  this.celebrate_birthday = function() {
   this.age++;
  };
  this.adult = function() {
    return this.age > 32;

  };
}
module.exports = Hobbit;
