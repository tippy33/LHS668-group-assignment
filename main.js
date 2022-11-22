function getProbabilityAge(age) {  // call only when they are NOT diagnosed
  let answer = []
  if (20 <= age && age < 30) {
    answer.push("Breast Cancer Incidence is 0.1% | 1 in 1439");
    answer.push("Breast Cancer Mortality upon incidence is less than 0.1% | 1 in 18,029");
  } else if (30 <= age && age < 40) {
    answer.push("Breast Cancer Incidence is 0.5% | 1 in 204");
    answer.push("Breast Cancer Mortality upon incidence is less than 0.1% | 1 in 2945");
  } else if (40 <= age && age < 50) {
    answer.push("Breast Cancer Incidence is 1.6% | 1 in 63");
    answer.push("Breast Cancer Mortality upon incidence is less than 0.1% | 1 in 674");
  } else if (50 <= age && age < 60) {
    answer.push("Breast Cancer Incidence is 2.4% | 1 in 41");
    answer.push("Breast Cancer Mortality upon incidence is less than 0.3% | 1 in 324");
  } else if (60 <= age && age < 70) {
    answer.push("Breast Cancer Incidence is 3.5% | 1 in 28");
    answer.push("Breast Cancer Mortality upon incidence is less than 0.5% | 1 in 203");
  } else if (70 <= age && age < 80) {
    answer.push("Breast Cancer Incidence is 4.1% | 1 in 24");
    answer.push("Breast Cancer Mortality upon incidence is less than 0.7% | 1 in 137");
  } else {
    answer.push("Breast Cancer Incidence is 3.0% | 1 in 33");
    answer.push("Breast Cancer Mortality upon incidence is less than 1.0% | 1 in 100");
  }
  return answer;
}

function printProbability(answer) {
  console.log(answer[0]);
  console.log(answer[1]);
  console.log('-----------------------------------------------------');
}

function getRecommendations(age, p_status, highrisk) {
  // console.log("For an average woman your age, the probability for :"); // ??
  console.log("Following are the Recommendations to prevent Breast Cancer, given your age");
  if (age >= 20 && age < 30)
  {
    if (highrisk == "Y" || highrisk == "y"){
      console.log("Since you have a strong family history of breast cancer or you are at high risk according to your clinician , a mammogram and MRI, with possible medication to prevent breast cancer, should be part of your annual health assessment starting at age 25.");
      console.log("--Note that your average risk for break cancer as mentioned in the top - is doubled with your history/risk");
    }
    else {
      console.log("Research shows that early detection of Breast Cancer means a greater probability of surviving, hence, it is a good idea to make tri-annual breast exams a part of your health-habits early on.");
    }

    if (p_status == "Y" || p_status == "y") {
      console.log("Breast-feeding your children for at least 6 months can cut your risk of low-grade, slow-growing breast cancer by 20% and up to 50% for triple-negative disease.");
    }
    console.log("Know your breasts. If you familiarize yourself with what is normal for your breasts, you may be able to catch any normalities before they become a real problem. If you detect something unusual or strange, contact your medical provider as soon as possible.");
    console.log("Keep alcohol consumption to one drink per day.");
    console.log("Exercise regularly, at least 3 to 4 hours every week.");
    console.log("Eat a healthy diet, decreasing or eliminating high-calorie, low-nutrition “junk food” like sugary drinks and highly refined breads. Keep your red meat consumption to 4oz. per day and eat lots of colorful fruits and vegetables.");
  }
  if (age >= 30 && age < 40)
  {
    if (highrisk == "Y" || highrisk == "y"){
      console.log("Since you have a strong family history of breast cancer or you are at high risk according to your clinician , a mammogram and MRI, with possible medication to prevent breast cancer, should be part of your annual health assessment starting now");
      console.log("-- Note that your average risk for break cancer as mentioned in the top - is doubled with your history/risk");
    }
    else {
      console.log("Research shows that early detection of Breast Cancer means a greater probability of surviving, hence, it is a good idea to make tri-annual breast exams a part of your health-habits early on.");
    }

    if (p_status == "Y" || p_status == "y") {
      console.log("Breast-feeding your children for at least 6 months can cut your risk of low-grade, slow-growing breast cancer by 20% and up to 50% for triple-negative disease.");
    }
    console.log("Exposure to several stressful life events before the age of thirty, like divorce or death of parents, may increase your risk of breast cancer. Experiencing more than one negative meaningful life event has been shown as a risk factor for breast cancer among young women. Hence, take care of your mental health, manage your stress and get help when you need it. ");
    console.log("Know your breasts. If you familiarize yourself with what is normal for your breasts, you may be able to catch any normalities before they become a real problem. If you detect something unusual or strange, contact your medical provider as soon as possible.");
    console.log("Keep alcohol consumption to one drink per day.");
    console.log("Exercise regularly, at least 3 to 4 hours every week.");
    console.log("Eat a healthy diet, decreasing or eliminating high-calorie, low-nutrition “junk food” like sugary drinks and highly refined breads. Keep your red meat consumption to 4oz. per day and eat lots of colorful fruits and vegetables.");
  }
  if (age >= 40 && age < 50)
  {
    if (highrisk == "Y" || highrisk == "y"){
    console.log("Since you have a strong family history of breast cancer or you are at high risk according to your clinician, a mammogram and an MRI, with possible medication to prevent breast cancer, should be part of your annual health assessment starting now");
    console.log("Consider chemoprevention if you are at high risk. While the average woman should not take a drug to reduce the risk of breast cancer, you should consider them if you are a woman who's had a biopsy that shows an increased risk for development of cancer.");
    console.log("-- Note that your average risk for break cancer as mentioned in the top - is doubled with your history/risk");
    }
    else {
      console.log("It is recommended that you schedule an annual mammogram along with your daily self-exam of your breasts and clinical exam.");
      console.log("The decision to start screening for breast cancer with mammography should be your individual one. If you place a higher value on the potential harm than the potential benefit may choose to begin screening once every two years.");
    }

    if (p_status == "Y" || p_status == "y") {
      console.log("Breast-feeding your children for at least 6 months can cut your risk of low-grade, slow-growing breast cancer by 20% and up to 50% for triple-negative disease.");
    }
    console.log("Exposure to several stressful life events, like divorce or death of parents, may increase your risk of breast cancer. Experiencing more than one negative meaningful life event has been shown as a risk factor for breast cancer among young women. Hence, take care of your mental health, manage your stress and get help when you need it. ");
    console.log("Know your breasts. If you familiarize yourself with what is normal for your breasts, you may be able to catch any normalities before they become a real problem. If you detect something unusual or strange, contact your medical provider as soon as possible.");
    console.log("Keep alcohol consumption to one drink per day.");
    console.log("Exercise regularly, at least 3 to 4 hours every week.");
    console.log("Eat a healthy diet, decreasing or eliminating high-calorie, low-nutrition “junk food” like sugary drinks and highly refined breads. Keep your red meat consumption to 4oz. per day and eat lots of colorful fruits and vegetables.");
  }
  if (age >= 50 && age<60)
  {
    if (highrisk == "Y" || highrisk == "y"){
    console.log("Since you have a strong family history of breast cancer or you are at high risk according to your clinician, a mammogram and an MRI, with possible medication to prevent breast cancer, should be part of your annual health assessment starting now");
    console.log("Consider chemoprevention if you are at high risk. While the average woman should not take a drug to reduce the risk of breast cancer, you should consider them if you are a woman who's had a biopsy that shows an increased risk for development of cancer.");
    console.log("-- Note that your average risk for break cancer as mentioned in the top - is doubled with your history/risk");
    }
    else {
      console.log("It is recommended that you schedule an annual mammogram along with your daily self-exam of your breasts and clinical exam.");
      console.log("The decision to start screening for breast cancer with mammography should be your individual one. If you place a higher value on the potential harm than the potential benefit may choose to begin screening once every two years.");
    }

    if (p_status == "Y" || p_status == "y") {
      console.log("Breast-feeding your children for at least 6 months can cut your risk of low-grade, slow-growing breast cancer by 20% and up to 50% for triple-negative disease.");
    }
    console.log("Exposure to several stressful life events, like divorce or death of parents, may increase your risk of breast cancer. Experiencing more than one negative meaningful life event has been shown as a risk factor for breast cancer among young women. Hence, take care of your mental health, manage your stress and get help when you need it. ");
    console.log("Know your breasts. If you familiarize yourself with what is normal for your breasts, you may be able to catch any normalities before they become a real problem. If you detect something unusual or strange, contact your medical provider as soon as possible.");
    console.log("Keep alcohol consumption to one drink per day.");
    console.log("Exercise regularly, at least 3 to 4 hours every week.");
    console.log("Find your BMI - a rate of 25% or lower is what you should shoot for. Women who are overweight or obese increase their risk of getting breast cancer and lower their likelihood of surviving if they do get it.");
    console.log("Eat a healthy diet, decreasing or eliminating high-calorie, low-nutrition “junk food” like sugary drinks and highly refined breads. Keep your red meat consumption to 4oz. per day and eat lots of colorful fruits and vegetables.");
    console.log("Avoid or at least limit hormonal replacement therapy. “Hormone replacement therapy, also known as postmenopausal hormone therapy (PHT), increases your breast cancer risk.")
    console.log("Get enough Vitamin D. Vitamin D (1,000 IUs/day) is beneficial, convenient, and cost-effective for helping to prevent breast cancer. Ask your doctor to check your Vitamin D level and recommend the proper supplementation, if needed.");
    
  }
  if (age >= 60)
  {
    if (highrisk == "Y" || highrisk == "y"){
    console.log("Since you have a strong family history of breast cancer or you are at high risk according to your clinician, a mammogram and an MRI, with possible medication to prevent breast cancer, should be part of your annual health assessment starting now");
    console.log("Consider 3D mammograms for a clearer picture of your breast health, particularly because you have a family history of breast cancer or you're at high risk.")
    console.log("Consider chemoprevention if you are at high risk. While the average woman should not take a drug to reduce the risk of breast cancer, you should consider them if you are a woman who's had a biopsy that shows an increased risk for development of cancer.");
    console.log("-- Note that your average risk for break cancer as mentioned in the top - is doubled with your history/risk");
    }
    else {
      console.log("It is highly recommended that you schedule an annual mammogram along with your daily self-exam of your breasts and clinical exam.");
      console.log("The decision to start screening for breast cancer with mammography should be your individual one. If you place a higher value on the potential harm than the potential benefit may choose to begin screening once every two years.");
    }

    if (p_status == "Y" || p_status == "y") {
      console.log("Breast-feeding your children for at least 6 months can cut your risk of low-grade, slow-growing breast cancer by 20% and up to 50% for triple-negative disease.");
    }
    console.log("Exposure to several stressful life events before the age of twenty, like divorce or death of parents, may increase your risk of breast cancer. Experiencing more than one negative meaningful life event has been shown as a risk factor for breast cancer among young women. Hence, take care of your mental health, manage your stress and get help when you need it. ");
    console.log("Know your breasts. If you familiarize yourself with what is normal for your breasts, you may be able to catch any normalities before they become a real problem. If you detect something unusual or strange, contact your medical provider as soon as possible.");
    console.log("Keep alcohol consumption to one drink per day.");
    console.log("Exercise regularly, at least 3 to 4 hours every week.");
    console.log("Find your BMI - a rate of 25% or lower is what you should shoot for. Women who are overweight or obese increase their risk of getting breast cancer and lower their likelihood of surviving if they do get it.");
    console.log("Eat a healthy diet, decreasing or eliminating high-calorie, low-nutrition “junk food” like sugary drinks and highly refined breads. Keep your red meat consumption to 4oz. per day and eat lots of colorful fruits and vegetables.");
    console.log("Avoid or at least limit hormonal replacement therapy. “Hormone replacement therapy, also known as postmenopausal hormone therapy (PHT), increases your breast cancer risk.");
    console.log("Get enough Vitamin D. Vitamin D (1,000 IUs/day) is beneficial, convenient, and cost-effective for helping to prevent breast cancer. Ask your doctor to check your Vitamin D level and recommend the proper supplementation, if needed.");
  }
  console.log("Follow these recommendations and you will be a step ahead in better taking care of your physical and mental health while also reducing your chances of being diagnosed with breast cancer.");
  return;
}

function getProbforeth(ethnicity) {
  let answer = [];
  if (ethnicity.toLowerCase().includes("White".toLowerCase())) {
    answer.push("Breast Cancer Incidence is 0.13%");
    answer.push("Breast Cancer Mortality upon incidence is 0.02%");
  } else if (ethnicity.toLowerCase().includes("Black".toLowerCase())) {
    answer.push("Breast Cancer Incidence is 0.126%");
    answer.push("Breast Cancer Mortality upon incidence is 0.028%");
  } else if (ethnicity.toLowerCase().includes("Hispanic".toLowerCase())) {
    answer.push("Breast Cancer Incidence is 0.093% (1 in )");
    answer.push("Breast Cancer Mortality upon incidence is 0.014%");
  } else if (ethnicity.toLowerCase().includes("Asian Pacific Islander".toLowerCase())) {
    answer.push("Breast Cancer Incidence is 0.093% (1 in )");
    answer.push("Breast Cancer Mortality upon incidence is 0.011%");
  } else if (ethnicity.toLowerCase().includes("American Indian Alaska Native".toLowerCase())) {
    answer.push("Breast Cancer Incidence is 0.094% (1 in )");
    answer.push("Breast Cancer Mortality upon incidence is 0.014%");
  }
  return answer;
}

function getDiagnosedSummary(ethnicity) {
  let answer = [];
  let stage = [];
  let tumorSize = [];
  let grade = [];
  let erStatus = [];
  let subtype = [];
  if (ethnicity.toLowerCase().includes("White".toLowerCase())) {
    stage = [68, 24, 5, 3];
    tumorSize = [58, 30, 7, 6];
    grade = [23, 43, 26, 8];
    erStatus = [82, 14, 4];
    subtype = [71, 9, 4, 9, 7];
  } else if (ethnicity.toLowerCase().includes("Black".toLowerCase())) {
    stage = [57, 31, 8, 3];
    tumorSize = [46, 34, 12, 7];
    grade = [13, 36, 41, 9];
    erStatus = [69, 27, 5];
    subtype = [57, 10, 5, 19, 8];
  } else if (ethnicity.toLowerCase().includes("Hispanic".toLowerCase())) {
    stage = [60, 31, 6, 4];
    tumorSize= [48, 34, 10, 9];
    grade= [17, 40, 34, 10];
    erStatus = [76, 18, 6];
    subtype = [63, 11, 5, 11];
  } else if (ethnicity.toLowerCase().includes("Asian Pacific Islander".toLowerCase())) {
    stage = [65, 27, 5, 2];
    tumorSize=[51, 34, 9, 5];
    grade = [18, 43, 31, 7];
    erStatus = [80, 16, 4];
    subtype = [66, 12, 6, 9, 7];
  } else if (ethnicity.toLowerCase().includes("American Indian Alaska Native".toLowerCase())) {
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
  if ("White/Black/Hispanic/Asian Pacific Islander/American Indian Alaska Native".toLowerCase().includes(ethnicity.toLowerCase())) {
    return true;
  } return false;
}

function checkDiagnosed(diagnosed) {
  if ("Y/N".toLowerCase().includes(diagnosed.toLowerCase())) {
    return true;
  } return false;
}

function checkp_status(p_status) {
  if ("Y/N".toLowerCase().includes(p_status.toLowerCase())) {
    return true;
  } return false;
}

function checkhighrisk(highrisk) {
  if ("Y/N".toLowerCase().includes(highrisk.toLowerCase())) {
    return true;
  } return false;
}

function printDiagnosedSummary(answer) {
  console.log('*** Following is the summary of characteristics of invasive female breast cancer by your ethnicity: ');
  console.log('SEER Summary stage - Local: '+answer[0][0]
              +', Regional: '+answer[0][1]+', Distant: '+answer[0][2]
              +', Unknown: '+answer[0][3]);
  console.log('Tumor size (cm) - <2.0: '+answer[1][0]
              +', 2.0-4.9: ', answer[1][1]
              +', >=5: ', answer[1][2]+', Unknown: '+answer[1][3]);
  console.log('Grade - Low: '+answer[2][0]
              +', Intermediate: '+answer[2][1]
              +', High: '+answer[2][2] +', Unknown: '+answer[2][3]);
  console.log('ER status - Positive: '+answer[3][0]
              +', Negative: '+answer[3][1]+', Unknown: '+answer[3][2]);
  console.log('Subtype - HR+/HER2-: '+answer[4][0]
              +', HR+/HER2+: '+answer[4][1]+', HR-/HER2+: '+answer[4][2]
              +', HR-/HER2-: '+answer[4][3]+', Unknown: '+answer[4][4]);
  console.log('-----------------------------------------------------');
}

function main(age, ethnicity, diagnosed, highrisk, p_status) {
  if (diagnosed.toLowerCase().includes("N".toLowerCase())) {
    while (true) {
      console.log("Are you currently Pregnant, a new-born mom or planning to have kids in the near future (Y/N): ");
      p_status = String(readline.question());
      if (checkp_status(p_status)) break;
      else {
        console.log("Please put Y or N");
      }
    }
    while (true) {
      console.log("Do you have any family members who were/are diagnosed with breast cancer or are you at high risk for breast cancer according to your physician (Y/N): ");
      highrisk = String(readline.question());
      if (checkhighrisk(highrisk)) break;
      else {
        console.log("Please put Y or N");
      }
    }
    console.log('*** Following is the probability of developing breast cancer and mortality upon incidence according to your age: ');
    printProbability(getProbabilityAge(age));
    console.log('*** Following is the probability of developing breast cancer and mortality upon incidence according to your ethnicity: ');
    printProbability(getProbforeth(ethnicity));
    getRecommendations(age, p_status, highrisk);
  } else {  // when the patinet is diagnosed
    diagSum = getDiagnosedSummary(ethnicity);
    printDiagnosedSummary(diagSum);
  }
}

const { func } = require("prop-types");
const readline = require("readline-sync");
let age = 0;
let ethnicity = "";
let diagnosed = "";
let p_status = "";
let highrisk = "";

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

main(age, ethnicity, diagnosed, p_status, highrisk); // call main function
