const endDate="16 february 2023 09:37 PM"

document.getElementById("end-date").innerHTML= endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;//convert milisecond to second

    if(diff < 0)return;//ignore for negative value

     
    inputs[0].value = Math.floor(diff / 3600 / 24); // convert into days
         
     inputs[1].value = Math.floor(diff / 3600) % 24; // convert into hours

     inputs[2].value = Math.floor(diff / 60) % 60; //convert into minutes

     inputs[3].value = Math.floor(diff) % 60; //convert into seconds
     
}
clock()

// 1day = 24hrs
// 1hr = 60min
// 60min= 3600sec

setInterval(
    () => {
        clock()
    },1000);