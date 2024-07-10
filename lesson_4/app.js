console.log("lesson 4");

// for

let numbers = [7, 4, 5, 4, 1, 2];

for (let num of numbers) {
}

for (let i = 0; i < 6; i++) {
  console.log("i = ", i);
}

for (let i = 0; i < numbers.length; i++) {
  console.log("numbers[" + i + "] = " + numbers[i]);
}

let multTable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 7

// Functions

// function declaraton
function calculateCircleArea(radius) {
  let result = Math.PI * radius * radius;
  return result;
}

console.log("circle = " + calculateCircleArea(10));

// function expression
let calculateRectangleArea = function (height, width) {
  return height * width;
};

console.log("rectangle = " + calculateRectangleArea(50, 40));

function validatePhoneNumber(phoneNumber) {
  if (!phoneNumber) return false;

  if (!phoneNumber.startsWith("996")) return false;

  if (phoneNumber.length !== 12) return false;

  for (let digit of phoneNumber) {
    digit = Number(digit);
    if (isNaN(digit)) return false;
  }

  return true;
}

function getOperatorCode(phoneNumber) {
  return phoneNumber.slice(3, 6);
}

let isMega = function (code) {
  let megaCodes = [
    "550",
    "551",
    "552",
    "553",
    "554",
    "555",
    "556",
    "557",
    "558",
    "559",
  ];
  return arrayContains(megaCodes, code);
};

let isO = function (code) {
  let oCodes = [
    "500",
    "501",
    "502",
    "504",
    "505",
    "507",
    "508",
    "509",
    //и (700, 701, 702, 703, 704, 705, 706, 707, 708, 709
  ];
  return arrayContains(oCodes, code);
};

// 996999112233
function getOperatorName(phoneNumber) {
  if (!validatePhoneNumber(phoneNumber)) {
    console.error("Invalid phone number", phoneNumber);
    return null;
  }

  let operatorCode = getOperatorCode(phoneNumber);

  if (isMega(operatorCode)) return "MEGA";

  if (isO(operatorCode)) return "O!";

  return null;
}

let userPhone = prompt("enter phone number");

console.log(getOperatorName(userPhone));

function arrayContains(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }

  return false;
}

let userAutoNumber = prompt("enter auto number");

function getRegionCode(autoNumber) {
  return autoNumber.slice(0, 2);
}

// 01KG123ABC
function getRegionName(autoNumber) {
  let regionCode = getRegionCode(autoNumber);

  switch (regionCode) {
    case "01":
      return "Бишкек";
    case "02":
      return "Ош";
    case "03":
      return "Баткен";
    case "04":
      return "Джалал-абад";
  }

  return null;
}

console.log(userAutoNumber + " -> " + getRegionName(userAutoNumber));
