// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
    const array = str.toUpperCase().split('');
    let searchedLetter='';
    for(let i=0; i<str.length;i++){
    searchedLetter = array.shift();
    if (array.includes(searchedLetter)){return false}
  };
  return true};