// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
    const copie = [];
	for (let i = 0; i < string.length; i++) {
        if (string[i]===" "){
            return false;
        }
		copie.push(string.charCodeAt(i));
	}
    if (copie.length===0){return false};//seul endroit pour le placer et seule façon que j'ai trouvé pour vérifier que string!=="";
    for (let j = 0; j < copie.length; j++) {        
		if (copie[j]<=47 ||copie[j]>=123){
            return false;
        }
        if (copie[j]>=58 && copie[j]<=64){
            return false;
        }
        if (copie[j]>=91 && copie[j]<=96){
            return false;
        }
    }
    return true;
  };