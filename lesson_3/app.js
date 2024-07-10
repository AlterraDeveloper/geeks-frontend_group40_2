// console.log("lesson 3");

// let trafficColor = "green";

// if (trafficColor === "green") {
//   console.log("Go");
// } else if (trafficColor === "yellow") {
//   // ...
// } else if (trafficColor === "red") {
//   // ...
// } else {
//   // ...
// }

// switch (trafficColor) {
//   case "green":
//     console.log("Go");
//     break;
//   case "yellow":
//     // ...
//     break;
//   case "red":
//     // ...
//     break;
//   default:
//   // ...
// }

// let planetNumber = Number(prompt("Choose planet 1-9"));

// console.log("planet number data type:", typeof planetNumber);
// === ==
// switch (Number(planetNumber)) {
//   case 1:
//     console.log("Mercury");
//     break;
//   case 2:
//     console.log("Venus");
//     break;
//   case 3:
//     console.log("Earth");
//     break;
//   default:
//     console.warn("Invalid number");
// }

// planetNumber = Number(planetNumber);
// if (planetNumber === 1) {
//   console.log("Mercury");
// } else if (planetNumber === 2) {
//   console.log("Venus");
// } else if (planetNumber === 3) {
//   console.log("Earth");
// } else {
//   console.error("Invalid number");
// }

// Arrays - массивы

// Indexing (индексация)
// let planets = ["Mercury", "Venus", "Earth"];
// //                 0         1         2
// console.log("From array:", planets[planetNumber - 1]);

let patients = ["Nazgul", "Tilek", "Almaz", "Tamara"];

console.log("Last patient:", patients[patients.length - 1]);
console.log("Patient count:", patients.length);

patients.push("Ilya");

console.log("Last patient:", patients[patients.length - 1]);
console.log("Patient count:", patients.length);

patients.unshift("Bahtiyar");

console.log(patients);

patients.splice(1, 0, "Elena");

console.log(patients.pop() + " left queue");

// for..of
// for
// for..in
// while
// do..while

for (let patient of patients) {
  console.log("Current patient is:", patient);
}

let patientsBirthYears = [
  1956, 2002, 1988, 1964, 2005, 2020, 1986, 1997, 2013, 2018,
];

let kidsCount = 0;
let adultsCount = 0;
let currentYear = new Date().getFullYear(); //2024

for (let year of patientsBirthYears) {
  let age = currentYear - year;
  if (age < 18) {
    kidsCount++; // kidsCount += 1;
  } else {
    adultsCount++;
  }
}

console.log("All patients count:", patientsBirthYears.length);
console.log("Adults:", adultsCount);
console.log("Kids:", kidsCount);

let doctors = ["Halilov", "Ivanov", "Ysupova", "Kim", "Rodionov"];

for (let i = 0; i < doctors.length; i++) {
    console.log(doctors[i] + " принимает в " + (i + 1) + " кабинете");
}

// for(;;) for (let i = 0; i < 10; i--)

let patientPayments = [1000, 800, 600, 2000, 1200, 800, 800, 600];

let totalPayments = 0;

for(let payment of patientPayments){
    totalPayments += payment;
}

console.log("Total:", totalPayments);
