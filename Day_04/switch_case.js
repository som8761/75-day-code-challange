const marks = parseFloat(prompt("write your marks!"));

switch (
  true // true means it tell us to find the true based on the below condition.
) {
  case marks < 25:
    console.log("Below Average or Poor");
    break;

  case marks >= 25 && marks < 60:
    console.log("average!");
    break;

  case marks >= 60 && marks < 75:
    console.log("Good!");
    break;

  default:
    console.log("Excellent");
}

// to jab manlo 90 marks hay to , jaha pe ye condition true hua waha pe break lag jayega..
// switch true means find 'true' based on your marks.'..in a simple words find true jab tak na tumko true mil jaye kisi conditoin pe..

/*********************************************************************/

const num = parseFloat(prompt("write a num!"));

switch (
  true // find the true based upon the num value until you get true.
) {
  case num === 0:
    console.log("zero");
    break;

  case num <= 0:
    console.log("negative");
    break;

  default:
    console.log("positive");
}

/*********************************************************************/

// const day = prompt("what is the day today?").toLowerCase();

// switch (true) {
//   case day === "monday":
//     console.log("It's monday!");
//     break;

//   case day === "tuesday":
//     console.log("It's tuesday!");
//     break;

//   case day === "wednesday":
//     console.log("It's wednesday!");
//     break;

//   case "thursday":
//     console.log("It's Thursday!");
//     break;

//   case "friday":
//     console.log("It's Friday!");
//     break;

//   case "saturday":
//     console.log("It's Saturday!");
//     break;

//   case "sunday":
//     console.log("It's Sunday!");
//     break;

//   default:
//     console.log("It's some other day.");
// }


const day = prompt("What is the day today?").toLowerCase();

switch (day) {
  case "monday":
    console.log("It's Monday!");
    break;

  case "tuesday":
    console.log("It's Tuesday!");
    break;

  case "wednesday":
    console.log("It's Wednesday!");
    break;

  case "thursday":
    console.log("It's Thursday!");
    break;

  case "friday":
    console.log("It's Friday!");
    break;

  case "saturday":
    console.log("It's Saturday!");
    break;

  case "sunday":
    console.log("It's Sunday!");
    break;

  default:
    console.log("It's some other day.");
}





/*Use ternary operator when you have one data use switch case when you have lots of conditions. */
