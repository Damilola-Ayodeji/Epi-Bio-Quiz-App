const offlineQuestions = [
  {
    "id": "Q1",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Case-control study",
      "Randomized controlled trial",
      "Cohort study",
      "Cross-sectional study"
    ],
    "answer_index": 0,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q2",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Case-control study",
      "Cross-sectional study",
      "Cohort study",
      "Randomized controlled trial"
    ],
    "answer_index": 0,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q3",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "5 per 1000",
      "500 per 1000",
      "50 per 1000",
      "0.5 per 1000"
    ],
    "answer_index": 0,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q4",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "If a test has sensitivity 90% and specificity 95%, and disease is rare, the positive predictive value will be:",
    "options": [
      "High",
      "Exactly 90%",
      "Exactly 95%",
      "Low"
    ],
    "answer_index": 3,
    "explanation": "When disease is rare, PPV tends to be low even with high sensitivity/specificity because false positives can outnumber true positives."
  },
  {
    "id": "Q5",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "50 per 100 PY",
      "5 per 100 PY",
      "2 per 100 PY",
      "0.5 per 100 PY"
    ],
    "answer_index": 1,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q6",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 28, cases unexposed = 102, controls exposed = 29, controls unexposed = 96. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "0.91",
      "1.36",
      "2.14",
      "0.64"
    ],
    "answer_index": 0,
    "explanation": "OR = (a*d)/(b*c) = (28*96)/(102*29) = 0.91."
  },
  {
    "id": "Q7",
    "concept": "Bias & confounding",
    "difficulty": "Hard",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Observer bias",
      "Selection bias",
      "Information bias",
      "Recall bias"
    ],
    "answer_index": 1,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q8",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "If a test has sensitivity 90% and specificity 95%, and disease is rare, the positive predictive value will be:",
    "options": [
      "Exactly 95%",
      "High",
      "Exactly 90%",
      "Low"
    ],
    "answer_index": 3,
    "explanation": "When disease is rare, PPV tends to be low even with high sensitivity/specificity because false positives can outnumber true positives."
  },
  {
    "id": "Q9",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "2 per 100 PY",
      "0.5 per 100 PY",
      "50 per 100 PY",
      "5 per 100 PY"
    ],
    "answer_index": 3,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q10",
    "concept": "Measures of association",
    "difficulty": "Medium",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a+b)/(c+d)",
      "(a/c) / (b/d)",
      "(a/(a+b)) / (c/(c+d))",
      "(a+d)/(b+c)"
    ],
    "answer_index": 2,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q11",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "2 per 100 PY",
      "50 per 100 PY",
      "0.5 per 100 PY",
      "5 per 100 PY"
    ],
    "answer_index": 3,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q12",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "0.5 per 1000",
      "50 per 1000",
      "5 per 1000",
      "500 per 1000"
    ],
    "answer_index": 2,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q13",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Rule out disease when negative (SNOUT)",
      "Measure incidence",
      "Rule in disease when positive (SPIN)",
      "Estimate prevalence"
    ],
    "answer_index": 0,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q14",
    "concept": "Measures of association",
    "difficulty": "Hard",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a/c) / (b/d)",
      "(a+b)/(c+d)",
      "(a/(a+b)) / (c/(c+d))",
      "(a+d)/(b+c)"
    ],
    "answer_index": 2,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q15",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 172, cases unexposed = 132, controls exposed = 106, controls unexposed = 169. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "1.46",
      "3.12",
      "2.08",
      "3.31"
    ],
    "answer_index": 2,
    "explanation": "OR = (a*d)/(b*c) = (172*169)/(132*106) = 2.08."
  },
  {
    "id": "Q16",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "5 per 100 PY",
      "2 per 100 PY",
      "0.5 per 100 PY",
      "50 per 100 PY"
    ],
    "answer_index": 0,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q17",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "5 per 1000",
      "50 per 1000",
      "0.5 per 1000",
      "500 per 1000"
    ],
    "answer_index": 0,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q18",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "5 per 1000",
      "0.5 per 1000",
      "50 per 1000",
      "500 per 1000"
    ],
    "answer_index": 0,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q19",
    "concept": "Bias & confounding",
    "difficulty": "Hard",
    "question": "Which is a confounder when studying alcohol and heart disease?",
    "options": [
      "Randomization",
      "Blinding",
      "Outcome misclassification",
      "Age"
    ],
    "answer_index": 3,
    "explanation": "Age is associated with both alcohol use and heart disease risk and is not on the causal pathway, so it's a confounder."
  },
  {
    "id": "Q20",
    "concept": "Study designs",
    "difficulty": "Medium",
    "question": "Which study design follows a group of exposed and unexposed individuals forward in time to measure incidence?",
    "options": [
      "Ecologic study",
      "Case-control study",
      "Cross-sectional study",
      "Cohort study"
    ],
    "answer_index": 3,
    "explanation": "Cohort studies follow participants over time to compare incidence between exposed and unexposed groups."
  },
  {
    "id": "Q21",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "50 per 100 PY",
      "2 per 100 PY",
      "0.5 per 100 PY",
      "5 per 100 PY"
    ],
    "answer_index": 3,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q22",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "5 per 1000",
      "0.5 per 1000",
      "500 per 1000",
      "50 per 1000"
    ],
    "answer_index": 0,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q23",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 143, cases unexposed = 140, controls exposed = 5, controls unexposed = 158. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "33.51",
      "32.28",
      "48.42",
      "22.6"
    ],
    "answer_index": 1,
    "explanation": "OR = (a*d)/(b*c) = (143*158)/(140*5) = 32.28."
  },
  {
    "id": "Q24",
    "concept": "Measures of association",
    "difficulty": "Hard",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a+b)/(c+d)",
      "(a+d)/(b+c)",
      "(a/(a+b)) / (c/(c+d))",
      "(a/c) / (b/d)"
    ],
    "answer_index": 2,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q25",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Case-control study",
      "Cross-sectional study",
      "Cohort study",
      "Randomized controlled trial"
    ],
    "answer_index": 0,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q26",
    "concept": "Bias & confounding",
    "difficulty": "Easy",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Information bias",
      "Selection bias",
      "Recall bias",
      "Observer bias"
    ],
    "answer_index": 1,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q27",
    "concept": "Screening & diagnostics",
    "difficulty": "Medium",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Rule in disease when positive (SPIN)",
      "Measure incidence",
      "Rule out disease when negative (SNOUT)",
      "Estimate prevalence"
    ],
    "answer_index": 2,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q28",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "If a test has sensitivity 90% and specificity 95%, and disease is rare, the positive predictive value will be:",
    "options": [
      "Low",
      "Exactly 90%",
      "Exactly 95%",
      "High"
    ],
    "answer_index": 0,
    "explanation": "When disease is rare, PPV tends to be low even with high sensitivity/specificity because false positives can outnumber true positives."
  },
  {
    "id": "Q29",
    "concept": "Measures of association",
    "difficulty": "Hard",
    "question": "In a case-control study, cases exposed = 155, cases unexposed = 146, controls exposed = 63, controls unexposed = 155. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "3.84",
      "1.83",
      "2.61",
      "3.92"
    ],
    "answer_index": 2,
    "explanation": "OR = (a*d)/(b*c) = (155*155)/(146*63) = 2.61."
  },
  {
    "id": "Q30",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Cross-sectional study",
      "Case-control study",
      "Randomized controlled trial",
      "Cohort study"
    ],
    "answer_index": 1,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q31",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Rule in disease when positive (SPIN)",
      "Rule out disease when negative (SNOUT)",
      "Measure incidence",
      "Estimate prevalence"
    ],
    "answer_index": 1,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q32",
    "concept": "Screening & diagnostics",
    "difficulty": "Medium",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Estimate prevalence",
      "Rule out disease when negative (SNOUT)",
      "Rule in disease when positive (SPIN)",
      "Measure incidence"
    ],
    "answer_index": 1,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q33",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "500 per 1000",
      "5 per 1000",
      "50 per 1000",
      "0.5 per 1000"
    ],
    "answer_index": 1,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q34",
    "concept": "Bias & confounding",
    "difficulty": "Hard",
    "question": "Which is a confounder when studying alcohol and heart disease?",
    "options": [
      "Randomization",
      "Blinding",
      "Age",
      "Outcome misclassification"
    ],
    "answer_index": 2,
    "explanation": "Age is associated with both alcohol use and heart disease risk and is not on the causal pathway, so it's a confounder."
  },
  {
    "id": "Q35",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Cohort study",
      "Case-control study",
      "Cross-sectional study",
      "Randomized controlled trial"
    ],
    "answer_index": 1,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q36",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "0.5 per 1000",
      "500 per 1000",
      "50 per 1000",
      "5 per 1000"
    ],
    "answer_index": 3,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q37",
    "concept": "Bias & confounding",
    "difficulty": "Easy",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Recall bias",
      "Information bias",
      "Selection bias",
      "Observer bias"
    ],
    "answer_index": 2,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q38",
    "concept": "Bias & confounding",
    "difficulty": "Easy",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Selection bias",
      "Recall bias",
      "Observer bias",
      "Information bias"
    ],
    "answer_index": 0,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q39",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "0.5 per 1000",
      "50 per 1000",
      "5 per 1000",
      "500 per 1000"
    ],
    "answer_index": 2,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q40",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Observer bias",
      "Information bias",
      "Recall bias",
      "Selection bias"
    ],
    "answer_index": 3,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q41",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a/(a+b)) / (c/(c+d))",
      "(a+b)/(c+d)",
      "(a/c) / (b/d)",
      "(a+d)/(b+c)"
    ],
    "answer_index": 0,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q42",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "50 per 100 PY",
      "0.5 per 100 PY",
      "5 per 100 PY",
      "2 per 100 PY"
    ],
    "answer_index": 2,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q43",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 17, cases unexposed = 154, controls exposed = 127, controls unexposed = 133. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "1.35",
      "0.08",
      "0.12",
      "0.18"
    ],
    "answer_index": 2,
    "explanation": "OR = (a*d)/(b*c) = (17*133)/(154*127) = 0.12."
  },
  {
    "id": "Q44",
    "concept": "Study designs",
    "difficulty": "Hard",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Cross-sectional study",
      "Cohort study",
      "Randomized controlled trial",
      "Case-control study"
    ],
    "answer_index": 3,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q45",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "500 per 1000",
      "50 per 1000",
      "5 per 1000",
      "0.5 per 1000"
    ],
    "answer_index": 2,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q46",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "5 per 100 PY",
      "0.5 per 100 PY",
      "50 per 100 PY",
      "2 per 100 PY"
    ],
    "answer_index": 0,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q47",
    "concept": "Measures of association",
    "difficulty": "Medium",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a/c) / (b/d)",
      "(a+b)/(c+d)",
      "(a/(a+b)) / (c/(c+d))",
      "(a+d)/(b+c)"
    ],
    "answer_index": 2,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q48",
    "concept": "Screening & diagnostics",
    "difficulty": "Hard",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Rule out disease when negative (SNOUT)",
      "Measure incidence",
      "Estimate prevalence",
      "Rule in disease when positive (SPIN)"
    ],
    "answer_index": 0,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q49",
    "concept": "Measures of association",
    "difficulty": "Hard",
    "question": "In a case-control study, cases exposed = 94, cases unexposed = 22, controls exposed = 67, controls unexposed = 99. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "7.54",
      "9.46",
      "6.31",
      "4.42"
    ],
    "answer_index": 2,
    "explanation": "OR = (a*d)/(b*c) = (94*99)/(22*67) = 6.31."
  },
  {
    "id": "Q50",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 175, cases unexposed = 146, controls exposed = 81, controls unexposed = 174. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "1.8",
      "3.85",
      "3.8",
      "2.57"
    ],
    "answer_index": 3,
    "explanation": "OR = (a*d)/(b*c) = (175*174)/(146*81) = 2.57."
  },
  {
    "id": "Q51",
    "concept": "Study designs",
    "difficulty": "Hard",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Randomized controlled trial",
      "Cohort study",
      "Case-control study",
      "Cross-sectional study"
    ],
    "answer_index": 2,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q52",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 180, cases unexposed = 167, controls exposed = 72, controls unexposed = 134. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "1.41",
      "2.01",
      "3.01",
      "3.24"
    ],
    "answer_index": 1,
    "explanation": "OR = (a*d)/(b*c) = (180*134)/(167*72) = 2.01."
  },
  {
    "id": "Q53",
    "concept": "Bias & confounding",
    "difficulty": "Easy",
    "question": "Which is a confounder when studying alcohol and heart disease?",
    "options": [
      "Age",
      "Randomization",
      "Outcome misclassification",
      "Blinding"
    ],
    "answer_index": 0,
    "explanation": "Age is associated with both alcohol use and heart disease risk and is not on the causal pathway, so it's a confounder."
  },
  {
    "id": "Q54",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 194, cases unexposed = 118, controls exposed = 146, controls unexposed = 185. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "3.12",
      "2.08",
      "1.46",
      "3.31"
    ],
    "answer_index": 1,
    "explanation": "OR = (a*d)/(b*c) = (194*185)/(118*146) = 2.08."
  },
  {
    "id": "Q55",
    "concept": "Study designs",
    "difficulty": "Medium",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Cross-sectional study",
      "Randomized controlled trial",
      "Case-control study",
      "Cohort study"
    ],
    "answer_index": 2,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q56",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "500 per 1000",
      "0.5 per 1000",
      "5 per 1000",
      "50 per 1000"
    ],
    "answer_index": 2,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q57",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "500 per 1000",
      "50 per 1000",
      "5 per 1000",
      "0.5 per 1000"
    ],
    "answer_index": 2,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q58",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "50 per 1000",
      "500 per 1000",
      "0.5 per 1000",
      "5 per 1000"
    ],
    "answer_index": 3,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q59",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "2 per 100 PY",
      "5 per 100 PY",
      "0.5 per 100 PY",
      "50 per 100 PY"
    ],
    "answer_index": 1,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q60",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "50 per 1000",
      "5 per 1000",
      "0.5 per 1000",
      "500 per 1000"
    ],
    "answer_index": 1,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q61",
    "concept": "Measures of disease frequency",
    "difficulty": "Easy",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "50 per 100 PY",
      "5 per 100 PY",
      "2 per 100 PY",
      "0.5 per 100 PY"
    ],
    "answer_index": 1,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q62",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Cohort study",
      "Cross-sectional study",
      "Case-control study",
      "Randomized controlled trial"
    ],
    "answer_index": 2,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q63",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a/(a+b)) / (c/(c+d))",
      "(a/c) / (b/d)",
      "(a+d)/(b+c)",
      "(a+b)/(c+d)"
    ],
    "answer_index": 0,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q64",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design follows a group of exposed and unexposed individuals forward in time to measure incidence?",
    "options": [
      "Cross-sectional study",
      "Ecologic study",
      "Cohort study",
      "Case-control study"
    ],
    "answer_index": 2,
    "explanation": "Cohort studies follow participants over time to compare incidence between exposed and unexposed groups."
  },
  {
    "id": "Q65",
    "concept": "Study designs",
    "difficulty": "Medium",
    "question": "Which study design follows a group of exposed and unexposed individuals forward in time to measure incidence?",
    "options": [
      "Cross-sectional study",
      "Case-control study",
      "Ecologic study",
      "Cohort study"
    ],
    "answer_index": 3,
    "explanation": "Cohort studies follow participants over time to compare incidence between exposed and unexposed groups."
  },
  {
    "id": "Q66",
    "concept": "Screening & diagnostics",
    "difficulty": "Medium",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Rule out disease when negative (SNOUT)",
      "Rule in disease when positive (SPIN)",
      "Estimate prevalence",
      "Measure incidence"
    ],
    "answer_index": 0,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q67",
    "concept": "Study designs",
    "difficulty": "Medium",
    "question": "Which study design follows a group of exposed and unexposed individuals forward in time to measure incidence?",
    "options": [
      "Case-control study",
      "Ecologic study",
      "Cohort study",
      "Cross-sectional study"
    ],
    "answer_index": 2,
    "explanation": "Cohort studies follow participants over time to compare incidence between exposed and unexposed groups."
  },
  {
    "id": "Q68",
    "concept": "Bias & confounding",
    "difficulty": "Hard",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Information bias",
      "Selection bias",
      "Recall bias",
      "Observer bias"
    ],
    "answer_index": 1,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q69",
    "concept": "Study designs",
    "difficulty": "Medium",
    "question": "Which study design follows a group of exposed and unexposed individuals forward in time to measure incidence?",
    "options": [
      "Cross-sectional study",
      "Case-control study",
      "Ecologic study",
      "Cohort study"
    ],
    "answer_index": 3,
    "explanation": "Cohort studies follow participants over time to compare incidence between exposed and unexposed groups."
  },
  {
    "id": "Q70",
    "concept": "Bias & confounding",
    "difficulty": "Hard",
    "question": "Which is a confounder when studying alcohol and heart disease?",
    "options": [
      "Age",
      "Outcome misclassification",
      "Blinding",
      "Randomization"
    ],
    "answer_index": 0,
    "explanation": "Age is associated with both alcohol use and heart disease risk and is not on the causal pathway, so it's a confounder."
  },
  {
    "id": "Q71",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Recall bias",
      "Information bias",
      "Selection bias",
      "Observer bias"
    ],
    "answer_index": 2,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q72",
    "concept": "Measures of association",
    "difficulty": "Medium",
    "question": "In a case-control study, cases exposed = 115, cases unexposed = 153, controls exposed = 160, controls unexposed = 172. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "0.81",
      "2.04",
      "1.22",
      "0.57"
    ],
    "answer_index": 0,
    "explanation": "OR = (a*d)/(b*c) = (115*172)/(153*160) = 0.81."
  },
  {
    "id": "Q73",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "50 per 100 PY",
      "5 per 100 PY",
      "0.5 per 100 PY",
      "2 per 100 PY"
    ],
    "answer_index": 1,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q74",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "If a test has sensitivity 90% and specificity 95%, and disease is rare, the positive predictive value will be:",
    "options": [
      "Exactly 90%",
      "Low",
      "Exactly 95%",
      "High"
    ],
    "answer_index": 1,
    "explanation": "When disease is rare, PPV tends to be low even with high sensitivity/specificity because false positives can outnumber true positives."
  },
  {
    "id": "Q75",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "5 per 1000",
      "50 per 1000",
      "500 per 1000",
      "0.5 per 1000"
    ],
    "answer_index": 0,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q76",
    "concept": "Screening & diagnostics",
    "difficulty": "Hard",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Estimate prevalence",
      "Rule in disease when positive (SPIN)",
      "Rule out disease when negative (SNOUT)",
      "Measure incidence"
    ],
    "answer_index": 2,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q77",
    "concept": "Bias & confounding",
    "difficulty": "Hard",
    "question": "Which is a confounder when studying alcohol and heart disease?",
    "options": [
      "Randomization",
      "Age",
      "Blinding",
      "Outcome misclassification"
    ],
    "answer_index": 1,
    "explanation": "Age is associated with both alcohol use and heart disease risk and is not on the causal pathway, so it's a confounder."
  },
  {
    "id": "Q78",
    "concept": "Study designs",
    "difficulty": "Hard",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Case-control study",
      "Cross-sectional study",
      "Cohort study",
      "Randomized controlled trial"
    ],
    "answer_index": 0,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q79",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "If a test has sensitivity 90% and specificity 95%, and disease is rare, the positive predictive value will be:",
    "options": [
      "Low",
      "Exactly 95%",
      "Exactly 90%",
      "High"
    ],
    "answer_index": 0,
    "explanation": "When disease is rare, PPV tends to be low even with high sensitivity/specificity because false positives can outnumber true positives."
  },
  {
    "id": "Q80",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Information bias",
      "Selection bias",
      "Observer bias",
      "Recall bias"
    ],
    "answer_index": 1,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q81",
    "concept": "Screening & diagnostics",
    "difficulty": "Medium",
    "question": "If a test has sensitivity 90% and specificity 95%, and disease is rare, the positive predictive value will be:",
    "options": [
      "Exactly 90%",
      "Low",
      "High",
      "Exactly 95%"
    ],
    "answer_index": 1,
    "explanation": "When disease is rare, PPV tends to be low even with high sensitivity/specificity because false positives can outnumber true positives."
  },
  {
    "id": "Q82",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 168, cases unexposed = 75, controls exposed = 138, controls unexposed = 129. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "2.09",
      "1.46",
      "3.32",
      "3.13"
    ],
    "answer_index": 0,
    "explanation": "OR = (a*d)/(b*c) = (168*129)/(75*138) = 2.09."
  },
  {
    "id": "Q83",
    "concept": "Measures of association",
    "difficulty": "Easy",
    "question": "In a case-control study, cases exposed = 74, cases unexposed = 90, controls exposed = 86, controls unexposed = 143. What is the odds ratio (rounded to 2 d.p.)?",
    "options": [
      "2.06",
      "0.96",
      "2.6",
      "1.37"
    ],
    "answer_index": 3,
    "explanation": "OR = (a*d)/(b*c) = (74*143)/(90*86) = 1.37."
  },
  {
    "id": "Q84",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Observer bias",
      "Recall bias",
      "Information bias",
      "Selection bias"
    ],
    "answer_index": 3,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q85",
    "concept": "Measures of association",
    "difficulty": "Medium",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a/c) / (b/d)",
      "(a+d)/(b+c)",
      "(a/(a+b)) / (c/(c+d))",
      "(a+b)/(c+d)"
    ],
    "answer_index": 2,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q86",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Observer bias",
      "Information bias",
      "Selection bias",
      "Recall bias"
    ],
    "answer_index": 2,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q87",
    "concept": "Measures of association",
    "difficulty": "Medium",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a/c) / (b/d)",
      "(a/(a+b)) / (c/(c+d))",
      "(a+d)/(b+c)",
      "(a+b)/(c+d)"
    ],
    "answer_index": 1,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q88",
    "concept": "Measures of disease frequency",
    "difficulty": "Medium",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "0.5 per 100 PY",
      "5 per 100 PY",
      "2 per 100 PY",
      "50 per 100 PY"
    ],
    "answer_index": 1,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q89",
    "concept": "Measures of association",
    "difficulty": "Hard",
    "question": "Risk ratio compares the risk in exposed to unexposed using incidence; which formula gives RR?",
    "options": [
      "(a+d)/(b+c)",
      "(a/(a+b)) / (c/(c+d))",
      "(a+b)/(c+d)",
      "(a/c) / (b/d)"
    ],
    "answer_index": 1,
    "explanation": "RR = [a/(a+b)] / [c/(c+d)] where a,c are cases in exposed/unexposed respectively."
  },
  {
    "id": "Q90",
    "concept": "Screening & diagnostics",
    "difficulty": "Easy",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Rule out disease when negative (SNOUT)",
      "Rule in disease when positive (SPIN)",
      "Estimate prevalence",
      "Measure incidence"
    ],
    "answer_index": 0,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q91",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Loss to follow-up in a cohort study can introduce which type of bias?",
    "options": [
      "Selection bias",
      "Observer bias",
      "Information bias",
      "Recall bias"
    ],
    "answer_index": 0,
    "explanation": "Loss to follow-up can create selection bias if those lost differ systematically from those retained."
  },
  {
    "id": "Q92",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Which is a confounder when studying alcohol and heart disease?",
    "options": [
      "Blinding",
      "Age",
      "Outcome misclassification",
      "Randomization"
    ],
    "answer_index": 1,
    "explanation": "Age is associated with both alcohol use and heart disease risk and is not on the causal pathway, so it's a confounder."
  },
  {
    "id": "Q93",
    "concept": "Bias & confounding",
    "difficulty": "Medium",
    "question": "Which is a confounder when studying alcohol and heart disease?",
    "options": [
      "Age",
      "Blinding",
      "Randomization",
      "Outcome misclassification"
    ],
    "answer_index": 0,
    "explanation": "Age is associated with both alcohol use and heart disease risk and is not on the causal pathway, so it's a confounder."
  },
  {
    "id": "Q94",
    "concept": "Study designs",
    "difficulty": "Hard",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Case-control study",
      "Randomized controlled trial",
      "Cohort study",
      "Cross-sectional study"
    ],
    "answer_index": 0,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q95",
    "concept": "Study designs",
    "difficulty": "Hard",
    "question": "Which study design is most efficient for investigating rare diseases by comparing exposures between diseased and non-diseased individuals?",
    "options": [
      "Randomized controlled trial",
      "Cross-sectional study",
      "Cohort study",
      "Case-control study"
    ],
    "answer_index": 3,
    "explanation": "Case-control studies are efficient for rare diseases since they start with cases and controls and look back at exposures."
  },
  {
    "id": "Q96",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "If 50 new cases occur in a population of 10,000 over one year, what is the annual cumulative incidence per 1000?",
    "options": [
      "50 per 1000",
      "0.5 per 1000",
      "500 per 1000",
      "5 per 1000"
    ],
    "answer_index": 3,
    "explanation": "Cumulative incidence = (new cases / population) x 1000 = (50/10000)*1000 = 5 per 1000."
  },
  {
    "id": "Q97",
    "concept": "Measures of disease frequency",
    "difficulty": "Hard",
    "question": "A study reports 20 events in 400 person-years. What is the incidence rate per 100 person-years?",
    "options": [
      "50 per 100 PY",
      "5 per 100 PY",
      "2 per 100 PY",
      "0.5 per 100 PY"
    ],
    "answer_index": 1,
    "explanation": "Incidence rate = events / person-years = 20/400 = 0.05 per PY = 5 per 100 PY."
  },
  {
    "id": "Q98",
    "concept": "Screening & diagnostics",
    "difficulty": "Hard",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Estimate prevalence",
      "Rule in disease when positive (SPIN)",
      "Measure incidence",
      "Rule out disease when negative (SNOUT)"
    ],
    "answer_index": 3,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  },
  {
    "id": "Q99",
    "concept": "Study designs",
    "difficulty": "Easy",
    "question": "Which study design follows a group of exposed and unexposed individuals forward in time to measure incidence?",
    "options": [
      "Cohort study",
      "Cross-sectional study",
      "Case-control study",
      "Ecologic study"
    ],
    "answer_index": 0,
    "explanation": "Cohort studies follow participants over time to compare incidence between exposed and unexposed groups."
  },
  {
    "id": "Q100",
    "concept": "Screening & diagnostics",
    "difficulty": "Hard",
    "question": "A test with high sensitivity is most useful to:",
    "options": [
      "Measure incidence",
      "Rule out disease when negative (SNOUT)",
      "Estimate prevalence",
      "Rule in disease when positive (SPIN)"
    ],
    "answer_index": 1,
    "explanation": "High sensitivity helps rule out disease when the test is negative (SNOUT)."
  }
];
