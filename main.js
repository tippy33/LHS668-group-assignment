function getProbability(age) {  // call only when they are NOT diagnosed
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

function getCancerScreen() {

}

function getDiagnosedSummary(ethnicity) {
  let answer = [];
  let stage = [];
  let tumorSize = [];
  let grade = [];
  let erStatus = [];
  let subtype = [];
  if (ethnicity=="White") {
    stage = [68, 24, 5, 3];
    tumorSize = [58, 30, 7, 6];
    grade = [23, 43, 26, 8];
    erStatus = [82, 14, 4];
    subtype = [71, 9, 4, 9, 7];
  } else if (ethnicity=="Black") {
    stage = [57, 31, 8, 3];
    tumorSize = [46, 34, 12, 7];
    grade = [13, 36, 41, 9];
    erStatus = [69, 27, 5];
    subtype = [57, 10, 5, 19, 8];
  } else if (ethnicity=="Hispanic") {
    stage = [60, 31, 6, 4];
    tumorSize= [48, 34, 10, 9];
    grade= [17, 40, 34, 10];
    erStatus = [76, 18, 6];
    subtype = [63, 11, 5, 11];
  } else if (ethnicity=="Asian Pacific Islander") {
    stage = [65, 27, 5, 2];
    tumorSize=[51, 34, 9, 5];
    grade = [18, 43, 31, 7];
    erStatus = [80, 16, 4];
    subtype = [66, 12, 6, 9, 7];
  } else if (ethnicity=="American Indian Alaska Native") {
    stage = [60, 29, 7, 4];
    tumorSize = [48, 34, 9, 9];
    grade = [22, 40, 29, 9];
    erStatus = [77, 17, 5];
    subtype = [66, 10, 5, 11, 9];
  }
  answer.push(stage);
  answer.push(tumorSize);
  answer.push(grade);
  answer.push(erStatus);
  answer.push(subtype);
  return answer;
} 

function checkAge(age) {
  if (Number.isInteger(age) && (age > 19)) {
    return true;
  } return false;
}

function checkEthnicity(ethnicity) {
  return true;
}

function checkDiagnosed(diagnosed) {
  return true;
}

function printDiagnosedSummary(answer) {
  console.log('Following is the summary of characteristics of invasive female breat cancer by your ethnicity: ');
  console.log('SEER Summary stage - Local: '+answer[0][0]
              +', Regional: '+answer[0][1]+', Distant: '+answer[0][2]
              +', Unknown: '+answer[0][3]);
  console.log('Tumor size (cm) - <2.0: '+answer[1][0]
              +', 2.0-4.9: ', answer[1][1]
              +', >=5: ', answer[1][2]+', Unknown: '+answer[1][3]);
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
answer = getDiagnosedSummary(ethnicity);
printDiagnosedSummary(answer);
