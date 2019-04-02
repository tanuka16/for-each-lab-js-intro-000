/*Define a function, iterativeLog(), that accepts an array. Call .forEach() on this array,
 and inside the callback, log each element with the format ${index}: ${element}.*/
function iterativeLog(array) {
  array.forEach((element, index)=>{
    console.log('${index}: ${element}')
  })
}
/*Define a function, iterate, that accepts a callback.
Within the iterate() function, you should initialize an array.
It can contain anything you want, but make sure that it is not empty!
Call .forEach() on this array, passing the callback to .forEach().
Then return the array that you initialized.*/
iterate(callback) => {
  var array = [1, 2, 3, 4];
  array.forEach(callback);
  return array;
}

/*Define a function, doToArray that accepts an array and a callback.
Call .forEach() on the array, passing the callback as the forEach callback.*/

doToArray(array, callback) => {
  array.forEach(callback);
}
