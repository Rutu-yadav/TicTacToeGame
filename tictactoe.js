let boxes = document.querySelectorAll(".box");
let b11 = document.querySelector(".b1");
let b22 = document.querySelector(".b2");
let msgg1 = document.querySelector(".msgg");
let msg1 = document.querySelector("#msg");

let turnO = true;

let wpattern = [
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
      box.innerText = "O";
      box.style.color = "#f72585";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "blue";
      turnO = true;
    }
    box.disabled = "true";

    checkwinner();
  });
});

const showwinner = (winner) => {
  msg1.innerText = ` Congrats ${winner} is winner  `;
  msgg1.classList.remove("hide");
  disabledboxes();
};

const checkwinner = () => {
  for (let pattern of wpattern) {
    let indexval1 = boxes[pattern[0]].innerText;
    let indexval2 = boxes[pattern[1]].innerText;
    let indexval3 = boxes[pattern[2]].innerText;

    if (indexval1 != "" && indexval2 != "" && indexval3 != "") {
      if (indexval1 === indexval2 && indexval2 === indexval3) {
        console.log("winner", indexval1);
        showwinner(indexval1);
      }
    }
  }
};

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const reset = () => {
  turnO = true;

  enabledboxes();
  hidee.classList.add("hide");
};

b22.addEventListener("click", reset);
b11.addEventListener("click", reset);
