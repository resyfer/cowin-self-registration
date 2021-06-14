const fetch = require('node-fetch');
const readline = require('readline-sync');
const fs = require('fs');

console.log("Bot is running\n");

const date = new Date();
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear().toString();

const ageLimit = readline.question("Age (number) ? > ", num => {
  
       if (num >= 45) return 45;
  else if (num >= 18) return 18;
  else                return 0;

});

const dose = readline.question("Dose 1/2 ? > ", num => {
  
       if (num == 1) return 1;
  else if (num == 2) return 2;
  else               return 0;

});

const pincode = readline.question("Pincode of hospitals > ", num => {
  readline.close();
  return num.toString();
});

const hospitalCount = readline.question("Number of Hospitals? > ", num => {
  readline.close();
  return num;
});

const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${day}-${month}-${year}`;

// const showHospitalNames = readline(`Do you want to view the list of hospitals in ${pincode} y/n?`, res=> {
//   if(res === "y" || res === "Y") {
    
//   }
// })

console.log(
`\nPlease Enter the name of your preferred hostpitals
(Make sure to have no extra characters) :\n`
);

let hospitals = [];
for(let i = 0; i<hospitalCount; i++) {
  hospitals[i] = readline.question(`${i + 1}. > `, hospital => {
    readline.close();
    return hospital;
  });
};

console.log("\nStarting Search\n");
console.log("---------------------");

let attemptCount = 0;
async function get() {

  attemptCount++;

  console.log(`Attempt ${attemptCount}`);

  var responseOk = true;

  let getData = await fetch(url).then(res => res.json()).catch(()=>{
    responseOk = false;
  });

  if(responseOk == false) {
    console.log("Error occurred");
    console.log("---------------------");
    return;
  }
  
  let centers = getData.centers;
  for(let i = 0; i<centers.length; i++) {
    for(let j = 0; j<hospitals.length; j++) {
      if(centers[i].name == hospitals[j]) {      
        for(let k = 0; k<centers[i].sessions.length; k++) {
          if(centers[i].sessions[k].min_age_limit == ageLimit && centers[i].sessions[k][`available_capacity_dose${dose}`] > 0) {
            console.log("\n*********************************");
            console.log("*********************************");
            console.log("*********" + '\u0007' + "Place available" + "*********");
            console.log("*********************************");
            console.log("*********************************\n");
          }
        }
      }
    }
  }

  console.log(`Attempt ${attemptCount} successful`);
  console.log("---------------------");
};

setInterval(get, 15000);