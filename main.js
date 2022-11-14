function getCancerScreen(age) {  // call only when they are NOT diagnosed
  let answer = []
  if (20 <= age && age < 30) {
    answer.push("0.1% (1 in 1439)");
    answer.push("<0.1% (1 in 18,029)");
  } else if (30 <= age && age < 40) {
    answer.push("0.5% (1 in 204)");
    answer.push("<0.1% (1 in 2945)");
  } else if (40 <= age && age < 50) {
    answer.push("1.6% (1 in 63)");
    answer.push("0.1% (1 in 674)");
  } else if (50 <= age && age < 60) {
    answer.push("2.4% (1 in 41)");
    answer.push("0.3% (1 in 324)");
  } else if (60 <= age && age < 70) {
    answer.push("3.5% (1 in 28)");
    answer.push("0.5% (1 in 203)");
  } else if (70 <= age && age < 80) {
    answer.push("4.1% (1 in 24)");
    answer.push("0.7% (1 in 137)");
  } else {
    answer.push("3.0% (1 in 33)");
    answer.push("1.0%(1 in 100)");
  }
  answer.push("12.9% (1 in 8)");  // lifetime risk
  answer.push("2.5% (1 in 39)");
  return answer;
}

function getProbability() {

}

function getDiagnosedSummary() {

}

function checkAge(age) {
  if (Number.isInteger(age) && (age > 19)) {
    return true;
  } return false;
}

function checkEthnicity(ethnicity) {

}

function checkDiagnosed(diagnosed) {

}

const readline = require("readline-sync");
let age = 0;
let ethnicity = "";
let diagnosed = "";
while (true) {
  console.log("Input age: ");
  age = Number(readline.question());
  if (checkAge(age)) break;
  else {
    console.log("Please put valid age (x >= 20)");
  };
}
while (true) {
  console.log("Input Ethnicity (Choose between White/Black/Hispanic/Asian Pacific Islander/American Indian Alaska Native): ");
  ethnicity = String(readline.question());
  if (checkEthnicity(ethnicity)) break;
  else {
    console.log("Please select between White/Black/Hispanic/Asian Pacific Islander/American Indian Alaska Native.");
  }
}
while (true) {
  console.log("Have you been diagnosed with breast cancer (Y/N): ");
  diagnosed = String(readline.question());
  if (checkDiagnosed(diagnosed)) break;
  else {
    console.log("Please put Y or N");
  }
}
