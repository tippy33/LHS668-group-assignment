function getCancerScreen() {
  
}

function getProbability() {

}

function getDiagnosedSummary() {

}

const { func } = require("prop-types");
const readline = require("readline-sync");
console.log("Input age: ");
let age = Number(readline.question());
console.log("Input Ethnicity (Choose between White/Black/Hispanic/Asian Pacific Islander/American Indian Alaska Native): ");
let ethnicity = String(readline.question());
console.log("Have you been diagnosed with breast cancer (Y/N): ");
let diagnosed = String(readline.question());