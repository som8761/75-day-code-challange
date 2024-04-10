/* How do you extract the firstName, lastName, and postcode properties using object destructuring?*/
const personDetailssss = {
  firstName: "Alice",
  lastName: "Smith",
  address: {
    city: "London",
    postcode: "SW1A 1AA",
  },
};

const {
  firstName,
  lastName,
  address: { city },
} = personDetailssss;

console.log(`name : ${firstName} lastName: ${lastName} , adress : ${city} `);

/***********************************************************************/

/* How can you use object destructuring to extract the name property of the second user in the array?*/

const users = [
  { name: "John", age: 30 },
  { name: "Emma", age: 25 },
  { name: "Michael", age: 35 },
];

function userFunc(user) {
  const { name } = user[1];
  return { name };
}

console.log(userFunc(users));

/***********************************************************************/

/*Use an array method to find the user with id equal to 2 and extract their name and age properties using object destructuring.*/

const CSA = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const filterTheId = CSA.filter((csa) => {
  if (csa.id === 2) {
    const { name, age } = csa;
    return { name, age };
  }
});

console.log(filterTheId);

/***********************************************************************/

/*Given an array of books, filter the books published in the 21st century (year 2000 or later) and create a new array containing only the titles of these books.*/

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publicationYear: 1997,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    publicationYear: 2008,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publicationYear: 2003,
  },
  { title: "The Road", author: "Cormac McCarthy", publicationYear: 2006 },
];

const filterTheBooks = books.filter((book) => {
  if (book.publicationYear >= 2000) {
    return book.publicationYear;
  }
});

console.log(`Books filtered by 2000`,filterTheBooks);
