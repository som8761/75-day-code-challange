const navbar = document.getElementById("navbar");
navbar.firstElementChild.style.color = "red";


const childrens = document.getElementById("childrens");
childrens.firstElementChild.style.color = "green";
childrens.lastElementChild.style.color = "green";


const headers = document.querySelectorAll("h2, h5, h3");
headers.forEach((header) => {
  header.style.backgroundColor = "cyan";
});
