  
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

var Calculator = function() {
    var date = parseInt(
      document.getElementById("Form").elements.namedItem("date-of-birth").value
    );
    var month = parseInt(
      document.getElementById("Form").elements.namedItem("month-of-birth").value
    );
    var year = parseInt(
      document.getElementById("Form").elements.namedItem("year-of-birth").value
    );
    var gender = document.getElementById("Form").elements.namedItem("gender")
      .value;
    var dateOfBirth = new Date(year + "/" + month + "/" + date);
    var weekDay = dateOfBirth.getDay();
    
    if (month < 1 || month > 12 || (month == 2 && date > 29)) {
        return (document.getElementById("alert2").innerHTML =
          "Invalid  Month ,Please Try Again");
      } else if (date < 1 || date > 31) {
        return (document.getElementById("alert2").innerHTML =
          "Invalid Date ,Please Try Again");
      } else if (year === NaN || year < 1900 || year > 2019) {
        document.getElementById("alert2").innerHTML =
          "Invalid year please try Again";
      }
    