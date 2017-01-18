var arr = [];
function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loop`);
  }
  return arr;
}

function whileLoop(n){
  if(n < 0){
    return "Not with negatives";
  }
  while(n>0){
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(array){
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue());
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}