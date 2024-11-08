function updateTime (){

let milwaukeeElement = document.querySelector("#milwaukee");
let milwaukeeDateElement = milwaukeeElement.querySelector(".date");
let milwaukeeTimeElement = milwaukeeElement.querySelector(".time");
let milwaukeeTime = moment().tz("America/Milwaukee");

milwaukeeDateElement.innerHTML = milwaukeeTime.format("MMMM Do YYYY");
milwaukeeTimeElement.innerHTML = milwaukeeTime.format("h:mm:ss [<small>]A[</small>]"); 



let pohnpeiElement = document.querySelector("#pohnpei");
let pohnpeiDateElement = pohnpeiElement.querySelector(".date");
let pohnpeiTimeElement = pohnpeiElement.querySelector(".time");
let pohnpeiTime = moment().tz("Pacific/Pohnpei");

pohnpeiDateElement.innerHTML = pohnpeiTime.format("MMMM Do YYYY");
pohnpeiTimeElement.innerHTML = pohnpeiTime.format("h:mm:ss [<small>]A[</small>]"); 


  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asiz/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}
updateTime();

setInterval(updateTime, 1000);