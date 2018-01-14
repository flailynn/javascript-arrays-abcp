var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,elem) {
  return [elem,...array];
}

function destructivelyAddElementToBeginningOfArray(array, elem) {
<<<<<<< HEAD
  array.unshift(elem);
  return array;
=======
  return array.unshift(elem);
>>>>>>> 1281be762b2fb30ddc5b74c00197a05006bdeb43
}

function addElementToEndOfArray(array,elem) {
  return [...array, elem];
}

function destructivelyAddElementToEndOfArray(array, elem) {
<<<<<<< HEAD
  array.push(elem);
  return array;
=======
  return array.push(elem);
>>>>>>> 1281be762b2fb30ddc5b74c00197a05006bdeb43
}

function accessElementInArray(array, num) {
  return array[num];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift();
  return array;
=======
  return array.shift();
>>>>>>> 1281be762b2fb30ddc5b74c00197a05006bdeb43
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  array.pop();
  return array;
=======
  return array.pop();
>>>>>>> 1281be762b2fb30ddc5b74c00197a05006bdeb43
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1);
}

var myArray = ["newb"]
console.log("Hello World");
console.log(destructivelyAddElementToBeginningOfArray(myArray, 1));
