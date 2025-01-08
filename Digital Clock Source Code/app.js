let hours = document.querySelector(".hrs");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");
let formatChanger = document.querySelector("#formatChanger");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let date = document.querySelector(".date");
let year = document.querySelector(".year");

let presentTime = new Date();

day.innerHTML = `${presentTime.toLocaleString("default", {weekday: "long"})},`;
month.innerHTML = presentTime.toLocaleString("default", {month: "short"});
date.innerHTML = `${presentTime.getDate()},`;
year.innerHTML = presentTime.getFullYear();

setInterval(() => {
    let presentTime = new Date();

    if(formatChanger.checked) {
        hours.innerHTML = presentTime.getHours();
    } else if((presentTime.getHours() % 12) == 0) {
            hours.innerHTML = presentTime.getHours();
    } else if((presentTime.getHours() % 12) < 10) {
            hours.innerHTML = "0" + (presentTime.getHours() % 12);
    } else {
            hours.innerHTML = presentTime.getHours() % 12;
    }
    
    mins.innerHTML = (presentTime.getMinutes() < 10 ? "0" : "") + presentTime.getMinutes();
    secs.innerHTML = (presentTime.getSeconds() < 10 ? "0" : "") + presentTime.getSeconds();

}, 1000);