const nowDate = document.querySelector("h2#nowdate");
const clock = document.querySelector("h2#clock");

function getClock(){

     const weekarr = ["월","화","수","목","금","토","일"];

     const date = new Date();
     const year  = String(date.getFullYear());
     const month  = String(date.getMonth()+1).padStart(2,"0");
     const day  = String(date.getDate()).padStart(2,"0");
     const week  = weekarr[date.getDay()];
     const hours = String(date.getHours()).padStart(2,"0");
     const minutes = String(date.getMinutes()).padStart(2,"0");

     

     
     nowDate.innerText = `${year}년 ${month}월 ${day}일 ${week}요일`;
     clock.innerText = `${hours} : ${minutes}`;
}

getClock();

setInterval(getClock, 1000);