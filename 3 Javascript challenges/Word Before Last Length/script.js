function wordBeforeLastLength(sentence) {
    let arr = sentence.split(" ");
    arr = arr.filter(function(ele){
        return ele.length > 1
    })
    if (arr.length > 2){
        return arr[arr.length - 2].length;
    }else if(arr.length === 2){
        return arr[0];
    }else if(arr.length === 1){
        return false;
    }
}
  console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
  console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
  console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
  console.log(wordBeforeLastLength("Hello")); // False
  console.log(wordBeforeLastLength("Hello Elzero")); // Hello
  console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello