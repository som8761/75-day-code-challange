        // refferences all the input tags.
        const nameInputField = document.getElementById("nameInputField");
        const emailInputField = document.getElementById("emailInputField");
        const phoneInputField = document.getElementById("phoneInputField");
        const passwordInputField = document.getElementById("passwordInputField");
        const ConfrimPasswordInputField = document.getElementById(
          "ConfrimPasswordInputField"
        );
  
        // refferences all the texts below the inout tags.
        const nameText = document.getElementById("nameText");
        const emailText = document.getElementById("emailText");
        const phoneText = document.getElementById("phoneText");
        const passwordText = document.getElementById("passwordText");
        const confirmPasswordText = document.getElementById(
          "confirmPasswordText"
        );
  
        // reffernce the button tags.
        const submitButton = document.getElementById("submit");
        const resetButton = document.getElementById("reset");
  
        submitButton.addEventListener("click", (e) => {
            e.preventDefault();
            // Validation checks
            let isValid = true;
        
            if (nameInputField.value === "") {
                nameText.textContent = "Name Field is required*";
                isValid = false;
            } else {
                nameText.textContent = "";
            }
        
            if (emailInputField.value === "") {
                emailText.textContent = "Email is required*";
                isValid = false;
            } else if (!validEmail(emailInputField.value)) {
                emailText.textContent = "Enter the valid email!";
                isValid = false;
            } else {
                emailText.textContent = "";
            }
        
            if (phoneInputField.value === "") {
                phoneText.textContent = "Phone number is required*";
                isValid = false;
            } else if (phoneInputField.value.length < 10) {
                phoneText.textContent = "Enter the valid phone number!";
                isValid = false;
            } else {
                phoneText.textContent = "";
            }
        
            if (passwordInputField.value === "") {
                passwordText.textContent = "Password is required*";
                isValid = false;
            } else if (!isValidPassword(passwordInputField.value)) {
                passwordText.textContent = "Password must be 8 characters and contain at least 1 digit.";
                isValid = false;
            } else {
                passwordText.textContent = "";
            }
        
            if (confirmPasswordInputField.value === "") {
                confirmPasswordText.textContent = "Confirm password is required*";
                isValid = false;
            } else if (passwordInputField.value !== confirmPasswordInputField.value) {
                confirmPasswordText.textContent = "Passwords do not match!";
                isValid = false;
            } else {
                confirmPasswordText.textContent = "";
            }
        
            // If all fields are valid, submit the form
            if (isValid) {
                alert("Your form has been submitted successfully!");
                document.getElementById("myForm").reset();
                saveTheTask();
            }
        });
        
  
        resetButton.addEventListener("click", () => {
          document.getElementById("myForm").reset();
          myForm.reset();
          nameText.textContent = "";
          emailText.textContent = "";
          phoneText.textContent = "";
          passwordText.textContent = "";
          ConfirmPasswordText.textContent = "";
        });
  
        function validEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email); // email er modhe emailRejex er jinis gulo ache ki na dekha hoche ekhane.
        }
        function isValidPassword(password) {
          const passRejex = /^(?=.*[0-9])(?=.*[@#$^&*()+!]).{8,}$/;
          return passRejex.test(password);
        }
  
        function saveTheTask() {
          localStorage.setItem("name", nameInputField.value);
          localStorage.setItem("email", emailInputField.value);
          localStorage.setItem("phone", phoneInputField.value);
          localStorage.setItem("password", passwordInputField.value);
          localStorage.setItem(
            "confirmPassword",
            ConfrimPasswordInputField.value
          );
        }
        function showTask() {
          nameInputField.value = localStorage.getItem("name");
          emailInputField.value = localStorage.getItem("email");
          phoneInputField.value = localStorage.getItem("phone");
          passwordInputField.value = localStorage.getItem("password");
          ConfrimPasswordInputField.value =
            localStorage.getItem("confirmPassword");
        }
        showTask();
  
        resetButton.addEventListener("click", () => {
          // document.getElementById("myForm").reset();
          nameText.textContent = "";
          emailText.textContent = "";
          phoneText.textContent = "";
          passwordText.textContent = "";
          confirmPasswordText.textContent = "";
  
          // Clear the data in local storage
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          localStorage.removeItem("phone");
          localStorage.removeItem("password");
          localStorage.removeItem("confirmPassword");
        });
  
  
  
  
        /*adding the password strength checker(for password validation only.)*/
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
        }
  
          function passwordMaking(strong, medium,  upper, lower,digit, special) {
          const passwordInputField = document.getElementById("passwordInputField").value;
  
          // Clear both text areas before providing fpasswordTexteedback
          passwordText.innerHTML = "";
          feedbackMessage.innerHTML = "";
  
          // testing the rejex with the password value whether the input is strong or not.
          if (strong.test(passwordInputField)) {
           passwordText.innerHTML = "your password is strong and secure.";
            passwordText.style.color = "green";
          }
          // testing the rejex with the password value whether the input is medium or not.
          else if (medium.test(passwordInputField)) {
            passwordText.innerHTML = "your password is moderately strong.";
            passwordText.style.color = "orange";
          } else {
            let feedbackMessage = "your password is weak .please imporve it by:<br>";
  
            if (!upper.test(passwordInputField)) {
              feedbackMessage += "adding at least one uppercase letter,<br>";
            }
            if (!lower.test(passwordInputField)) {
              feedbackMessage += " adding at least one lowercase letter,<br>";
            }
            if (!digit.test(passwordInputField)) {
              feedbackMessage += " adding at least one digit,<br>";
            }
            if (!special.test(passwordInputField)) {
              feedbackMessage +=
                " adding at least one special character (e.g., !@#£$%^&*),";
            }
  
            // Remove the trailing comma and display the message
            passwordText.innerHTML = feedbackMessage.replace(/,$/, '.') ;
            passwordText.style.color = "red";
          }
        }
        passwordInputField.addEventListener('input',()=>{
          passwordStrengthCheck()
        })
