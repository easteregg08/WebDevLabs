let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

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
  