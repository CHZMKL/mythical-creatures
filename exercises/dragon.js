function Dragon(name, color, rider) {
  this.name = name;
  this.color = color;
  this.rider = rider;
  this.stomach = 0;
}
Dragon.prototype.hungry = function() {
  if (this.stomach < 3) {
  return true;
} else {
  return false;
}
};
Dragon.prototype.eat = function() {
  this.stomach +=1;
};
module.exports = Dragon;
