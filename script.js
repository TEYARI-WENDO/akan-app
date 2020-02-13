  
  // the validation functions
  function dayValidator () {

  }if (dayOfBirth < 1 || dayOfBirth > 31){
        return false;
      } else {
        return true;
      }


  function monthValidator () {
   
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

 //arrays for both female and male Akan names
 let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];