/*
document.write("Hello group 40");
 alert("Hello group 40");
 */
console.log("Hello group 40");

// comments

// variables - переменные

// let const var

let patientName = "Evgeniy";
let patientSurname = "Kiselev";

console.log("Welcome to hospital " + patientName);

patientName = prompt("What is your name?");

console.log("Welcome to hospital " + patientName);

// Data types - типы данных

// 1. string
// 2. number
// 3. boolean
// 4. object

let hospitalName = "Avicenna";
let hospitalAddress = "Bishkek Chui st. 5";
let hospitalPhone = "+996 312 66 77 88";

let patientAge = 18;
let patientTemp = 38.8;
let patientPoliceId = 8918498;
let patientRoom = 5;

// camel case
let hospitalPatientsCount = 45;

let patientHasPolice = true;
let patientHasPayments = false;
let patientIsPregnant = false;

let patientPressure = {
    high: 120,
    low: 70
};

let patientTotalBloodAnalysis = {
    eritrociths: 70.5,
    trombociths: 114.72,
    sugar: 11.2,
    gemoglobin: 112,
    group: "II",
    "rezus factor": "positive",
    gepatitC: false,
    gepatitA: false,
}

console.log("Your blood group is " + 
    patientTotalBloodAnalysis.group + " " + 
    patientTotalBloodAnalysis["rezus factor"]
);











