var screen = document.documentElement;
var stat = document.querySelector("#status");
var time = document.querySelector("#time");
var btn = document.querySelector(".fullscreen");
var logs = document.querySelector(".log");
btn.onclick = () => {
    screen.webkitRequestFullscreen();
}
var curr = 0;
var interVal;

window.addEventListener('blur', () => {
    console.log("blur");
    stat.innerHTML = "out of window";
    interVal = setInterval(() => { time.innerHTML = "Time: " + (++curr) }, 1000)
});

window.addEventListener('focus', () => {
    console.log("focus");
    stat.innerHTML = "In window";
    time.innerHTML = "Time: ";
    clearInterval(interVal);
    var p = document.createElement("p");
    var date = new Date();
    p.innerText = "For " + " " + curr + " sec, at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    logs.prepend(p);
    curr = 0;
});