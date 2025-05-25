let boxes = document.querySelectorAll(".box");
let winmsg = document.querySelector("#msg");
let hidemsg = document.querySelector(".hide");
let msg = document.querySelector(".msgg");
let newbtn = document.querySelector(".b2");
let resetbtn = document.querySelector(".b1");

turnO = true;
count = 0;

let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "o";
      box.style.color = "cyan";
      turnO = false;
    } else {
      box.innerText = "x";
      box.style.color = "blue";
      turnO = true;
    }
    box.disabled = true;

    count++;
    let drawmatch = checkwinner();

    if (count === 9 && !drawmatch) {
      draw();
    }
  });
});

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showwinner(pos1);
      }
    }
  }
};

const showwinner = (winner) => {
  winmsg.innerText = `congtras ${winner} is winner`;
  msg.classList.remove("hide");
  disabledallbox();
};

const disabledallbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const reset = () => {
  turnO = true;
  count = 0;
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }

  msg.classList.add("hide");
};

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);

const draw = () => {
  winmsg.innerText = `Match is draw u wanna play again`;
  msg.classList.remove("hide");
  disabledallbox();
};
