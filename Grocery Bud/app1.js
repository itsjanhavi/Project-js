
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
document.addEventListener("DOMContentLoaded", setup);

function addItem(e) {
  e.preventDefault();
  const value = grocery.value.trim();
  if (!value) {
    displayAlert("Please enter a value", "danger");
    return;
  }
  const id = new Date().getTime().toString();
  const listItem = createListItem(id, value);
  list.appendChild(listItem);
  addToLocalStorage(id, value);
  displayAlert("Item added to the list", "success");
  form.reset();
}

function clearItems() {
  list.innerHTML = "";
  localStorage.removeItem("list");
  displayAlert("List cleared", "danger");
}

function removeItem(e) {
  const item = e.target.closest(".grocery-item");
  const id = item.dataset.id;
  list.removeChild(item);
  removeFromLocalStorage(id);
  displayAlert("Item removed", "danger");
}

function editItem(e) {
  const item = e.target.closest(".grocery-item");
  const id = item.dataset.id;
  const value = item.querySelector(".title").textContent.trim();
  grocery.value = value;
  submitBtn.textContent = "Edit";
  submitBtn.dataset.id = id;
  submitBtn.removeEventListener("click", addItem);
  submitBtn.addEventListener("click", updateItem);
}

function updateItem(e) {
  e.preventDefault();
  const id = e.target.dataset.id;
  const value = grocery.value.trim();
  if (!value) {
    displayAlert("Please enter a value", "danger");
    return;
  }
  const items = Array.from(list.children);
  const selectedItem = items.find(item => item.dataset.id === id);
  selectedItem.querySelector(".title").textContent = value;
  editLocalStorage(id, value);
  displayAlert("Item updated", "success");
  form.reset();
  submitBtn.textContent = "Submit";
  submitBtn.removeEventListener("click", updateItem);
  submitBtn.addEventListener("click", addItem);
}

function displayAlert(message, type) {
  alert.textContent = message;
  alert.className = `alert alert-${type}`;
  setTimeout(() => {
    alert.textContent = "";
    alert.className = "alert";
  }, 1000);
}

function setup() {
  const items = getLocalStorage();
  items.forEach(item => {
    const listItem = createListItem(item.id, item.value);
    list.appendChild(listItem);
  });
}

function createListItem(id, value) {
  const item = document.createElement("article");
  item.classList.add("grocery-item");
  item.setAttribute("data-id", id);
  item.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button class="delete-btn"><i class="fas fa-trash"></i></button>
      <button class="edit-btn"><i class="far fa-edit"></i></button>
    </div>
  `;
  item.querySelector(".delete-btn").addEventListener("click", removeItem);
  item.querySelector(".edit-btn").addEventListener("click", editItem);
  return item;
}

function addToLocalStorage(id, value) {
  const items = getLocalStorage();
  items.push({ id, value });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(item => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(item => item.id !== id);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("list")) || [];
}
