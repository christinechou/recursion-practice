/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
   var result = [];
   if (typeof str === 'string') {
      str = str.split(' ')
   }
   var numbers = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
   }

   if (str.length === 1) {
      return str[0];
   }
   else {
      var firstWord = str[0];
      if (numbers.hasOwnProperty(firstWord)) {
         result.push(numbers[firstWord]);
         result = result.concat(numToText(str.slice(1)));
      }
      else {
         result.push(str[0]);
         result = result.concat(numToText(str.slice(1)));
      }
   }
   return result;
};

// Alternative method:

var numToText = function(str, result) { 
   var result = result || [];
   if (typeof str === 'string') { 
      str = str.split(' ');
   }
   var numbers = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
   }

   if (str.length === 0) {
      return result.join(' ')
   }
   else {
      var firstWord = str[0];
      if (numbers.hasOwnProperty(firstWord)) {
         result = result.concat(numbers[firstWord]);
         return numToText(str.slice(1), result);
      }
      else {
         result = result.concat(str[0]);
         return numToText(str.slice(1), result);
      }
   }
};

console.log(numToText("I have 2 dogs and 5 cats"))
