const fetch = require('node-fetch');

console.log("Bot is running");
console.log("---------------------");

const date = new Date();
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear().toString();

let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=400058&date=${day}-${month}-${year}`;

var counter = 0;

async function get() {
  let getData;

  counter++;
  
  console.log(`Attempt ${counter}`);

  var responseOk = true;

  getData = await fetch(url).then(res => res.json()).catch(()=>{
    responseOk = false;
  });

  if(responseOk == false) {
    console.log("Error occurred");
    console.log("---------------------");
    return;
  }
  
  var centers = getData.centers;
  
  for(let i = 0; i<centers.length; i++) {
    if(centers[i].center_id == 561797 || centers[i].center_id == 561800) {      
      for(let j = 0; j<centers[i].sessions.length; j++) {
        if(centers[i].sessions[j].min_age_limit == 18 && centers[i].sessions[j].available_capacity_dose1 > 0) {
          console.log('\u0007');
          console.log("***************");
          console.log("Place available");
          console.log("***************");
        }
      }
    }
  }

  console.log(`Attempt ${counter} successful`);
  console.log("---------------------");
};

setInterval(get, 15000);