var screen = document.documentElement;
var stat = document.querySelector("#status");
var time = document.querySelector("#time");
var btn = document.querySelector(".fullscreen");
btn.onclick = () => { screen.webkitRequestFullscreen(); }
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
    curr = 0;
});