
const expenseBtn = document.getElementById("expenseBtn");
const expense_list = document.getElementById("expense_list");
const errorMessage = document.getElementById("errorMessage");

function addExpenses() {
  const expenseField = document.getElementById("expenseField").value;
  const amountField = document.getElementById("amountField").value;
  const dateField = document.getElementById("dateField").value;

  if (expenseField === "") {
    errorMessage.textContent = "add something in expenseField*";
  } else if (amountField === "") {
    errorMessage.textContent = "add something in amountField*";
  } else if (dateField === "") {
    errorMessage.textContent = "add something in dateField*";
  } else {
    errorMessage.textContent = "";
    createElement(expenseField, amountField, dateField);
    // Clear input fields after adding an expense
    document.getElementById("expenseField").value = "";
    document.getElementById("amountField").value = "";
    document.getElementById("dateField").value = "";
  }
}

// let expenseCount = 1; // for use the delete newDiv and update the espenseCount i comment out this.

function createElement(expenseField, amountField, dateField) {
  const createElm = document.createElement("div");
  createElm.classList.add("newDiv");


  createElm.innerHTML = 
  // i added 1 with .length for start the index 1 instead of 0.
  `<h2>Expense:(${document.querySelectorAll(".newDiv").length + 1})</h2> 
  <h3>${expenseField}</h3>
  <p>${amountField}</p>
  <p>${dateField}</p>`;

  expense_list.appendChild(createElm);

  eraseTheNewDiv(createElm);
}

expenseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addExpenses();
});
function eraseTheNewDiv(createElm) {
  const eraseBtn = document.createElement("button");
  eraseBtn.classList.add("erase");
  eraseBtn.textContent = "delete";

  createElm.appendChild(eraseBtn);

  eraseBtn.addEventListener("click", () => {
    createElm.remove();

    // Update the counts for all remaining expense elements
    const expenseElements = document.querySelectorAll(".newDiv");

    expenseElements.forEach((element, index) => {
      element.querySelector("h2").textContent = `Expense:(${index + 1})`;
    });
  });
}


