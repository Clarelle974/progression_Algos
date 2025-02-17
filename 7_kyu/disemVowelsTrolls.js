// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const regexo = /o/g;
    let result = str.replace(regexo, '');
    const regexO = /O/g;
    result = result.replace(regexO, '');
    const regexa = /a/g;
    result = result.replace(regexa, '');
    const regexA = /A/g;
    result = result.replace(regexA, '');
    const regexe = /e/g;
    result = result.replace(regexe, '');
    const regexE = /E/g;
    result = result.replace(regexE, '');
    const regexi = /i/g;
    result = result.replace(regexi, '');
    const regexI = /I/g;
    result = result.replace(regexI, '');
    const regexu = /u/g;
    result = result.replace(regexu, '');
    const regexU = /U/g;
    result = result.replace(regexU, '');
    
  return result;
  }