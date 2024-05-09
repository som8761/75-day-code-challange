
const password_text = document.getElementById("password-text");
// const feedbackMessage = document.getElementById("feedbackMessage");

// making the rejexs of the password.
function passwordStrengthCheck() {
  const strongRejex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#£$%^&*])"
  );
  const mediumRegex = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])");
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasDigit = /\d/;
  const hasSpecialChar = /[!@#£$%^&*]/;

  passwordMaking(
    strongRejex,
    mediumRegex,
    hasUpperCase,
    hasLowerCase,
    hasDigit,
    hasSpecialChar
  );

  // sobar age jadi ami age rejex gulo baniye niy tahole ai somsoto kaj jamon test korar khetre valo hoy...
}

function passwordMaking(strong, medium,  upper, lower,digit, special) {
  const password = document.getElementById("password").value;

  // Clear both text areas before providing feedback
  password_text.innerHTML = "";
  feedbackMessage.innerHTML = "";

  // testing the rejex with the password value whether the input is strong or not.
  if (strong.test(password)) {
    password_text.innerHTML = "your password is strong and secure.";
    password_text.style.color = "green";
  }
  // testing the rejex with the password value whether the input is medium or not.
  else if (medium.test(password)) {
    password_text.innerHTML = "your password is moderately strong.";
    password_text.style.color = "orange";
  } else {
    let feedbackMessage = "your password is weak .please imporve it by:<br>";

    if (!upper.test(password)) {
      feedbackMessage += "adding at least one uppercase letter,<br>";
    }
    if (!lower.test(password)) {
      feedbackMessage += " adding at least one lowercase letter,<br>";
    }
    if (!digit.test(password)) {
      feedbackMessage += " adding at least one digit,<br>";
    }
    if (!special.test(password)) {
      feedbackMessage +=
        " adding at least one special character (e.g., !@#£$%^&*),";
    }

    // Remove the trailing comma and display the message
    password_text.innerHTML = feedbackMessage.replace(/,$/, '.') ;
    password_text.style.color = "red";
  }
}
// adding event listener to the password input...
password.addEventListener("input", () => {
  passwordStrengthCheck();
});
