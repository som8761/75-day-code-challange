
// Change the colour of the element to blue
console.log(
  (document.body.children[1].lastElementChild.innerHTML =
    "Blue is my favourite colour")
);
console.log(
  (document.body.children[1].lastElementChild.style.background = "blue")
);

// ID selector
let orangeText = document.getElementById("orange-text");
orangeText.style.color = "green";
// orangeText.innerHTML = "I love to do coding";

// Class selector
let orderBtns = document.getElementsByClassName("order-btn");
orderBtns[0].style.color = "red";
orderBtns[1].style.color = "green";

// Query selector
let alertMessages = document.querySelectorAll(".alert-message");
// alertMessages[0].style.color = "blue";
// alertMessages[1].style.background = "pink";
// alertMessages[2].style.color = "red";
// alertMessages[2].style.background = "yellow";

alertMessages.forEach((elm) => {
  elm.style.color = "red"; // for changes the all elems in one line.
});

let personName = document.querySelector(".person-name");
personName.style.color = "cyan";
personName.style.background = "green";

console.log(document.getElementsByTagName("button"));
console.log(document.body.getElementsByTagName("h1"));
console.log(
  document.querySelector(".alert-message").getElementsByTagName("h1")
);

// Matches, closest & contains
let id1 = document.getElementById("id1");
console.log(id1.matches(".class")); // Returns false as there's no class named "class"
console.log(id1.matches(".box")); // Returns true as it matches the class "box"

console.log(spn1.closest("#spn1")); // Returns the span with ID "spn1" or its nearest ancestor
console.log(id1.contains(spn1)); // Checks if the element with ID "id1" contains the span with ID "spn1"
console.log(id2.contains(id2)); // Checks if the element with ID "id2" contains itself (true)
console.log(spn1.contains(spn1)); // Checks if the span with ID "spn1" contains itself (true)
