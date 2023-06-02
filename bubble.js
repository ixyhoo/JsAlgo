
/*function bubbleSort(array) {
  for (let i = 0; i < array.length -1; i++) {
    for (let j = 0; j < (array.length -1 - i); j++) {
      if (array[j] > array[j + 1]) {
      //  let temp = array[j]
       // array[j] = array[j + 1]
       // array[j + 1] = temp;
       [array[j], array[j + 1]] = [array[j + 1], array[j]
        console.log(array);
      }
    }
  }
  console.log(array);
}*/

function bubble(array) {
  console.log(array.sort((a, b) => a - b));
}

bubble([400, 2, 132, 47, 32, 6, 18, 5, 3]) 
