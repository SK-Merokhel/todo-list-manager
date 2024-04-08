// Define an array named fruitChart containing three fruits: Banana, Apple, and Orange
let fruitChart = ["Banana", "Apple", "Orange"];
/*The array starts with an opening square bracket [.
Inside the brackets, you list the elements of the array separated by commas.
Each element can be of any data type, including numbers, strings, objects, or other arrays.
After listing all the elements, the array ends with a closing square bracket ].
*/
// Print the contents of the fruitChart array to the console
// console.log(fruitChart);
/*.concat() Method:

The .concat() method is used to merge two or more arrays. It does not modify the original arrays but returns a new array containing the merged elements.
Syntax: array1.concat(array2, array3, ...)
Example:
*/
let fruitChart2 = ["Melon", "Kiwi"];
let newlist = fruitChart.concat(fruitChart2);
//  .concat() creates a new array by combining multiple arrays without modifying the original ones.
console.log(newlist);
export {};
