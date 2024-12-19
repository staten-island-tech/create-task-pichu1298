import { randomItems } from "./array";
import "../style/style.css";

const DomSelectors = {
  container: document.querySelector(".container"),
  createContainer: document.querySelector(".create"),
  body: document.getElementById("body"),
};
DomSelectors.body.insertAdjacentHTML(
  "afterbegin",
  `<form action="" id = "createForm">
<input type="text" id = "createName" placeholder = "Name?">
<input type="text" id = "createImage" placeholder = "Image?">
<input type="text" id = "createType" placeholder = "Type?">
<input type="text" id = "createGender" placeholder = "Gender?">
<input type="text" id = "createLocation" placeholder = "Where can it be found?">
<button type="submit" id = "newArray">Add your own cards</button> 
<button type="submit" id = "finishedArray">Array Done?</button>
</form>
<form action="" id = "normalForm">
<input type="text" id = "input" placeholder = "What are you removing?">
<button type="submit" id = "removeButton">Remove</button> 
<button type="submit" id = "resetBtn">Reset Categories</button>
</form>`
);

const create = {
  name: document.getElementById("createName"),
  image: document.getElementById("createImage"),
  type: document.getElementById("createType"),
  gender: document.getElementById("createGender"),
  location: document.getElementById("createLocation"),
  button: document.getElementById("newArray"),
  arrayConfirm: document.getElementById("finishedArray"),
  form: document.getElementById("createForm"),
};
const input = document.getElementById("input");
let submitForm = document.getElementById("removeButton");
let reset = document.getElementById("resetBtn");

let newItems = [...randomItems];
let newArray = [];

let newArrayBtn = "notClicked";
create.arrayConfirm.addEventListener("click", (event) => {
  event.preventDefault();
  create.form.innerHTML = "";
  document.getElementById("normalForm").insertAdjacentHTML(
    "beforeend",
    `<input type="text" id = "input" placeholder = "What are you removing?">
  <button type="submit" id = "removeButton">Remove</button> 
  <button type="submit" id = "resetBtn">Reset Categories</button>`
  );
  newArrayBtn = "clicked";
  submitForm = document.getElementById("removeButton");
  submitForm.addEventListener("click", (event) => {
    event.preventDefault();
    alogrithm();
  });
  reset = document.getElementById("resetBtn");
  console.log(submitForm);
  addResetListener();
});

create.button.addEventListener("click", (event) => {
  console.log("create Button clicked!");
  event.preventDefault();
  newArrayBtn = "clicked";
  newItems = [...newArray];
  DomSelectors.container.innerHTML = "";
  document.getElementById("normalForm").innerHTML = "";
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

function addResetListener() {
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
    } else if (newArrayBtn === "clicked") {
      DomSelectors.createContainer.innerHTML = "";
      newArray.forEach((item) =>
        DomSelectors.createContainer.insertAdjacentHTML(
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
}
addResetListener();

submitForm.addEventListener("click", (event) => {
  event.preventDefault();
  alogrithm();
});

function alogrithm() {
  console.log("click");
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
  }
}
