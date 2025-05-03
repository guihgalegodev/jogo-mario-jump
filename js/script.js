const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

console.log(window.innerWidth);

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

const loop = setInterval(() => {
  if (window.innerWidth > 1200) {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 200) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;
      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./imagens/game-over.png";
      mario.style.width = "75px";
      mario.style.left = "50px";

      clearInterval(loop);
    }
  } else if (window.innerWidth < 1200 && window.innerWidth >= 450) {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    if (pipePosition <= 108 && pipePosition > 0 && marioPosition < 170) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;
      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./imagens/game-over.png";
      mario.style.width = "65px";
      mario.style.left = "50px";

      clearInterval(loop);
    }
  } else {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    if (pipePosition <= 85 && pipePosition > 0 && marioPosition < 150) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;
      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./imagens/game-over.png";
      mario.style.width = "55px";
      mario.style.left = "30px";

      clearInterval(loop);
    }
  }
}, 10);

window.addEventListener("keydown", marioPular);
window.addEventListener("touchstart", marioPular);
