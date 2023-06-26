'use strict';

Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const isEven = number => number % 2 === 0;
  
  console.log(numbers.myEvery(isEven)); 
  