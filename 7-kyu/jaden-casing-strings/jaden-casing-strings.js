/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/
​
Object.defineProperty(
  String.prototype.toJadenCase = function(){
    return this.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1) ).join(' ')
  },
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this;
   }
  }
);