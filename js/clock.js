const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth()+1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  //console.log(typeof(hours));
  clock.innerText = `${year}.${month}.${day}\n${hours}:${min}`;
}
getClock();
setInterval(getClock, 1000);