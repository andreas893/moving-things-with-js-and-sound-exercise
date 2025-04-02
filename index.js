// Your code here
"use strict";

const dodger = document.getElementById("dodger");
const container = document.getElementById("game");


const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const dodgerWidth = dodger.clientWidth;
const dodgerHeight = dodger.clientHeight;


dodger.style.left = `${(containerWidth - dodgerWidth) / 2}px`;
dodger.style.bottom = `${(containerHeight - dodgerHeight) / 2}px`;

// Tryk venstre pil
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    };
    if (event.key === "ArrowRight") {
        moveDodgerRight();
      };

      if (event.key === "ArrowUp") {
        moveDodgerUp();
      };

      if (event.key === "ArrowDown") {
        moveDodgerDown();
      };


  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0) {
    dodger.style.left = `${left - 40}px`;
    movementSound.play();
    }
    else {
        gameOverSound.play();
    };
  };

//   Tryk højre pil
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left < 360) {
    dodger.style.left = `${left + 40}px`;
    movementSound.play();
    }
    else {
        gameOverSound.play();
    };
  };

  //   Tryk op pil
  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if(bottom < 380) {
    dodger.style.bottom = `${bottom + 40}px`;
    movementSound.play();
    }
    else {
        gameOverSound.play();
    };
  };

  //   Tryk Ned pil
  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if(bottom > 0) {
    dodger.style.bottom = `${bottom - 40}px`;
    movementSound.play();
    }
    else {
        gameOverSound.play();
    };
  };

  const movementSound = document.getElementById("movementSound");

  function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
  };

  const gameOverSound = document.getElementById("gameOverSound");

  function playGameOverSound () {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
  };

