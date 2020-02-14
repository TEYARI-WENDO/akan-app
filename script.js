  
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

function getAkan name () {
    let yearOfBirth =document.getElementById("year-input").value;
    let monthOfBirth=Number(document.getElementById("month-input").value);
    let dayOfBirth=Number(document.getElementById("day-input").value);
    let genders =document.getElementsByName("gender")
}

//function to get gender

function getGender () {

    for(let gender of genders){

        if(gender.checked){

            return gender.value;

        }
    }
}
let myGenderValue=getGender();

console.log(myGenderValue);