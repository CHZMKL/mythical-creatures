function Pirate(name, job) {
this.name = name;
this.job = job || "Scallywag";
this.murder = 0;
this.booty = 0;
this.cursed = function() {
  if (this.murder < 3) {
    return false;
  } else {
    return true;
  }
};
this.commitHeinousAct = function() {
 this.murder++;
 };
this.robShip = function() {
  this.booty += 100;
  return "YAARRR";
};
}

module.exports = Pirate;
