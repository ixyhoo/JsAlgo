function selectionSort(array){
  for(let i = 0; i < array.length -1; i++){
    let minIndex = i
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j
        console.log(minIndex);
      }
    }
  }
}



selectionSort([400, 2, 132, 47, 32, 6, 18, 5, 3]) 