// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s){
    const array = s.split(' ');
    let min = array[0].length;
    for (let i=0; i<array.length; i++){
      if (array[i].length<min){
        min=array[i].length;
      }
    }
    
    return min;
  }