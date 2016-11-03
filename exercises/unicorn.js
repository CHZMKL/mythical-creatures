function Unicorn(name, color) {

  this.name = name;
  this.color = color || 'white';
}
 Unicorn.prototype.isWhite = function() {
   if (this.color === 'white') {
     return true;
   } else {
     return false;
   }
 };
 Unicorn.prototype.says = function(phrase) {
   return "**;* " + phrase + " *;**";
 };

module.exports = Unicorn;
