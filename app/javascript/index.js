import { randomItems } from "./array";
import "../style/style.css";

const DomSelectors = {
  container: document.querySelector(".container"),
  task: document.querySelector("#Task"),
  moves: document.querySelector("#moves"),
  won: document.querySelector("#won"),
  form: document.querySelector("#normalForm"),
};

let input = document.getElementById("input");
let submitForm = document.getElementById("removeButton");
let reset = document.getElementById("resetBtn");

let targetItem =
  randomItems[Math.floor(Math.random() * randomItems.length)].name;

let newItems = [...randomItems];
let numberOfMoves = 0;

DomSelectors.task.textContent = `Get ${targetItem} remaining on your screen!`;
DomSelectors.moves.textContent = `You took ${numberOfMoves} moves so far!`;
DomSelectors.won.textContent = "";
randomItems.forEach((item) =>
  DomSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
    <h2 class = "${item.type}">Type: ${item.type}</h2>
    <h2 class = "${item.star}">Rarity: ${item.star}</h2>
    <h2 class = "${item.weapon}">Weapon: ${item.weapon}</h2>
    <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
    </div>`
  )
);
submitFormListen();
function addResetListener() {
  reset.addEventListener("click", (event) => {
    event.preventDefault();
    if (!document.getElementById("input")) {
      DomSelectors.won.textContent = "";
      DomSelectors.form.insertAdjacentHTML(
        "afterbegin",
        `    <input type="text" id = "input" placeholder = "What are you removing?">
    <button type="submit" id = "removeButton">Remove</button> `
      );
      input = document.getElementById("input");
      submitForm = document.getElementById("removeButton");
      submitFormListen();
      addResetListener();
    }
    console.log("Reset button clicked!");
    DomSelectors.container.innerHTML = "";
    newItems = [...randomItems];
    numberOfMoves = 0;
    DomSelectors.moves.textContent = `You took ${numberOfMoves} moves so far!`;
    targetItem =
      randomItems[Math.floor(Math.random() * randomItems.length)].name;
    DomSelectors.won.textContent = "";
    DomSelectors.task.textContent = `Get ${targetItem} remaining on your screen!`;
    randomItems.forEach((item) =>
      DomSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
    <h2 class = "${item.type}">Type: ${item.type}</h2>
    <h2 class = "${item.star}">Rarity: ${item.star}</h2>
    <h2 class = "${item.weapon}">Weapon: ${item.weapon}</h2>
    <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
    </div>`
      )
    );
  });
}
addResetListener();

function submitFormListen() {
  submitForm.addEventListener("click", (event) => {
    event.preventDefault();
    numberOfMoves++;
    DomSelectors.moves.textContent = `You took ${numberOfMoves} moves so far!`;
    checkItemsAlgorithm(input.value);
  });
}

function checkItemsAlgorithm(inputValue) {
  for (let i = 0; i < randomItems.length; i++) {
    if (randomItems[i].name === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].gender === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].type === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].canBeFound === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].star === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].weapon === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    }
  }
}

function inputNewItems(value) {
  DomSelectors.container.innerHTML = "";
  newItems = newItems.filter(
    (item) =>
      item.name !== value &&
      item.gender !== value &&
      item.type !== value &&
      item.canBeFound !== value &&
      item.star !== value &&
      item.weapon !== value &&
      item.imageUrl !== value
  );

  newItems.forEach((item) =>
    DomSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
    <h2 class = "${item.type}">Type: ${item.type}</h2>
    <h2 class = "${item.star}">Rarity: ${item.star}</h2>
    <h2 class = "${item.weapon}">Weapon: ${item.weapon}</h2>
    <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
    </div>`
    )
  );
  gotItem();
}

function gotItem() {
  console.log("gotItem function ran!");
  if (newItems[0].name === targetItem && newItems.length === 1) {
    input.remove();
    submitForm.remove();
    DomSelectors.moves.textContent = "";
    DomSelectors.won.textContent = `You won in ${numberOfMoves} moves! Want to try again?`;
  } else if (newItems.every((item) => item.name !== targetItem)) {
    input.remove();
    submitForm.remove();
    DomSelectors.moves.textContent = "";
    DomSelectors.won.textContent = `You lost in ${numberOfMoves} move(s)! Want to try again?`;
  }
}
