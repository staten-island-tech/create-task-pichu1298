import { randomItems } from "./array";
import "../style/style.css";

const DomSelectors = {
  container: document.querySelector(".container"),
  createContainer: document.querySelector(".create"),
};
const create = {
  name: document.getElementById("createName"),
  image: document.getElementById("createImage"),
  type: document.getElementById("createType"),
  gender: document.getElementById("createGender"),
  location: document.getElementById("createLocation"),
  button: document.getElementById("newArray"),
};
const input = document.getElementById("input");
const submitForm = document.getElementById("removeButton");
const reset = document.getElementById("resetBtn");

let newItems = [...randomItems];
let newArray = [];

let newArrayBtn = "notClicked";

create.button.addEventListener("click", (event) => {
  console.log("create Button clicked!");
  event.preventDefault();
  newArrayBtn = "clicked";
  newItems = [...newArray];
  DomSelectors.container.innerHTML = "";
  DomSelectors.createContainer.insertAdjacentHTML(
    "beforeend",
    `<div class = "card" id = "">
  <h1 class = "name" id = "${create.name.value}">Name: ${create.name.value}</h1>
  <img src="${create.image.value}" alt="">
  <h2 class = "${create.type.value}">Type: ${create.type.value}</h2>
  <h2 class = "${create.gender.value}">Gender: ${create.gender.value}</h2>
  <h2 class = "canBeFound" id = "${create.location.value}">Can be found: ${create.location.value}</h2>
  </div>`
  );
  newArray.push({
    name: create.name.value,
    type: create.type.value,
    gender: create.gender.value,
    canBeFound: create.location.value,
    imageUrl: create.image.value,
  });
  console.log(newArray);
});

randomItems.forEach((item) =>
  DomSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card" id = "">
<h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
<img src="${item.imageUrl}" alt="">
<h2 class = "${item.type}">Type: ${item.type}</h2>
<h2 class = "${item.gender}">Gender: ${item.gender}</h2>
<h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
</div>`
  )
);

reset.addEventListener("click", (event) => {
  event.preventDefault();
  if (newArrayBtn === "notClicked") {
    console.log("Reset button clicked!");
    DomSelectors.container.innerHTML = "";
    newItems = [...randomItems];

    randomItems.forEach((item) =>
      DomSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card" id = "">
  <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
  <img src="${item.imageUrl}" alt="">
  <h2 class = "${item.type}">Type: ${item.type}</h2>
  <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
  <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
  </div>`
      )
    );
  }
});

submitForm.addEventListener("click", (event) => {
  event.preventDefault();
  alogrithm();
});

function alogrithm() {
  if (newArrayBtn === "notClicked") {
    randomItems.forEach((item) => {
      if (item.name === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      } else if (item.gender === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      } else if (item.type === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      } else if (item.canBeFound === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      }
    });
  } else if (newArrayBtn === "clicked") {
    newArray.forEach((item) => {
      if (item.name === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      } else if (item.gender === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      } else if (item.type === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      } else if (item.canBeFound === input.value) {
        console.log(input.value);
        inputNewItems(input.value);
      }
    });
  }
}

function inputNewItems(value) {
  if (newArrayBtn === "notClicked") {
    DomSelectors.container.innerHTML = "";
    newItems = newItems.filter(
      (item) =>
        item.name !== value &&
        item.gender !== value &&
        item.type !== value &&
        item.canBeFound !== value
    );
    newItems.forEach((item) =>
      DomSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
    <img src="${item.imageUrl}" alt="">
    <h2 class = "${item.type}">Type: ${item.type}</h2>
    <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
    </div>`
      )
    );
  } else if (newArrayBtn === "clicked") {
    DomSelectors.createContainer.innerHTML = "";
    newItems = newItems.filter(
      (item) =>
        item.name !== value &&
        item.gender !== value &&
        item.type !== value &&
        item.location !== value
    );
    newItems.forEach((item) =>
      DomSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
    <img src="${item.imageUrl}" alt="">
    <h2 class = "${item.type}">Type: ${item.type}</h2>
    <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
    </div>`
      )
    );
  }
}
