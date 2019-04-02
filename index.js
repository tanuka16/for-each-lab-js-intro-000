function iterativeLog(array) {
  array.forEach((element, index)=>{
    console.log('${index}: ${element}')
  })
}

iterate(callback) => {
  var array = [1, 2, 3, 4];
  array.forEach(callback);
  return array;
}
doToArray(array, callback) => {
  array.forEach(callback);
}
