let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

//sums args and prints result
function SumNPrint(x1, x2) {
  let x3 = x1 + x2;
  console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");
}


//find the banana in the array
let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr, arrName) {
  arr.forEach(item => {
    if (item === "Banana") {
      alert(`We found a banana in the ${arrName} array`);
    }
  });
}
findTheBanana(L1, "first");
findTheBanana(L2, "second");


//changes greeting in header based on time
function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("greeting");
    let greetingMessage = "";
  
    if (h < 12) {
      greetingMessage = "Good morning";
    } else if (h < 18) {
      greetingMessage = "Good afternoon";
    } else if (h < 20) {
      greetingMessage = "Good evening";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
      greetingMessage = "Good night";
    }
  
    E.innerHTML = greetingMessage;
  
    console.log(greetingMessage);
  }
  greetingFunc();
  

//changes year on website copyright
  function addYear() {
    let currentYear = new Date().getFullYear();
    let yearElement = document.getElementById("copyYear");

    if (yearElement) {
      yearElement.textContent = `designed and coded by Erika Egliskis © ${currentYear}`;
    }
}


// function showList() {
//   let list = document.getElementById("funList");
//   let button = document.getElementById("showButton");

//   if (list && button) {
//       list.style.display = "block";  
//       button.style.display = "none"; 
//   }
// }


$(document).ready(function() {
  $("#readLessBtn").hide(); 

//show long
  $("#readMoreBtn").click(function() {
      $("#shortBio").hide();
      $("#fullBio").slideDown();
      $("#readMoreBtn").hide();
      $("#readLessBtn").show();
  });

// show short
  $("#readLessBtn").click(function() {
      $("#fullBio").slideUp(function() {
          $("#shortBio").show();
          $("#readMoreBtn").show();
          $("#readLessBtn").hide();
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
      let isValid = true;

      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let comment = document.getElementById("comment");
      
      let nameError = document.getElementById("nameError");
      let emailError = document.getElementById("emailError");
      let commentError = document.getElementById("commentError");

      nameError.textContent = "";
      emailError.textContent = "";
      commentError.textContent = "";

      if (!name.checkValidity()) {
          nameError.textContent = "Please enter your name.";
          isValid = false;
      }

      if (!email.checkValidity()) {
          emailError.textContent = "Please enter a valid email address.";
          isValid = false;
      }

      if (!comment.checkValidity()) {
          commentError.textContent = "Please enter a comment.";
          isValid = false;
      }

      if (!isValid) {
          event.preventDefault();
      }
  });
});

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      document.getElementById("adviceText").innerText = advice;
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
      document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again!";
    });
}
