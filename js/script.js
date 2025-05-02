const mario = document.querySelector(".mario");

function marioPular(e) {
  if (e.type === "keydown") {
    if (e.key === " ") {
      mario.classList.add("pular");
      setTimeout(() => {
        mario.classList.remove("pular");
      }, "500");
    }
  } else if (e.type === "touchstart") {
    mario.classList.add("pular");
    setTimeout(() => {
      mario.classList.remove("pular");
    }, "500");
  }
}

window.addEventListener("keydown", marioPular);
window.addEventListener("touchstart", marioPular);
console.log(window.innerHeight);
