// Fetching data from API and rendering it on the webpage
async function getData() {
    // Fetch data from the API
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
  
    // Selecting necessary elements from the DOM
    const renderData = document.getElementById("renderData");
    const cart_container = document.getElementById("cart_container");
  
    // Iterating over the data and creating elements for each product
    data.map((element) => {
      // Creating image element
      const imgEle = document.createElement("img");
      imgEle.setAttribute("src", element.image);
      imgEle.classList.add("imageStyle");
  
      // Creating title element
      const trimmedTitle = element.title.slice(0, 25);
      const titleEle = document.createElement("p");
      const titleText = document.createTextNode(trimmedTitle);
      titleEle.appendChild(titleText);
      titleEle.classList.add("titleSTyle");
  
      // Creating price element
      const priceEle = document.createElement("p");
      const priceText = document.createTextNode(`price$:${element.price}`);
      priceEle.appendChild(priceText);
  
      // Creating button element
      const btnEle = document.createElement("button");
      btnEle.classList.add("btnSyle");
      const btnText = document.createTextNode("Add To Cart");
      btnEle.appendChild(btnText);
  
      // Creating container for each product element
      const containerForEachElement = document.createElement("div");
      containerForEachElement.classList.add("containerForEachElement_style");
      containerForEachElement.appendChild(imgEle);
      containerForEachElement.appendChild(titleEle);
      containerForEachElement.appendChild(priceEle);
      containerForEachElement.appendChild(btnEle);
  
      // Appending each product container to the main container
      renderData.appendChild(containerForEachElement);
  
      // Adding event listener to the 'Add to Cart' button
      btnEle.addEventListener("click", () => {
        dataOnCart(element.image, element.title, element.price);
      });
    });
  }
  
  // Function to add product to the cart
  function dataOnCart(imageSrc, title, price) {
    const cart_container = document.getElementById("cart_container");
    const cartHeading = document.getElementById("cartHeading");
    const cartContainerH1 = document.querySelector("#cart_container h1");
    const TC = document.getElementById("TC");
    const total = document.querySelector("#TC p");
    const sup = document.querySelector("#cart_icon sup");
  
    // Creating elements for the product to be added to the cart
    const cartImageEle = document.createElement("img");
    cartImageEle.setAttribute("src", imageSrc);
    cartImageEle.classList.add("cartImageStyle");
  
    const cartPriceEle = document.createElement("p");
    const cartPriceText = document.createTextNode(`price$: ${price}`);
    cartPriceEle.appendChild(cartPriceText);
  
    const deleteEle = document.createElement("span");
    deleteEle.classList.add("deleteIcon");
    deleteEle.innerHTML = '<i class="fas fa-trash"></i>'; // Use "fas" for solid style in Font Awesome
  
    const liEle = document.createElement("li");
    liEle.classList.add("liStyle");
    liEle.appendChild(cartImageEle);
    liEle.appendChild(cartPriceEle);
    liEle.appendChild(deleteEle);
  
    // Appending product to the cart
    cart_container.appendChild(liEle);
  
    // Showing cart items and total price
    let displayBlock = (cartHeading.style.display = "flex");
    if (displayBlock) {
      cartContainerH1.style.display = "none";
      TC.style.display = "flex";
    }
    sup.innerHTML++;
  
    // Adding event listener to the delete icon
    deleteEle.addEventListener("click", () => {
      removeLiFromCart(liEle, sup); // calling the function for remove.
    });
  
    // Calculating total price of cart items
    totalPrice(price, total);
  }
  
  // Function to remove product from the cart
  function removeLiFromCart(cartItem, sup) {
    const cartContainerH1 = document.querySelector("#cart_container h1");
    const cartHeading = document.getElementById("cartHeading");
  
    // Removing item from the cart
    cartItem.remove();
    sup.innerHTML--;
  
    // Checking if there are no more cart items
    const remainingCartItems = document.querySelectorAll(
      "#cart_container .liStyle"
    );
    if (remainingCartItems.length === 0) {
      cartContainerH1.style.display = "block";
      cartHeading.style.display = "none";
    }
  }
  
  // Function to calculate total price of cart items
  const priceArray = [];
  function totalPrice(price, total) {
    priceArray.push(price);
    const totalPrice = priceArray.reduce((acc, price) => {
      return price + acc;
    });
    total.innerHTML = `total Price:${totalPrice}`;
  }
  
  // Event listener for toggling cart display
  const cart_icon = document.getElementById("cart_icon");
  const cart_container = document.getElementById("cart_container");
  cart_icon.addEventListener("click", () => {
    cart_container.classList.toggle("cart_container_style");
  });
  
  // Calling the getData function to fetch and render initial data
  getData();
  