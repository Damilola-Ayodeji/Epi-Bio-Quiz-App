// --- DATABASE ---
const questions = [
    // Epidemiology (20)
    { topic: 'epi', question: "Which measure describes the proportion of a population that has a disease at a single point in time?", options: ["Incidence", "Prevalence", "Attack rate", "Mortality rate"], answer: 1, explanation: "Prevalence measures the proportion of individuals in a population who have a disease or health condition at a specific point in time." },
    { topic: 'epi', question: "A study that follows a group of people over time to see who develops a disease is called a:", options: ["Case-control study", "Cross-sectional study", "Cohort study", "Clinical trial"], answer: 2, explanation: "A cohort study is an observational study that follows a group of individuals over a period of time to determine the incidence of a disease or outcome." },
    { topic: 'epi', question: "The ability of a test to correctly identify those who have the disease is its:", options: ["Sensitivity", "Specificity", "Positive predictive value", "Negative predictive value"], answer: 0, explanation: "Sensitivity (also called the true positive rate) measures the proportion of actual positives that are correctly identified as such." },
    { topic: 'epi', question: "In an outbreak investigation, what is the primary purpose of creating a case definition?", options: ["To diagnose patients definitively", "To ensure all cases are counted, regardless of certainty", "To standardize the criteria for identifying cases", "To determine the etiologic agent"], answer: 2, explanation: "A case definition provides a standard set of criteria for determining whether an individual should be classified as having the health condition of interest." },
    { topic: 'epi', question: "Which type of bias occurs when study participants are not representative of the general population?", options: ["Recall bias", "Selection bias", "Observer bias", "Confounding"], answer: 1, explanation: "Selection bias occurs when the method of selecting participants for a study results in a a sample that is not representative of the target population." },
    { topic: 'epi', question: "An epidemic that spreads across multiple countries or continents is known as a:", options: ["Outbreak", "Cluster", "Endemic", "Pandemic"], answer: 3, explanation: "A pandemic is an epidemic of infectious disease that has spread across a large region, for instance multiple continents or worldwide." },
    { topic: 'epi', question: "The number of new cases of a disease in a population over a specific period is known as:", options: ["Prevalence", "Incidence", "Morbidity", "Mortality"], answer: 1, explanation: "Incidence measures the rate of new cases of a disease in a population over a defined period." },
    { topic: 'epi', question: "In a case-control study, the odds ratio (OR) is a measure of:", options: ["Risk", "Association", "Incidence", "Prevalence"], answer: 1, explanation: "The odds ratio is a measure of association between an exposure and an outcome." },
    { topic: 'epi', question: "Which study design is best for determining the prevalence of a disease?", options: ["Cohort study", "Case-control study", "Randomized controlled trial", "Cross-sectional study"], answer: 3, explanation: "Cross-sectional studies measure both exposure and outcome at a single point in time, making them ideal for determining prevalence." },
    { topic: 'epi', question: "The 'epidemiological triad' of disease causation consists of:", options: ["Agent, Host, Environment", "Person, Place, Time", "Vector, Fomite, Reservoir", "Bacteria, Virus, Fungus"], answer: 0, explanation: "The epidemiological triad is a traditional model for infectious disease causation, consisting of an external agent, a susceptible host, and an environment that brings the host and agent together." },
    { topic: 'epi', question: "What is the term for the constant presence of a disease within a geographic area?", options: ["Epidemic", "Pandemic", "Endemic", "Outbreak"], answer: 2, explanation: "Endemic refers to the constant presence and/or usual prevalence of a disease or infectious agent in a population within a geographic area." },
    { topic: 'epi', question: "A screening test with high specificity will have a low rate of:", options: ["True positives", "False positives", "True negatives", "False negatives"], answer: 1, explanation: "Specificity measures the ability of a test to correctly identify those without the disease. High specificity means a low false-positive rate." },
    { topic: 'epi', question: "What is 'herd immunity'?", options: ["Immunity from animal contact", "Protection for the unvaccinated due to high vaccination rates", "A type of natural immunity", "Immunity in rural populations"], answer: 1, explanation: "Herd immunity is the indirect protection from an infectious disease that happens when a population is immune either through vaccination or immunity developed through previous infection." },
    { topic: 'epi', question: "The measure of risk that indicates how much greater the risk is for the exposed group compared to the unexposed group is the:", options: ["Attributable risk", "Population attributable risk", "Relative risk", "Odds ratio"], answer: 2, explanation: "Relative risk (RR) compares the risk of a health event among one group with the risk among another group." },
    { topic: 'epi', question: "A 'sentinel surveillance' system is one that:", options: ["Monitors all cases of a disease", "Uses a pre-arranged sample of reporting sources to monitor trends", "Is used only during emergencies", "Relies on public reporting"], answer: 1, explanation: "Sentinel surveillance uses a selected number of reporting sites to monitor disease trends, which can be more efficient than monitoring all cases." },
    { topic: 'epi', question: "The time interval between invasion by an infectious agent and the appearance of the first sign or symptom of the disease is the:", options: ["Latent period", "Infectious period", "Incubation period", "Generation time"], answer: 2, explanation: "The incubation period is the time from exposure to an infectious agent until the onset of symptoms." },
    { topic: 'epi', question: "Which of the following is a primary goal of a randomized controlled trial (RCT)?", options: ["To describe a population", "To establish prevalence", "To minimize bias and confounding", "To generate hypotheses"], answer: 2, explanation: "Randomization in an RCT is the most effective way to minimize selection bias and balance both known and unknown confounding variables between treatment groups." },
    { topic: 'epi', question: "The 'attack rate' in an outbreak is a type of:", options: ["Prevalence rate", "Mortality rate", "Incidence rate", "Case fatality rate"], answer: 2, explanation: "The attack rate is a cumulative incidence rate used for describing the occurrence of disease in a well-defined population observed for a limited time, such as during an epidemic." },
    { topic: 'epi', question: "What does a confidence interval for a risk estimate indicate?", options: ["The probability that the result is correct", "The range of values within which the true population parameter likely lies", "The statistical significance of the result", "The strength of the association"], answer: 1, explanation: "A confidence interval provides a range of plausible values for an unknown parameter. The interval has an associated confidence level that the true parameter is in the proposed range." },
    { topic: 'epi', question: "A 'confounding variable' is one that:", options: ["Is a result of the exposure", "Is an intermediate step in the causal pathway", "Is associated with both the exposure and the outcome, and can distort the true relationship", "Is a type of measurement error"], answer: 2, explanation: "A confounder is a third variable that is associated with both the exposure and the outcome, and can make them appear more or less related than they actually are." },

    // Biostatistics (20)
    { topic: 'bio', question: "The median of the following numbers: 12, 5, 22, 15, 8, 10, 5 is:", options: ["15", "12", "10", "5"], answer: 2, explanation: "To find the median, first order the numbers: 5, 5, 8, 10, 12, 15, 22. The middle value is 10." },
    { topic: 'bio', question: "What does a p-value of less than 0.05 typically indicate?", options: ["The result is not statistically significant", "The null hypothesis is true", "There is a 95% chance the result is correct", "The result is statistically significant"], answer: 3, explanation: "A p-value less than 0.05 is a common threshold used to reject the null hypothesis, indicating that the observed result is unlikely to be due to chance alone." },
    { topic: 'bio', question: "Which of the following is a measure of central tendency?", options: ["Standard deviation", "Range", "Mean", "Interquartile range"], answer: 2, explanation: "The mean, median, and mode are the three main measures of central tendency. The others are measures of dispersion." },
    { topic: 'bio', question: "A Type I error in hypothesis testing is:", options: ["Accepting a false null hypothesis", "Rejecting a true null hypothesis", "Accepting a true alternative hypothesis", "Rejecting a false alternative hypothesis"], answer: 1, explanation: "A Type I error (or alpha error) is the incorrect rejection of a true null hypothesis (a 'false positive')." },
    { topic: 'bio', question: "In a normal distribution, what percentage of data falls within one standard deviation of the mean?", options: ["50%", "68%", "95%", "99.7%"], answer: 1, explanation: "In a normal distribution, approximately 68% of the data falls within one standard deviation of the mean, 95% within two, and 99.7% within three." },
    { topic: 'bio', question: "What is the mode of this dataset: [5, 8, 7, 5, 9, 7, 5, 6]?", options: ["7", "6", "5", "8"], answer: 2, explanation: "The mode is the value that appears most frequently in a data set. In this case, the number 5 appears three times, more than any other number." },
    { topic: 'bio', question: "A distribution that is pulled towards the right (positive) tail is said to be:", options: ["Negatively skewed", "Positively skewed", "Symmetrical", "Bimodal"], answer: 1, explanation: "In a positively skewed distribution, the tail on the right side of the distribution is longer or fatter. The mean is greater than the median." },
    { topic: 'bio', question: "Which of the following represents the strongest correlation?", options: ["r = 0.2", "r = -0.8", "r = 0.6", "r = -0.1"], answer: 1, explanation: "The correlation coefficient (r) ranges from -1 to 1. The strongest correlation is the one closest to -1 or 1. Therefore, r = -0.8 represents the strongest relationship." },
    { topic: 'bio', question: "The standard deviation is a measure of:", options: ["The average value", "The most common value", "The spread or dispersion of data", "The middle value"], answer: 2, explanation: "The standard deviation measures the amount of variation or dispersion of a set of values." },
    { topic: 'bio', question: "What is the interquartile range (IQR)?", options: ["The difference between the maximum and minimum values", "The range of the middle 50% of the data", "The average of the dataset", "The 50th percentile"], answer: 1, explanation: "The IQR is the difference between the 75th percentile (Q3) and the 25th percentile (Q1). It represents the spread of the middle half of the data." },
    { topic: 'bio', question: "A chi-square test is used to:", options: ["Compare the means of two groups", "Assess the relationship between two categorical variables", "Predict a continuous outcome", "Measure the correlation between two continuous variables"], answer: 1, explanation: "The chi-square test of independence is used to determine if there is a significant association between two categorical variables." },
    { topic: 'bio', question: "Which of these is a continuous variable?", options: ["Gender", "Blood type", "Number of children", "Blood pressure"], answer: 3, explanation: "Blood pressure is a continuous variable because it can take on any value within a given range. The others are categorical or discrete." },
    { topic: 'bio', question: "The 'power' of a statistical test is the probability of:", options: ["Correctly rejecting a false null hypothesis", "Incorrectly rejecting a true null hypothesis", "Correctly accepting a true null hypothesis", "Incorrectly accepting a false null hypothesis"], answer: 0, explanation: "Power (1 - β) is the probability of finding an effect if there is an effect to be found, i.e., correctly rejecting the null hypothesis when it is false." },
    { topic: 'bio', question: "Which graph is best for displaying the frequency distribution of a continuous variable?", options: ["Bar chart", "Pie chart", "Scatter plot", "Histogram"], answer: 3, explanation: "A histogram is used to represent the distribution of numerical data. A bar chart is used for categorical data." },
    { topic: 'bio', question: "If a result is statistically significant, it means:", options: ["The result is clinically important", "The result is unlikely to be due to chance", "The study was well-designed", "The null hypothesis is proven true"], answer: 1, explanation: "Statistical significance (usually p < 0.05) suggests that the observed effect in a sample is unlikely to have occurred by random chance alone." },
    { topic: 'bio', question: "What is the range of the following dataset: 10, 15, 9, 25, 12?", options: ["15", "16", "25", "9"], answer: 1, explanation: "The range is the difference between the highest and lowest values. Max = 25, Min = 9. Range = 25 - 9 = 16." },
    { topic: 'bio', question: "A variable that is manipulated by the researcher in an experiment is called the:", options: ["Dependent variable", "Independent variable", "Confounding variable", "Control variable"], answer: 1, explanation: "The independent variable is the variable that is changed or controlled in a scientific experiment to test its effects on the dependent variable." },
    { topic: 'bio', question: "Which of the following is NOT a measure of dispersion?", options: ["Variance", "Median", "Standard Deviation", "Range"], answer: 1, explanation: "The median is a measure of central tendency. The others are measures of how spread out the data are." },
    { topic: 'bio', question: "A t-test is used to compare:", options: ["Proportions between two groups", "The means of two groups", "The variances of two groups", "Frequencies in a contingency table"], answer: 1, explanation: "A t-test is a statistical test that is used to compare the means of two groups." },
    { topic: 'bio', question: "What does 'regression analysis' primarily aim to do?", options: ["Classify data into groups", "Model the relationship between a dependent variable and one or more independent variables", "Compare group means", "Test for association between categorical variables"], answer: 1, explanation: "Regression analysis is a set of statistical processes for estimating the relationships between a dependent variable and one or more independent variables." },

    // Environmental Health (15)
    { topic: 'env', question: "Lead poisoning in children is most commonly associated with exposure to:", options: ["Contaminated water from industrial waste", "Herbicides and pesticides in food", "Paint in older homes", "Vehicle exhaust fumes"], answer: 2, explanation: "While all are sources, deteriorating lead-based paint in homes built before 1978 is a primary source of lead exposure for children in many countries." },
    { topic: 'env', question: "The primary purpose of chlorination in water treatment is to:", options: ["Improve taste and odor", "Remove suspended solids", "Disinfect the water from pathogens", "Soften the water"], answer: 2, explanation: "Chlorine is a powerful disinfectant used to kill disease-causing bacteria, viruses, and protozoa in public water supplies." },
    { topic: 'env', question: "Minamata disease is caused by poisoning with which heavy metal?", options: ["Lead", "Arsenic", "Cadmium", "Mercury"], answer: 3, explanation: "Minamata disease is a neurological syndrome caused by severe mercury poisoning." },
    { topic: 'env', question: "Which of the following air pollutants is a major component of acid rain?", options: ["Carbon monoxide", "Ozone", "Sulfur dioxide", "Particulate matter"], answer: 2, explanation: "Sulfur dioxide (SO2) and nitrogen oxides (NOx) are the primary pollutants that react with water in the atmosphere to form acid rain." },
    { topic: 'env', question: "A 'vector' in public health is:", options: ["A contaminated object", "An organism that transmits a pathogen from a reservoir to a host", "A person who is immune to a disease", "A type of bacteria"], answer: 1, explanation: "A vector is any living agent that carries and transmits an infectious pathogen to another living organism. Mosquitoes are a common example." },
    { topic: 'env', question: "The '2-bin' system in waste management refers to segregation of:", options: ["General and Recyclable waste", "Organic and Inorganic waste", "Hazardous and Non-hazardous waste", "Wet and Dry waste"], answer: 3, explanation: "The 2-bin system typically encourages segregation of wet waste (like food scraps) and dry waste (like paper, plastic, metal)." },
    { topic: 'env', question: "Which of these is a water-borne disease?", options: ["Measles", "Tuberculosis", "Cholera", "Influenza"], answer: 2, explanation: "Cholera is an acute diarrhoeal infection caused by ingestion of food or water contaminated with the bacterium Vibrio cholerae." },
    { topic: 'env', question: "The term 'zoonosis' refers to a disease that:", options: ["Only affects animals", "Is transmitted from animals to humans", "Is only found in zoos", "Is caused by protozoa"], answer: 1, explanation: "A zoonosis is an infectious disease that has jumped from a non-human animal to humans." },
    { topic: 'env', question: "What is the main health concern associated with radon gas?", options: ["Asthma", "Lung cancer", "Carbon monoxide poisoning", "Skin irritation"], answer: 1, explanation: "Radon is a naturally occurring radioactive gas that can accumulate in homes. It is the second leading cause of lung cancer after smoking." },
    { topic: 'env', question: "Integrated Pest Management (IPM) is an approach that prioritizes:", options: ["The exclusive use of chemical pesticides", "Biological control methods and minimal pesticide use", "The complete eradication of all pests", "Using genetically modified crops"], answer: 1, explanation: "IPM is an ecosystem-based strategy that focuses on long-term prevention of pests or their damage through a combination of techniques such as biological control, habitat manipulation, and use of resistant varieties." },
    { topic: 'env', question: "The presence of which bacteria in water is a common indicator of fecal contamination?", options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Escherichia coli", "Pseudomonas aeruginosa"], answer: 2, explanation: "E. coli is a bacterium that is commonly found in the lower intestine of warm-blooded organisms. Its presence in water is a common indicator of fecal pollution." },
    { topic: 'env', question: "What is the primary health effect of ground-level ozone?", options: ["Liver damage", "Kidney failure", "Respiratory problems", "Neurological disorders"], answer: 2, explanation: "Ground-level ozone is a major component of smog and can cause coughing, throat irritation, and worsen conditions like asthma and bronchitis." },
    { topic: 'env', question: "A 'fomite' is:", options: ["An insect that transmits disease", "A contaminated water source", "An inanimate object that can carry infectious agents", "A type of airborne particle"], answer: 2, explanation: "A fomite is any inanimate object that, when contaminated with or exposed to infectious agents, can transfer disease to a new host. Examples include doorknobs, clothing, and medical equipment." },
    { topic: 'env', question: "Which international agreement aims to reduce greenhouse gas emissions?", options: ["The Geneva Convention", "The Ottawa Treaty", "The Kyoto Protocol/Paris Agreement", "The Helsinki Accords"], answer: 2, explanation: "The Kyoto Protocol and its successor, the Paris Agreement, are international treaties that commit state parties to reduce greenhouse gas emissions, based on the scientific consensus that global warming is occurring and that human-made CO2 emissions are driving it." },
    { topic: 'env', question: "The process of 'biomagnification' refers to:", options: ["The increasing concentration of a substance in organisms at successive levels in a food chain", "The growth of algae in water bodies", "The natural decomposition of organic waste", "The use of living organisms to remove pollutants"], answer: 0, explanation: "Biomagnification is the process by which a concentration of a substance, such as DDT or mercury, increases in the tissues of organisms at successively higher levels in a food chain." },

    // Health Policy & Management (15)
    { topic: 'mgt', question: "In health management, what does 'SWOT' analysis stand for?", options: ["Strategy, Weakness, Opportunity, Threat", "Strengths, Weaknesses, Opportunities, Threats", "System, Workforce, Outcome, Target", "Service, Willingness, Openness, Teamwork"], answer: 1, explanation: "SWOT analysis is a strategic planning technique used to identify an organization's Strengths, Weaknesses, Opportunities, and Threats." },
    { topic: 'mgt', question: "The 'Three Delays Model' is often used to analyze factors affecting:", options: ["Maternal mortality", "Hospital discharge rates", "Vaccine supply chain", "Chronic disease progression"], answer: 0, explanation: "The Three Delays Model (delay in seeking care, delay in reaching care, delay in receiving care) is a framework for understanding barriers to maternal healthcare." },
    { topic: 'mgt', question: "Which of the following best describes 'task shifting' in healthcare?", options: ["Moving patients between different wards", "Delegating tasks from more specialized to less specialized health workers", "Changing a health worker's shift schedule", "Automating clinical tasks with technology"], answer: 1, explanation: "Task shifting is the rational redistribution of tasks among health workforce teams. Specific tasks are moved, where appropriate, from highly qualified health workers to health workers with shorter training and fewer qualifications." },
    { topic: 'mgt', question: "The primary level of care in a health system typically includes:", options: ["Specialized hospitals", "Community health centers and general practitioners", "Tertiary referral centers", "Medical research institutes"], answer: 1, explanation: "Primary care is the first point of contact for individuals and families with the health system, providing comprehensive, accessible, community-based care." },
    { topic: 'mgt', question: "What is the main purpose of a Health Management Information System (HMIS)?", options: ["To bill patients for services", "To schedule appointments", "To collect, store, manage, and analyze health data for decision-making", "To manage pharmaceutical inventory"], answer: 2, explanation: "An HMIS is designed to manage healthcare data for decision making." },
    { topic: 'mgt', question: "What is 'out-of-pocket' health expenditure?", options: ["Government spending on health", "Insurance premiums", "Direct payments made by individuals for health services", "Donations to health charities"], answer: 2, explanation: "Out-of-pocket payments are direct payments made by individuals to healthcare providers at the time of service use." },
    { topic: 'mgt', question: "The World Health Organization (WHO) is an agency of the:", options: ["World Bank", "United Nations", "European Union", "Red Cross"], answer: 1, explanation: "The WHO is a specialized agency of the United Nations responsible for international public health." },
    { topic: 'mgt', question: "What is meant by 'Universal Health Coverage' (UHC)?", options: ["Free healthcare for everyone", "All people have access to the health services they need, when and where they need them, without financial hardship", "A single government-run health system", "Private health insurance for all citizens"], answer: 1, explanation: "UHC means that all individuals and communities receive the health services they need without suffering financial hardship." },
    { topic: 'mgt', question: "What is a 'sentinel event' in a healthcare setting?", options: ["A minor medical error", "A patient complaint", "An unexpected occurrence involving death or serious physical or psychological injury", "A successful patient outcome"], answer: 2, explanation: "A sentinel event is a patient safety event that results in death, permanent harm, or severe temporary harm." },
    { topic: 'mgt', question: "What is the primary goal of 'Continuous Quality Improvement' (CQI) in healthcare?", options: ["To reduce costs by cutting staff", "To meet minimum regulatory standards", "To identify and punish underperforming staff", "To use data for ongoing efforts to improve patient care"], answer: 3, explanation: "CQI is a management philosophy that uses data and teamwork to continuously improve processes and outcomes in healthcare." },
    { topic: 'mgt', question: "The 'Beveridge Model' of healthcare is primarily funded by:", options: ["Social security contributions", "Private insurance payments", "Direct taxes", "Out-of-pocket payments"], answer: 2, explanation: "The Beveridge Model, found in countries like the UK and Canada, is financed through general taxation. Healthcare is provided and financed by the government." },
    { topic: 'mgt', question: "A 'Health in All Policies' (HiAP) approach recognizes that:", options: ["The health sector is solely responsible for health outcomes", "Health is influenced by policies in many different sectors", "All policies should be written by health professionals", "Health policies are the most important of all government policies"], answer: 1, explanation: "HiAP is an approach to public policies across sectors that systematically takes into account the health implications of decisions, seeks synergies, and avoids harmful health impacts in order to improve population health and health equity." },
    { topic: 'mgt', question: "What does 'accreditation' of a healthcare facility signify?", options: ["It has the most advanced technology", "It is the most profitable", "It has met a set of nationally recognized standards for quality and safety", "It is owned by the government"], answer: 2, explanation: "Accreditation is a process of review that allows healthcare organizations to demonstrate their ability to meet regulatory requirements and standards established by a recognized accreditation organization." },
    { topic: 'mgt', question: "The concept of 'equity in health' means that:", options: ["Everyone receives the same healthcare", "Everyone has a fair and just opportunity to be as healthy as possible", "The government provides all healthcare", "Healthcare is free for all"], answer: 1, explanation: "Equity involves trying to understand and give people what they need to enjoy full, healthy lives. This is different from equality, which aims to ensure that everyone gets the same things." },
    { topic: 'mgt', question: "In program management, a 'Gantt chart' is used for:", options: ["Budgeting", "Stakeholder analysis", "Project scheduling and tracking progress", "Risk assessment"], answer: 2, explanation: "A Gantt chart is a type of bar chart that illustrates a project schedule, showing the start and finish dates of terminal elements and summary elements of a project." },

    // Reproductive & Family Health (15)
    { topic: 'fam', question: "Which of the following is considered a 'long-acting reversible contraceptive' (LARC)?", options: ["Oral contraceptive pill", "Intrauterine Device (IUD)", "Male condom", "Emergency contraception"], answer: 1, explanation: "LARCs, like IUDs and hormonal implants, are highly effective methods of contraception that last for several years and are reversible." },
    { topic: 'fam', question: "The 'perinatal period' is generally defined as:", options: ["From conception to birth", "The first 28 days of life", "From 22 completed weeks of gestation to 7 completed days after birth", "The first year of life"], answer: 2, explanation: "The WHO defines the perinatal period as commencing at 22 completed weeks (154 days) of gestation and ending seven completed days after birth." },
    { topic: 'fam', question: "Exclusive breastfeeding is recommended by the WHO for how long?", options: ["3 months", "6 months", "9 months", "12 months"], answer: 1, explanation: "The World Health Organization (WHO) recommends exclusive breastfeeding for the first 6 months of life." },
    { topic: 'fam', question: "The Apgar score is used to assess:", options: ["Maternal health post-delivery", "The newborn's physical condition at birth", "Gestational age", "The risk of postpartum depression"], answer: 1, explanation: "The Apgar score is a quick test performed on a baby at 1 and 5 minutes after birth to assess their physical condition." },
    { topic: 'fam', question: "What is the leading cause of maternal mortality worldwide?", options: ["Infection", "Severe bleeding (hemorrhage)", "Obstructed labor", "Unsafe abortion"], answer: 1, explanation: "Severe bleeding, or postpartum hemorrhage, is the leading cause of maternal mortality, accounting for a significant percentage of maternal deaths globally." },
    { topic: 'fam', question: "Which of these is a key component of Antenatal Care (ANC)?", options: ["Childhood vaccinations", "Screening for pre-eclampsia", "Geriatric assessment", "Occupational therapy"], answer: 1, explanation: "Screening for conditions like pre-eclampsia (through blood pressure checks and urine tests) is a vital part of routine antenatal care." },
    { topic: 'fam', question: "The 'G' in the GTPAL obstetric history stands for:", options: ["Gestation", "Gravida (number of pregnancies)", "Gender", "Group B Strep"], answer: 1, explanation: "Gravida refers to the total number of times a woman has been pregnant, regardless of the outcome." },
    { topic: 'fam', question: "What is the primary goal of family planning programs?", options: ["To limit population growth", "To enable individuals and couples to decide freely the number and spacing of their children", "To promote a specific type of contraceptive", "To reduce the number of hospital births"], answer: 1, explanation: "The primary goal of family planning is to empower individuals to make informed choices about their reproductive health." },
    { topic: 'fam', question: "Which STI is preventable with the HPV vaccine?", options: ["HIV", "Syphilis", "Genital warts and cervical cancer", "Gonorrhea"], answer: 2, explanation: "The Human Papillomavirus (HPV) vaccine protects against the HPV strains that cause most cases of genital warts and cervical cancer." },
    { topic: 'fam', question: "Oral Rehydration Salts (ORS) are a critical intervention for managing which common childhood illness?", options: ["Pneumonia", "Diarrheal disease", "Measles", "Malaria"], answer: 1, explanation: "ORS is a simple, effective treatment for dehydration caused by diarrhea. It replaces lost fluids and electrolytes and has dramatically reduced childhood mortality." },
    { topic: 'fam', question: "The 'neonatal period' refers to the first:", options: ["7 days of life", "28 days of life", "6 months of life", "12 months of life"], answer: 1, explanation: "The neonatal period is defined as the first 28 days of an infant's life." },
    { topic: 'fam', question: "What is the main purpose of placing a newborn skin-to-skin with the mother immediately after birth?", options: ["To keep the baby warm and promote bonding", "To check the baby's reflexes", "To weigh the baby", "To administer vitamin K"], answer: 0, explanation: "Immediate skin-to-skin contact helps regulate the newborn's temperature, heart rate, and breathing, and promotes bonding and the initiation of breastfeeding." },
    { topic: 'fam', question: "Which of the following is a major risk factor for low birth weight?", options: ["High maternal education", "Maternal smoking during pregnancy", "Delayed childbearing", "High socioeconomic status"], answer: 1, explanation: "Maternal smoking is a significant and modifiable risk factor for low birth weight, preterm birth, and other adverse pregnancy outcomes." },
    { topic: 'fam', question: "The 'IMCI' strategy developed by WHO and UNICEF stands for:", options: ["Infant Mortality and Child Illness", "Integrated Management of Childhood Illness", "Immediate Maternal and Child Interventions", "International Mother and Child Initiative"], answer: 1, explanation: "IMCI is an integrated approach to child health that focuses on the well-being of the whole child. IMCI aims to reduce death, illness and disability, and to promote improved growth and development among children under five years of age." },
    { topic: 'fam', question: "Partograph is a tool used to:", options: ["Monitor the progress of labor", "Assess fetal growth in utero", "Track a child's vaccination schedule", "Evaluate postpartum mental health"], answer: 0, explanation: "A partograph is a graphical record of key data (maternal and fetal) during labour, entered against time on a single sheet of paper. It is a key tool for preventing obstructed labor." },

    // Nutrition (15)
    { topic: 'nut', question: "Kwashiorkor is a severe form of malnutrition caused by a deficiency of:", options: ["Total calories", "Vitamin A", "Iron", "Protein"], answer: 3, explanation: "Kwashiorkor is characterized by edema (swelling) and is caused by inadequate protein intake, despite potentially sufficient calorie intake." },
    { topic: 'nut', question: "Which vitamin deficiency causes scurvy?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: 2, explanation: "Scurvy is a disease resulting from a lack of vitamin C, as it is required for the synthesis of collagen in humans." },
    { topic: 'nut', question: "Pellagra, characterized by the '4 Ds' (dermatitis, diarrhea, dementia, death), is caused by a deficiency of which vitamin?", options: ["Vitamin C (Ascorbic Acid)", "Vitamin B1 (Thiamine)", "Vitamin B3 (Niacin)", "Vitamin D"], answer: 2, explanation: "Pellagra is a systemic disease resulting from a severe deficiency of niacin (Vitamin B3)." },
    { topic: 'nut', question: "Which of the following is a good source of dietary iron?", options: ["Citrus fruits", "Dairy products", "Red meat and lentils", "White rice"], answer: 2, explanation: "Heme iron from animal sources like red meat is most easily absorbed. Non-heme iron is found in plant sources like lentils and beans." },
    { topic: 'nut', question: "The term 'stunting' in children refers to:", options: ["Low weight-for-age", "Low weight-for-height", "Low height-for-age", "High body mass index"], answer: 2, explanation: "Stunting, or low height-for-age, is the result of chronic or recurrent undernutrition and is a key indicator of long-term nutritional status." },
    { topic: 'nut', question: "Iodine deficiency is the world's most prevalent, yet easily preventable, cause of:", options: ["Blindness", "Anemia", "Brain damage", "Rickets"], answer: 2, explanation: "Iodine deficiency during pregnancy and early childhood can cause irreversible brain damage and is a major cause of intellectual disability globally. It is easily prevented by using iodized salt." },
    { topic: 'nut', question: "Marasmus is a form of severe malnutrition characterized by a deficiency in:", options: ["Protein only", "Vitamins", "All macronutrients (calories, protein, fat)", "Iron and zinc"], answer: 2, explanation: "Marasmus is a form of severe malnutrition characterized by energy deficiency. A child with marasmus looks emaciated." },
    { topic: 'nut', question: "Vitamin A deficiency is a major cause of preventable __________ in children.", options: ["Deafness", "Blindness", "Stunting", "Obesity"], answer: 1, explanation: "Vitamin A is essential for vision, and its deficiency is the leading cause of preventable childhood blindness." },
    { topic: 'nut', question: "What is the primary function of carbohydrates in the diet?", options: ["Building muscle", "Providing energy", "Insulating the body", "Transporting vitamins"], answer: 1, explanation: "Carbohydrates are the body's main source of energy. They are broken down into glucose, which is used to fuel cells, tissues, and organs." },
    { topic: 'nut', question: "Which of the following is a water-soluble vitamin?", options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin C"], answer: 3, explanation: "Vitamins are classified as either fat-soluble (A, D, E, K) or water-soluble (B vitamins and C). Water-soluble vitamins are not stored in the body and must be consumed regularly." },
    { topic: 'nut', question: "Rickets, a condition that affects bone development in children, is caused by a deficiency of:", options: ["Calcium", "Vitamin D", "Phosphorus", "Both Calcium and Vitamin D"], answer: 3, explanation: "Rickets is the softening and weakening of bones in children, usually because of an extreme and prolonged vitamin D deficiency. Vitamin D is essential for the absorption of calcium and phosphorus." },
    { topic: 'nut', question: "The Body Mass Index (BMI) is calculated using which two measurements?", options: ["Height and waist circumference", "Weight and age", "Weight and height", "Blood pressure and heart rate"], answer: 2, explanation: "BMI is a person's weight in kilograms divided by the square of height in meters (kg/m²)." },
    { topic: 'nut', question: "Goiter is an enlargement of the thyroid gland, most commonly caused by a deficiency of:", options: ["Iron", "Selenium", "Iodine", "Zinc"], answer: 2, explanation: "Iodine is an essential component of the thyroid hormones thyroxine (T4) and triiodothyronine (T3). A lack of iodine leads to decreased production of these hormones and a compensatory enlargement of the thyroid gland." },
    { topic: 'nut', question: "Which of the following foods is a complete protein, containing all nine essential amino acids?", options: ["Beans", "Quinoa", "Peanuts", "Wheat"], answer: 1, explanation: "Quinoa is one of the few plant foods that is a complete protein, meaning it contains all nine essential amino acids that our bodies cannot produce on their own." },
    { topic: 'nut', question: "The 'food pyramid' is a tool designed to:", options: ["Rank foods by cost", "Illustrate a healthy diet by showing recommended proportions of food groups", "Categorize foods by color", "List the calorie content of foods"], answer: 1, explanation: "A food guide pyramid is a graphical representation of a healthy diet, showing the types and proportions of foods that should be eaten every day." },

    // Health Promotion (15)
    { topic: 'promo', question: "The Ottawa Charter for Health Promotion identified which of the following as a key action area?", options: ["Mandatory annual check-ups", "Building healthy public policy", "Focusing only on high-risk individuals", "Primarily hospital-based care"], answer: 1, explanation: "The Ottawa Charter's five action areas are: building healthy public policy, creating supportive environments, strengthening community actions, developing personal skills, and re-orienting health services." },
    { topic: 'promo', question: "Which level of prevention aims to detect and treat a disease in its early stages?", options: ["Primary Prevention", "Secondary Prevention", "Tertiary Prevention", "Primordial Prevention"], answer: 1, explanation: "Secondary prevention aims to reduce the impact of a disease or injury that has already occurred. This is done by detecting and treating disease or injury as soon as possible to halt or slow its progress." },
    { topic: 'promo', question: "Which of the following is an example of primary prevention?", options: ["Mammography screening for breast cancer", "Rehabilitation after a stroke", "Vaccination against measles", "Managing diabetes with insulin"], answer: 2, explanation: "Primary prevention aims to prevent disease or injury before it ever occurs. Vaccination is a classic example." },
    { topic: 'promo', question: "The Health Belief Model suggests that a person's belief in a personal threat of an illness or disease together with a person's belief in the effectiveness of the recommended health behavior will predict:", options: ["The likelihood the person will adopt the behavior", "The person's socioeconomic status", "The person's access to healthcare", "The actual severity of the disease"], answer: 0, explanation: "The Health Belief Model posits that health-seeking behavior is influenced by perceptions of susceptibility, severity, benefits, and barriers." },
    { topic: 'promo', question: "What is 'health literacy'?", options: ["The ability to read and write", "A person's knowledge of medical terminology", "The degree to which individuals can obtain, process, and understand basic health information and services needed to make appropriate health decisions", "Having a degree in a health-related field"], answer: 2, explanation: "Health literacy is about more than just reading; it's about being able to understand and use health information to make informed decisions and navigate the healthcare system." },
    { topic: 'promo', question: "Which of these is a key principle of community mobilization?", options: ["A top-down approach led by experts", "Empowering community members to take action and ownership", "Focusing only on individual behavior change", "Providing financial incentives for participation"], answer: 1, explanation: "Community mobilization is a process that empowers individuals and groups to take action to achieve common goals, fostering a sense of ownership and sustainability." },
    { topic: 'promo', question: "The 'social determinants of health' are the:", options: ["Genetic and biological factors that affect health", "Behaviors and lifestyles of individuals", "Conditions in which people are born, grow, live, work and age", "Viruses and bacteria that cause disease"], answer: 2, explanation: "These circumstances are shaped by the distribution of money, power, and resources at global, national, and local levels. Examples include poverty, education, and access to safe housing." },
    { topic: 'promo', question: "A 'harm reduction' approach to public health aims to:", options: ["Eliminate all risky behaviors", "Punish individuals for unhealthy choices", "Reduce the negative consequences associated with risky behaviors", "Focus solely on prevention"], answer: 2, explanation: "Harm reduction is a set of practical strategies and ideas aimed at reducing negative consequences associated with drug use and other risky behaviors. A classic example is providing clean needles to injection drug users to prevent HIV transmission." },
    { topic: 'promo', question: "Which of the following is the best example of 'creating a supportive environment' for health?", options: ["A lecture on the benefits of exercise", "Building safe walking paths and parks in a community", "A doctor prescribing weight loss medication", "A tax on sugary drinks"], answer: 1, explanation: "Creating supportive environments involves making physical and social environments that make healthy choices easier. Building parks encourages physical activity." },
    { topic: 'promo', question: "The Transtheoretical Model (Stages of Change) includes which of the following stages?", options: ["Pre-contemplation, Contemplation, Preparation, Action, Maintenance", "Denial, Anger, Bargaining, Depression, Acceptance", "Awareness, Interest, Evaluation, Trial, Adoption", "Knowledge, Attitude, Practice"], answer: 0, explanation: "The Stages of Change model describes a five-stage process that individuals go through in order to change behavior." },
    { topic: 'promo', question: "Which level of prevention aims to prevent the risk factors themselves from developing?", options: ["Primary Prevention", "Secondary Prevention", "Tertiary Prevention", "Primordial Prevention"], answer: 3, explanation: "Primordial prevention consists of actions to minimize future hazards to health and hence inhibit the establishment of factors (environmental, economic, social, behavioral, cultural) known to increase the risk of disease." },
    { topic: 'promo', question: "An example of a 'health promotion' campaign is:", options: ["A hospital advertising its new surgical wing", "A public service announcement about the dangers of smoking", "A pharmaceutical company marketing a new drug", "A clinic offering free treatment for an existing illness"], answer: 1, explanation: "Health promotion focuses on enabling people to increase control over, and to improve, their health. Campaigns that raise awareness about health risks like smoking are a core component." },
    { topic: 'promo', question: "The 'advocacy' role in health promotion involves:", options: ["Providing medical treatment", "Conducting research studies", "Arguing in favor of particular policies or resources to improve health", "Educating individual patients"], answer: 2, explanation: "Advocacy for health refers to a combination of individual and social actions designed to gain political commitment, policy support, social acceptance and systems support for a particular health goal or program." },
    { topic: 'promo', question: "What does the term 'empowerment' mean in the context of health promotion?", options: ["Giving people medical authority", "A process through which people gain greater control over decisions and actions affecting their health", "Forcing people to adopt healthy behaviors", "Providing free health insurance"], answer: 1, explanation: "Empowerment for health is a process of enabling people to increase control over their health and its determinants, and thereby improve their health." },
    { topic: 'promo', question: "The 'social marketing' approach to health promotion uses:", options: ["Social media influencers to sell products", "Commercial marketing principles to influence health behavior", "Door-to-door sales techniques", "Government regulations to enforce behavior change"], answer: 1, explanation: "Social marketing uses marketing concepts to influence behaviors that benefit individuals and communities for the greater social good. It seeks to develop and integrate marketing concepts with other approaches to influence behaviors that benefit individuals and communities." },

    // Occupational Health (15)
    { topic: 'occ', question: "Byssinosis, an occupational lung disease, is commonly associated with workers in which industry?", options: ["Coal mining", "Textile manufacturing (cotton)", "Shipbuilding (asbestos)", "Sandblasting (silica)"], answer: 1, explanation: "Byssinosis, or 'brown lung disease', is caused by inhaling dust from cotton, flax, or hemp processing." },
    { topic: 'occ', question: "What is the primary goal of ergonomics in the workplace?", options: ["To increase work speed", "To reduce the risk of musculoskeletal injuries by fitting the job to the worker", "To monitor employee activity", "To provide personal protective equipment"], answer: 1, explanation: "Ergonomics is the science of fitting a workplace to the user's needs, aiming to increase efficiency and productivity and reduce discomfort and risk of injury." },
    { topic: 'occ', question: "The hierarchy of controls for occupational hazards places which of the following as the most effective measure?", options: ["Personal Protective Equipment (PPE)", "Administrative controls", "Engineering controls", "Elimination"], answer: 3, explanation: "The hierarchy of controls prioritizes interventions from most to least effective: Elimination, Substitution, Engineering Controls, Administrative Controls, and finally, PPE." },
    { topic: 'occ', question: "Silicosis is a lung disease caused by inhaling dust containing:", options: ["Asbestos", "Crystalline silica", "Coal", "Beryllium"], answer: 1, explanation: "Silicosis is a long-term lung disease caused by inhaling large amounts of crystalline silica dust, usually over many years. It's common in mining, quarrying, and construction." },
    { topic: 'occ', question: "A 'Threshold Limit Value' (TLV) refers to:", options: ["The maximum legally permissible exposure level", "The level of a substance a worker can be exposed to day after day without adverse health effects", "The concentration that is immediately dangerous to life or health", "The lowest detectable level of a chemical"], answer: 1, explanation: "TLVs are guidelines, established by the ACGIH, for the maximum airborne concentration of a chemical substance to which it is believed a worker can be exposed day after day for a working lifetime without adverse effect." },
    { topic: 'occ', question: "Which of the following is an example of an 'administrative control' for noise exposure?", options: ["Using earplugs", "Enclosing the noisy machine", "Rotating workers through high-noise areas", "Replacing the machine with a quieter one"], answer: 2, explanation: "Administrative controls are changes in work policy or procedures to reduce or minimize exposure. Rotating workers is a policy change, whereas earplugs are PPE and enclosing the machine is an engineering control." },
    { topic: 'occ', question: "Carpal tunnel syndrome is a common occupational injury related to:", options: ["Chemical exposure", "Loud noise", "Repetitive motion of the wrist", "High-altitude work"], answer: 2, explanation: "Carpal tunnel syndrome is a condition that causes numbness, tingling, or weakness in your hand. It happens because of pressure on your median nerve, which runs the length of your arm, goes through a passage in your wrist called the carpal tunnel, and ends in your hand. Repetitive motions can cause this pressure." },
    { topic: 'occ', question: "The primary purpose of a Material Safety Data Sheet (MSDS) or Safety Data Sheet (SDS) is to:", options: ["Provide information on the chemical's price", "Detail the hazards of a chemical and how to handle it safely", "List the ingredients for manufacturing the chemical", "Advertise the chemical's benefits"], answer: 1, explanation: "An SDS provides comprehensive information about a substance or mixture for use in workplace chemical management. It includes information on the properties of each chemical; the physical, health, and environmental health hazards; protective measures; and safety precautions for handling, storing, and transporting the chemical." },
    { topic: 'occ', question: "Which type of radiation is considered non-ionizing?", options: ["X-rays", "Gamma rays", "Alpha particles", "Radio waves"], answer: 3, explanation: "Non-ionizing radiation does not have enough energy to remove electrons from atoms and molecules. Examples include radio waves, microwaves, and visible light. Ionizing radiation (X-rays, gamma rays) can cause cellular damage." },
    { topic: 'occ', question: "What is the most common type of occupational illness?", options: ["Cancers", "Respiratory conditions", "Skin diseases and disorders", "Poisonings"], answer: 2, explanation: "According to many occupational health bodies, skin diseases such as contact dermatitis are the most frequently reported occupational illnesses." },
    { topic: 'occ', question: "A 'biological hazard' in the workplace would include:", options: ["A slippery floor", "An unguarded machine", "Exposure to viruses or bacteria", "A toxic chemical"], answer: 2, explanation: "Biological hazards, also known as biohazards, refer to biological substances that pose a threat to the health of living organisms, primarily that of humans. This can include medical waste, a virus, or a toxin." },
    { topic: 'occ', question: "The 'healthy worker effect' is a type of bias where:", options: ["Workers are healthier than the general population", "Healthy workers are promoted faster", "Workplaces provide excellent health benefits", "Sick workers are given lighter duties"], answer: 0, explanation: "The healthy worker effect is a selection bias observed in occupational epidemiology where workers usually exhibit lower overall death rates than the general population because the severely ill and chronically disabled are ordinarily excluded from employment." },
    { topic: 'occ', question: "Which of the following is a primary prevention strategy for workplace injuries?", options: ["Providing first aid after an injury", "Investigating an accident to find the cause", "Implementing a safety training program before work begins", "Offering rehabilitation services to injured workers"], answer: 2, explanation: "Primary prevention aims to stop injuries before they happen. Safety training is a proactive measure to prevent incidents." },
    { topic: 'occ', question: "Pneumoconiosis is a general term for a class of lung diseases caused by:", options: ["Bacterial infection", "Inhalation of dust", "Viral exposure", "Genetic predisposition"], answer: 1, explanation: "Pneumoconiosis is one of a group of interstitial lung diseases caused by the inhalation of certain dusts and the lung tissue's reaction to the dust. The principal cause of the pneumoconioses is work-place exposure." },
    { topic: 'occ', question: "What does a dosimeter measure?", options: ["Noise levels", "Air quality", "An individual's exposure to radiation", "Vibration intensity"], answer: 2, explanation: "A dosimeter is a device that measures dose uptake of external ionizing radiation. It is worn by the person being monitored." },

    // Infectious Diseases (15)
    { topic: 'inf', question: "The 'DOTS' strategy is a key public health intervention for which disease?", options: ["HIV/AIDS", "Malaria", "Tuberculosis", "Cholera"], answer: 2, explanation: "DOTS (Directly Observed Treatment, Short-course) is the internationally recommended strategy for TB control that has been recognized as a highly efficient and cost-effective strategy." },
    { topic: 'inf', question: "Which of the following diseases is transmitted by the Aedes aegypti mosquito?", options: ["Malaria", "Yellow Fever", "Sleeping sickness", "Onchocerciasis"], answer: 1, explanation: "The Aedes aegypti mosquito is the primary vector for several diseases, including Yellow Fever, Dengue, Chikungunya, and Zika virus." },
    { topic: 'inf', question: "The 'cold chain' is a system of storing and transporting vaccines at recommended temperatures from the point of manufacture to the point of use. It is critical for maintaining vaccine:", options: ["Cost", "Availability", "Potency", "Color"], answer: 2, explanation: "Vaccine potency can be lost if the cold chain is broken. Heat, light, or freezing can damage vaccines, making them ineffective." },
    { topic: 'inf', question: "Which of the following is NOT one of the 'Five Cs' that facilitate transmission of communicable diseases?", options: ["Crowding", "Contact (close)", "Cleanliness", "Contaminated surfaces"], answer: 2, explanation: "The Five Cs are Crowding, close Contact, Contaminated surfaces, Compromised skin, and lack of Cleanliness. Cleanliness itself is a preventive measure, not a factor that facilitates transmission." },
    { topic: 'inf', question: "Ring vaccination was a key strategy in the eradication of which disease?", options: ["Polio", "Measles", "Smallpox", "Rubella"], answer: 2, explanation: "Ring vaccination involves vaccinating the contacts of a confirmed case of a disease, and then the contacts of those contacts, to form a 'ring' of immunity around the case and prevent further spread. It was instrumental in the global eradication of smallpox." },
    { topic: 'inf', question: "What is the causative agent of peptic ulcer disease, which was a paradigm shift in understanding the disease?", options: ["Stress", "Spicy food", "Helicobacter pylori", "Epstein-Barr virus"], answer: 2, explanation: "The discovery that the bacterium H. pylori is a major cause of peptic ulcers revolutionized its treatment, which now includes antibiotics." },
    { topic: 'inf', question: "The Expanded Programme on Immunization (EPI) originally targeted six diseases. Which of these was one of them?", options: ["Hepatitis B", "Tuberculosis", "HIV", "Rotavirus"], answer: 1, explanation: "The original six EPI diseases were tuberculosis (BCG vaccine), diphtheria, tetanus, pertussis (DTP vaccine), measles, and poliomyelitis." },
    { topic: 'inf', question: "What is 'antigenic drift' in influenza viruses?", options: ["A major, abrupt change in the virus's surface antigens", "A series of small genetic mutations over time", "The process of the virus becoming less virulent", "The movement of the virus between species"], answer: 1, explanation: "Antigenic drift involves small mutations in the genes of influenza viruses that can lead to changes in the surface proteins of the virus. This is why a new flu vaccine is needed each year." },
    { topic: 'inf', question: "Leprosy (Hansen's disease) is caused by which type of organism?", options: ["Virus", "Fungus", "Protozoan", "Bacterium"], answer: 3, explanation: "Leprosy is a chronic infectious disease caused by the bacterium Mycobacterium leprae." },
    { topic: 'inf', question: "Which of the following is the primary mode of transmission for HIV?", options: ["Mosquito bites", "Casual contact (hugging, shaking hands)", "Sexual contact and sharing of needles", "Airborne droplets"], answer: 2, explanation: "HIV is transmitted through specific bodily fluids, primarily through unprotected sexual intercourse, sharing contaminated needles, and from a mother to her child during pregnancy, childbirth, or breastfeeding." },
    { topic: 'inf', question: "Trachoma is an infectious disease that is the world's leading preventable cause of:", options: ["Deafness", "Blindness", "Diarrhea", "Paralysis"], answer: 1, explanation: "Trachoma is a bacterial infection of the eye, and repeated infections can cause scarring on the eyelid that leads to the eyelashes turning inward and scraping the cornea, eventually causing irreversible blindness." },
    { topic: 'inf', question: "The 'S' in the 'SAFE' strategy for trachoma control stands for:", options: ["Screening", "Surgery", "Sanitation", "Surveillance"], answer: 1, explanation: "The SAFE strategy consists of Surgery for advanced disease (trichiasis), Antibiotics to clear infection, Facial cleanliness, and Environmental improvement to reduce transmission." },
    { topic: 'inf', question: "Lassa fever, endemic in parts of West Africa, is primarily transmitted to humans through:", options: ["Mosquito bites", "Contact with the urine or feces of infected rats", "Contaminated water", "Person-to-person airborne spread"], answer: 1, explanation: "The reservoir, or host, of the Lassa virus is a rodent known as the 'multimammate rat'. Humans become infected from exposure to urine or feces of infected rats." },
    { topic: 'inf', question: "The 'incubation period' of an infectious disease is the time between:", options: ["Infection and the onset of infectiousness", "Infection and the onset of symptoms", "The onset of symptoms and recovery", "The first and last case in an outbreak"], answer: 1, explanation: "It is the period between exposure to an infection and the appearance of the first symptoms." },
    { topic: 'inf', question: "Which of these diseases has been globally eradicated?", options: ["Polio", "Smallpox", "Guinea worm disease", "Measles"], answer: 1, explanation: "Smallpox was declared globally eradicated by the WHO in 1980 following a historic global immunization campaign. Polio and Guinea worm are close to eradication but not yet there." },

    // Non-Communicable Diseases (15)
    { topic: 'ncd', question: "Which of the following is a non-modifiable risk factor for cardiovascular disease?", options: ["High blood pressure", "Tobacco use", "Family history", "High cholesterol"], answer: 2, explanation: "Non-modifiable risk factors are those that cannot be changed, such as age, sex, and family history/genetics. The others are modifiable through lifestyle changes or medication." },
    { topic: 'ncd', question: "Type 2 diabetes is primarily characterized by:", options: ["Insulin resistance and relative insulin deficiency", "Autoimmune destruction of pancreatic beta cells", "A complete lack of insulin production", "Viral infection of the pancreas"], answer: 0, explanation: "In Type 2 diabetes, the body either doesn't produce enough insulin, or it resists insulin. This is in contrast to Type 1 diabetes, which is an autoimmune condition causing an absolute lack of insulin." },
    { topic: 'ncd', question: "The 'rule of halves' is often used to describe the public health challenge of which condition?", options: ["Asthma", "Hypertension", "Depression", "Osteoporosis"], answer: 1, explanation: "The 'rule of halves' for hypertension suggests that about half of all people with hypertension are diagnosed, half of those diagnosed are treated, and only half of those treated are controlled to target levels." },
    { topic: 'ncd', question: "Which of the following is the most common cause of cancer death worldwide?", options: ["Breast cancer", "Prostate cancer", "Colorectal cancer", "Lung cancer"], answer: 3, explanation: "Largely due to its strong association with tobacco use, lung cancer remains the leading cause of cancer mortality globally." },
    { topic: 'ncd', question: "Chronic Obstructive Pulmonary Disease (COPD) is most commonly caused by:", options: ["Genetic factors", "Childhood asthma", "Exposure to tobacco smoke", "Bacterial infections"], answer: 2, explanation: "The primary cause of COPD is long-term exposure to lung irritants. In most cases, this is cigarette smoke." },
    { topic: 'ncd', question: "The WHO 'Best Buys' for NCD prevention include all of the following EXCEPT:", options: ["Increasing taxes on tobacco", "Reducing salt intake", "Providing free gym memberships", "Promoting physical activity"], answer: 2, explanation: "The WHO 'Best Buys' focus on cost-effective, population-level interventions like taxation, salt reduction policies, and public awareness campaigns. While promoting physical activity is a goal, providing free gym memberships is not typically considered a 'best buy' due to cost and reach." },
    { topic: 'ncd', question: "Metabolic syndrome is a cluster of conditions that increase the risk of heart disease, stroke, and diabetes. Which of the following is a key component?", options: ["Low blood sugar", "Increased abdominal obesity (waist circumference)", "Low blood pressure", "High HDL cholesterol"], answer: 1, explanation: "The criteria for metabolic syndrome include central obesity, high blood pressure, high triglycerides, low HDL ('good') cholesterol, and insulin resistance." },
    { topic: 'ncd', question: "Secondary prevention for stroke would include:", options: ["Public campaigns about stroke symptoms (e.g., FAST)", "Rehabilitation therapy after a stroke", "Controlling blood pressure in a patient who has had a previous stroke", "A healthy diet to prevent stroke"], answer: 2, explanation: "Secondary prevention aims to prevent a recurrence of a disease. Controlling risk factors like hypertension in a patient who has already had a stroke is a key secondary prevention strategy." },
    { topic: 'ncd', question: "Which of the following is a major risk factor for developing osteoarthritis?", options: ["Smoking", "High-impact sports", "Obesity", "High-calcium diet"], answer: 2, explanation: "Excess body weight puts additional stress on weight-bearing joints, such as the hips and knees, increasing the risk of developing osteoarthritis." },
    { topic: 'ncd', question: "The 'primordial prevention' of heart disease would focus on:", options: ["Treating high cholesterol with statins", "Screening for high blood pressure", "Preventing the establishment of risk factors like smoking in the first place", "Cardiac rehabilitation after a heart attack"], answer: 2, explanation: "Primordial prevention aims to prevent the development of risk factors themselves, often through broad public health policies and health promotion targeting the whole population." },
    { topic: 'ncd', question: "Which of the following is a key symptom of glaucoma?", options: ["Sudden, severe eye pain", "Flashes of light", "Gradual loss of peripheral vision", "Clouding of the lens"], answer: 2, explanation: "Open-angle glaucoma, the most common form, often has no early symptoms but leads to a slow, painless loss of side (peripheral) vision." },
    { topic: 'ncd', question: "What is the primary public health concern related to excessive alcohol consumption?", options: ["Liver cirrhosis and cancer", "Increased risk of injuries and violence", "Fetal Alcohol Syndrome", "All of the above"], answer: 3, explanation: "Excessive alcohol use has a wide range of negative consequences, including chronic diseases, acute injuries, and social problems." },
    { topic: 'ncd', question: "The 'Polypill' strategy for cardiovascular disease prevention involves:", options: ["A single pill containing multiple vitamins", "A single pill containing several low-dose medications like a statin and blood pressure drugs", "A personalized set of medications", "A pill made from natural plant extracts"], answer: 1, explanation: "The polypill is a fixed-dose combination medication that contains several drugs (commonly an aspirin, a statin, and blood pressure-lowering agents) to reduce the risk of cardiovascular disease." },
    { topic: 'ncd', question: "Which of these is a major component of the WHO's MPOWER strategy for tobacco control?", options: ["Promote tobacco products", "Offer help to quit tobacco use", "Warn about the dangers of second-hand smoke only", "Entertain tobacco industry lobbyists"], answer: 1, explanation: "MPOWER is an acronym for six key tobacco control measures: Monitor tobacco use, Protect people from smoke, Offer help to quit, Warn about dangers, Enforce bans on advertising, and Raise taxes." },
    { topic: 'ncd', question: "Mental health conditions, such as depression and anxiety, are classified as:", options: ["Communicable diseases", "Non-communicable diseases", "Genetic disorders only", "Lifestyle choices"], answer: 1, explanation: "Mental health conditions are a major and growing category of NCDs, contributing significantly to the global burden of disease." },

    // Demography & Population Studies (10)
    { topic: 'demog', question: "The 'demographic transition model' describes the shift from:", options: ["Rural to urban populations", "High birth and death rates to low birth and death rates", "Agricultural to industrial economies", "Young to aging populations"], answer: 1, explanation: "The demographic transition model describes the historical shift in demographics from high birth rates and high infant death rates in societies with minimal technology, education (especially of women) and economic development, to low birth rates and low death rates in societies with advanced technology, education and economic development." },
    { topic: 'demog', question: "A population pyramid with a wide base and narrow top is characteristic of a:", options: ["Slowly growing population", "Stable population", "Rapidly growing population", "Declining population"], answer: 2, explanation: "A wide base indicates a large number of children and a high birth rate, while a narrow top indicates a high death rate and low life expectancy. This shape is typical of a young, rapidly growing population." },
    { topic: 'demog', question: "The 'Total Fertility Rate' (TFR) is defined as:", options: ["The number of live births per 1,000 people in a year", "The total number of children a woman has in her lifetime", "The average number of children a woman would have if she were to pass through her childbearing years bearing children at the current age-specific fertility rates", "The number of female births per 1,000 female births"], answer: 2, explanation: "TFR is a synthetic rate that represents the average number of children a woman would have, assuming current fertility rates remain constant throughout her reproductive years." },
    { topic: 'demog', question: "What is the 'dependency ratio'?", options: ["The ratio of imports to exports", "The ratio of the economically dependent part of the population to the productive part", "The ratio of rural to urban population", "The ratio of government debt to GDP"], answer: 1, explanation: "The dependency ratio is an age-population ratio of those typically not in the labor force (the dependent part ages 0-14 and 65+) and those typically in the labor force (the productive part ages 15-64)." },
    { topic: 'demog', question: "Which of the following is a 'pull' factor for migration?", options: ["Poverty in the home country", "Political instability", "Job opportunities in the destination country", "Natural disasters"], answer: 2, explanation: "'Pull' factors are conditions that attract people to a new location. 'Push' factors are conditions that drive people away from their home location." },
    { topic: 'demog', question: "A 'census' is the process of:", options: ["Registering voters for an election", "Systematically acquiring and recording information about the members of a given population", "Surveying a small sample of the population", "Tracking migration patterns"], answer: 1, explanation: "A census is the complete enumeration of a population. It is a primary source of demographic data." },
    { topic: 'demog', question: "The 'infant mortality rate' is the number of deaths of infants under one year of age per:", options: ["100 live births", "1,000 live births", "10,000 live births", "100,000 population"], answer: 1, explanation: "The IMR is a key indicator of a population's overall health and is expressed as the number of infant deaths per 1,000 live births." },
    { topic: 'demog', question: "What is 'life expectancy at birth'?", options: ["The maximum age to which a person can live", "The average age of death in a population", "The average number of years a newborn infant can expect to live if current mortality rates continue to apply", "The number of years a person is expected to live in good health"], answer: 2, explanation: "It is a statistical measure of the average time an organism is expected to live, based on the year of its birth, its current age, and other demographic factors including sex." },
    { topic: 'demog', question: "The 'crude birth rate' is considered 'crude' because:", options: ["It is often inaccurate", "It includes both male and female births", "It does not take into account the age or sex structure of the population", "It is difficult to calculate"], answer: 2, explanation: "The crude birth rate is the number of live births per 1,000 people in the entire population. It doesn't account for the fact that only women of childbearing age can give birth, making it a less refined measure than the TFR." },
    { topic: 'demog', question: "Population momentum refers to:", options: ["The speed of population growth", "The tendency for population growth to continue beyond the time that replacement-level fertility has been achieved", "The movement of people from rural to urban areas", "The impact of migration on population size"], answer: 1, explanation: "Population momentum occurs because of a high concentration of people in their childbearing years. Even if fertility rates fall to replacement level, the large number of young people will continue to have children, causing the population to grow." },

    // Medical Sociology (10)
    { topic: 'socio', question: "The 'sick role', as described by Talcott Parsons, includes which of the following rights?", options: ["The right to be exempt from normal social roles", "The right to refuse all medical treatment", "The right to continue working while sick", "The right to self-diagnose"], answer: 0, explanation: "The sick role concept includes two rights (exemption from normal roles, not being held responsible for their condition) and two obligations (to try to get well, to seek competent help and cooperate with medical professionals)." },
    { topic: 'socio', question: "Which of the following best describes 'medicalization'?", options: ["The process of making all healthcare free", "The process by which human problems or experiences become defined and treated as medical conditions", "The training of doctors and nurses", "The increasing use of technology in medicine"], answer: 1, explanation: "Medicalization is the process by which non-medical problems become defined and treated as medical problems, usually in terms of illnesses or disorders. Examples include alcoholism, ADHD, and childbirth." },
    { topic: 'socio', question: "The 'social gradient' in health refers to the fact that:", options: ["Health improves as you go up the social ladder", "People in higher social classes have more stress", "Rural populations are healthier than urban ones", "Health is not related to social status"], answer: 0, explanation: "The social gradient in health is a term used to describe the phenomenon whereby people who are less advantaged in terms of socioeconomic position have worse health (and shorter lives) than those who are more advantaged." },
    { topic: 'socio', question: "What is 'stigma' in a health context?", options: ["A physical symptom of a disease", "A mark of disgrace that sets a person apart due to their health condition", "A type of genetic mutation", "A side effect of medication"], answer: 1, explanation: "Health-related stigma is a social process or related action where individuals or groups are shamed, rejected, or devalued due to a health condition, such as HIV, mental illness, or leprosy." },
    { topic: 'socio', question: "The 'biomedical model' of health primarily focuses on:", options: ["The social and psychological aspects of health", "The physical and biological aspects of disease", "Preventive and community-based care", "Holistic and alternative therapies"], answer: 1, explanation: "The biomedical model focuses on purely biological factors and excludes psychological, environmental, and social influences. It is the dominant model of illness in the Western world." },
    { topic: 'socio', question: "Which concept explains that a patient's beliefs and expectations can influence their course of treatment and recovery?", options: ["The placebo effect", "The sick role", "Medicalization", "The social gradient"], answer: 0, explanation: "The placebo effect describes a phenomenon in which some people experience a benefit after the administration of an inactive 'look-alike' substance or treatment. This belief in the treatment's efficacy can trigger a physiological response." },
    { topic: 'socio', question: "From a sociological perspective, 'illness' is different from 'disease' in that illness is:", options: ["The objective biological condition", "The subjective experience of being unwell", "Always infectious", "Always chronic"], answer: 1, explanation: "In sociology, 'disease' is the pathological process, the deviation from a biological norm. 'Illness' is the person's subjective experience of their symptoms, what the patient feels when they go to the doctor." },
    { topic: 'socio', question: "The study of how social factors affect the distribution of disease in a population is known as:", options: ["Clinical sociology", "Medical anthropology", "Social epidemiology", "Health psychology"], answer: 2, explanation: "Social epidemiology is a branch of epidemiology that focuses particularly on the effects of social-structural factors on states of health." },
    { topic: 'socio', question: "Which of the following is an example of a 'social determinant of health'?", options: ["A person's genetic code", "The type of virus causing an infection", "A person's level of education and income", "The effectiveness of a prescribed drug"], answer: 2, explanation: "Social determinants of health are the conditions in which people are born, grow, work, live, and age, and the wider set of forces and systems shaping the conditions of daily life. Education and income are key examples." },
    { topic: 'socio', question: "The concept of 'cultural competence' in healthcare refers to:", options: ["Treating all patients the same regardless of their background", "The ability of providers to offer services that meet the unique social, cultural, and linguistic needs of patients", "Learning to speak multiple languages", "Only treating patients from one's own culture"], answer: 1, explanation: "Cultural competence is the ability of health providers and organizations to deliver health care services that meet the cultural, social, and religious needs of patients and their families." },

    // Rehabilitative & Social Medicine (15)
    { topic: 'rehab', question: "Tertiary prevention aims to:", options: ["Prevent disease from occurring", "Detect disease early", "Reduce the impact of an established disease", "Prevent risk factors"], answer: 2, explanation: "Tertiary prevention focuses on reducing the impact of an ongoing illness or injury that has lasting effects. This is done by helping people manage long-term, often complex health problems (e.g., chronic diseases, permanent impairments) in order to improve as much as possible their ability to function, their quality of life and their life expectancy. Rehabilitation is a key component." },
    { topic: 'rehab', question: "Which of the following is a primary goal of occupational therapy?", options: ["To prescribe medication", "To perform surgery", "To help people participate in the things they want and need to do through the therapeutic use of everyday activities", "To provide nutritional counseling"], answer: 2, explanation: "Occupational therapy is a client-centered health profession concerned with promoting health and well-being through occupation. The primary goal is to enable people to participate in the activities of everyday life." },
    { topic: 'rehab', question: "The International Classification of Functioning, Disability and Health (ICF) model views disability as:", options: ["A personal tragedy", "A purely medical issue", "A dynamic interaction between health conditions and contextual factors", "A reason for institutionalization"], answer: 2, explanation: "The ICF, developed by the WHO, provides a standard language and framework for the description of health and health-related states. It views disability as a complex phenomenon, reflecting an interaction between features of a person's body and features of the society in which he or she lives." },
    { topic: 'rehab', question: "A 'social enterprise' is a business that:", options: ["Is owned by the government", "Has a primary purpose of maximizing profit for shareholders", "Has a primary social objective whose surpluses are reinvested for that purpose in the business or in the community", "Is a non-profit charity"], answer: 2, explanation: "Social enterprises are businesses that are changing the world for the better. Like traditional businesses, they aim to make a profit but it's what they do with their profits that sets them apart – reinvesting or donating them to create positive social change." },
    { topic: 'rehab', question: "Which of the following is an example of an 'assistive device'?", options: ["A stethoscope", "A wheelchair", "An X-ray machine", "A surgical scalpel"], answer: 1, explanation: "Assistive devices are external devices that are designed, made, or adapted to assist a person to perform a particular task. A wheelchair helps with mobility." },
    { topic: 'rehab', question: "The concept of 'community-based rehabilitation' (CBR) emphasizes:", options: ["Building large, centralized rehabilitation hospitals", "Utilizing local resources and empowering communities to support people with disabilities", "Sending all people with disabilities to specialized centers in cities", "Focusing only on physical therapy"], answer: 1, explanation: "CBR is a community development strategy that aims to enhance the lives of persons with disabilities within their community by using and building on local resources." },
    { topic: 'rehab', question: "What is the role of a 'medical social worker' in a hospital setting?", options: ["To administer medications", "To provide surgical assistance", "To help patients and families cope with the emotional and social aspects of illness and hospitalization", "To conduct laboratory tests"], answer: 2, explanation: "Medical social workers provide psychosocial support to patients and their families, helping them navigate the healthcare system, access resources, and cope with the stress of illness." },
    { topic: 'rehab', question: "The 'social model of disability' proposes that disability is caused by:", options: ["An individual's physical or mental impairment", "The way society is organized, which creates barriers for people with impairments", "A lack of medical care", "Genetic factors"], answer: 1, explanation: "The social model of disability says that disability is caused by the way society is organised, rather than by a person's impairment or difference. It looks at ways of removing barriers that restrict life choices for disabled people." },
    { topic: 'rehab', question: "Palliative care is a specialized area of healthcare that focuses on:", options: ["Curing terminal illnesses", "Relieving symptoms and improving quality of life for people with serious illnesses", "Providing primary care services", "Experimental treatments"], answer: 1, explanation: "Palliative care is for people living with a serious illness. It is focused on providing relief from the symptoms and stress of the illness. The goal is to improve quality of life for both the patient and the family." },
    { topic: 'rehab', question: "Which of the following is a key barrier to accessing rehabilitative services in many low-income settings?", options: ["Lack of need for services", "Oversupply of trained professionals", "High cost and geographical inaccessibility", "Cultural belief that disability cannot be treated"], answer: 2, explanation: "Barriers to rehabilitation include the high cost of services, lack of trained professionals, and the concentration of services in urban areas, making them inaccessible to rural populations." },
    { topic: 'rehab', question: "The term 'gerontology' refers to the study of:", options: ["Child development", "The social, cultural, psychological, cognitive, and biological aspects of aging", "The treatment of bone fractures", "The spread of infectious diseases"], answer: 1, explanation: "Gerontology is the multidisciplinary study of the aging process and the elderly." },
    { topic: 'rehab', question: "What is 'vocational rehabilitation'?", options: ["Rehabilitation for voice disorders", "A process that enables persons with functional, psychological, developmental, cognitive, and emotional disabilities to overcome barriers to accessing, maintaining, or returning to employment", "Physical therapy for athletes", "A type of group therapy"], answer: 1, explanation: "Vocational rehabilitation aims to help individuals with disabilities prepare for, secure, regain, or retain employment." },
    { topic: 'rehab', question: "The 'Disability-Adjusted Life Year' (DALY) is a measure of:", options: ["The number of people with disabilities", "The cost of disability services", "Overall disease burden, expressed as the number of years lost due to ill-health, disability or early death", "The life expectancy of people with disabilities"], answer: 2, explanation: "The DALY is a measure of overall disease burden, expressed as the cumulative number of years lost due to ill-health, disability or early death. It combines years of life lost (YLL) and years lived with disability (YLD)." },
    { topic: 'rehab', question: "Which of these is a core principle of social medicine?", options: ["Disease is a purely biological phenomenon", "Social and economic conditions have a significant impact on health and disease", "The doctor-patient relationship is not important", "Expensive technology is the key to improving health"], answer: 1, explanation: "Social medicine is the study of how social and economic conditions impact health and disease. It argues that these factors are major determinants of health outcomes." },
    { topic: 'rehab', question: "An 'Individualized Education Program' (IEP) is a plan developed to ensure that a child with a disability who is attending an elementary or secondary school receives:", options: ["Specialized instruction and related services", "A financial scholarship", "Home-schooling", "Exemption from all tests"], answer: 0, explanation: "An IEP is a legally mandated document in many countries that outlines the specific educational goals and services for a child with a disability." },
    
    // History, Outbreaks & Health Days (15)
    { topic: 'hist', question: "John Snow is considered one of the fathers of modern epidemiology for his work on which disease outbreak?", options: ["Plague in London", "Cholera in London", "Typhoid in New York", "Yellow Fever in Philadelphia"], answer: 1, explanation: "John Snow's investigation of the 1854 Broad Street cholera outbreak in London is a classic example of epidemiological investigation. He traced the source to a contaminated water pump." },
    { topic: 'hist', question: "The discovery of Penicillin by Alexander Fleming in 1928 revolutionized the treatment of:", options: ["Viral infections", "Fungal infections", "Bacterial infections", "Parasitic diseases"], answer: 2, explanation: "Penicillin was the first antibiotic, a class of drugs that are highly effective against bacterial infections, saving millions of lives." },
    { topic: 'hist', question: "The Alma-Ata Declaration of 1978 is famous for promoting:", options: ["Hospital-based care", "Universal health coverage through primary health care", "The development of new vaccines", "Disease eradication programs"], answer: 1, explanation: "The Alma-Ata Declaration identified primary health care as the key to the attainment of the goal of 'Health For All'." },
    { topic: 'hist', question: "World Health Day is celebrated on which date, commemorating the founding of the WHO?", options: ["December 1st", "October 10th", "April 7th", "March 24th"], answer: 2, explanation: "World Health Day is celebrated annually on April 7th to mark the anniversary of the founding of the World Health Organization (WHO) in 1948." },
    { topic: 'hist', question: "The causative agent of COVID-19 is:", options: ["An influenza virus", "A bacterium", "A coronavirus (SARS-CoV-2)", "A retrovirus"], answer: 2, explanation: "COVID-19 is an infectious disease caused by the Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2)." },
    { topic: 'hist', question: "The 2014-2016 Ebola outbreak was the largest in history and primarily affected which region?", options: ["East Africa", "Southern Africa", "Central Africa", "West Africa"], answer: 3, explanation: "The 2014–2016 outbreak in West Africa was the largest and most complex Ebola outbreak since the virus was first discovered in 1976, primarily affecting Guinea, Liberia, and Sierra Leone." },
    { topic: 'hist', question: "Which of the following is a key public health measure for controlling the spread of Ebola?", options: ["Mass vaccination", "Safe and dignified burials, contact tracing, and isolation", "Antibiotic treatment", "Mosquito control"], answer: 1, explanation: "Ebola is spread through direct contact with the bodily fluids of an infected person. Therefore, key control measures include isolating cases, tracing and monitoring their contacts, and ensuring safe burial practices to prevent transmission." },
    { topic: 'hist', question: "World AIDS Day is observed on which date to raise awareness of the AIDS pandemic?", options: ["July 28th", "September 10th", "November 14th", "December 1st"], answer: 3, explanation: "World AIDS Day, designated on 1 December every year since 1988, is an international day dedicated to raising awareness of the AIDS pandemic caused by the spread of HIV infection and mourning those who have died of the disease." },
    { topic: 'hist', question: "The 'Sanitary Movement' in the 19th century, led by figures like Edwin Chadwick, focused on improving health through:", options: ["Better nutrition", "Development of antibiotics", "Improvements in housing, water supply, and sewage disposal", "Vaccination campaigns"], answer: 2, explanation: "The Sanitary Movement was a period of public health reform that focused on the idea that disease was caused by 'miasma' or bad air from filth. This led to major infrastructure projects to improve sanitation." },
    { topic: 'hist', question: "What is the theme of World Health Day 2024?", options: ["My Health, My Right", "Building a fairer, healthier world", "Support nurses and midwives", "Universal Health Coverage"], answer: 0, explanation: "The theme for World Health Day 2024 was 'My Health, My Right'. Themes are often set to highlight a current global health priority." },
    { topic: 'hist', question: "Lassa fever is a viral hemorrhagic fever that is endemic to which region?", options: ["Southeast Asia", "South America", "West Africa", "Eastern Europe"], answer: 2, explanation: "Lassa fever is endemic in several West African countries, including Nigeria, Sierra Leone, Liberia, and Guinea. It is transmitted by the Mastomys rat." },
    { topic: 'hist', question: "The global eradication of which disease is considered one of public health's greatest achievements?", options: ["Polio", "Measles", "Smallpox", "Tuberculosis"], answer: 2, explanation: "Smallpox was officially declared eradicated in 1980 after a massive global effort led by the WHO, making it the only human disease to be completely eradicated." },
    { topic: 'hist', question: "World Malaria Day is observed annually on:", options: ["April 25th", "May 31st", "June 14th", "August 19th"], answer: 0, explanation: "World Malaria Day, which takes place on 25 April each year, is an internationally recognized day, highlighting the global efforts to control malaria and celebrating the gains that have been made." },
    { topic: 'hist', question: "The International Health Regulations (IHR) are a legally binding instrument of international law designed to:", options: ["Set drug prices", "Regulate medical education", "Prevent and respond to acute international public health risks", "Fund hospitals in developing countries"], answer: 2, explanation: "The IHR (2005) is an agreement between 196 countries to work together for global health security. It requires countries to report certain disease outbreaks and public health events to WHO." },
    { topic: 'hist', question: "The causative agent of Mpox (formerly Monkeypox) is a:", options: ["Paramyxovirus", "Filovirus", "Orthopoxvirus", "Flavivirus"], answer: 2, explanation: "Mpox is caused by the monkeypox virus, a member of the Orthopoxvirus genus in the family Poxviridae, the same family as the smallpox virus." },

    // Primary Health Care (15)
    { topic: 'phc', question: "The Alma-Ata Declaration of 1978 defined PHC as the key to achieving what goal?", options: ["Universal Health Coverage", "Health for All by the year 2000", "The Millennium Development Goals", "Eradication of infectious diseases"], answer: 1, explanation: "The Alma-Ata Declaration identified primary health care as the key to the attainment of the goal of 'Health For All by the year 2000'." },
    { topic: 'phc', question: "Which of the following is NOT one of the core principles of PHC?", options: ["Equity", "Community Participation", "Hospital-centered care", "Inter-sectoral Collaboration"], answer: 2, explanation: "PHC is community-based and is the first level of contact, not centered on large hospitals." },
    { topic: 'phc', question: "What does 'appropriate technology' in the context of PHC mean?", options: ["Using the most advanced medical equipment available", "Using technology that is scientifically sound, adaptable to local needs, and affordable", "Relying solely on traditional medicine", "Importing all medical technology from developed countries"], answer: 1, explanation: "Appropriate technology in PHC emphasizes solutions that are effective, affordable, and acceptable within the community context, like Oral Rehydration Salts (ORS)." },
    { topic: 'phc', question: "Which of the following is a key component of the 'E' in the mnemonic for PHC components (ELEMENTS)?", options: ["Emergency Services", "Education concerning prevailing health problems", "Economic Support", "Environmental Engineering"], answer: 1, explanation: "The 'E' stands for Education concerning prevailing health problems and the methods of preventing and controlling them." },
    { topic: 'phc', question: "The 'Ward Health System' in Nigeria is a strategy to:", options: ["Build a new tertiary hospital in every ward", "Decentralize PHC management and service delivery to the ward level", "Privatize all health facilities at the ward level", "Focus only on maternal health at the ward level"], answer: 1, explanation: "The Ward Health System is a key strategy for implementing PHC in Nigeria, aiming to bring management and services closer to the community." },
    { topic: 'phc', question: "Which of these services represents the 'P' in the 'ELEMENTS' of PHC?", options: ["Palliative Care", "Provision of essential drugs", "Pediatric Surgery", "Psychiatric Services"], answer: 1, explanation: "The 'P' stands for the Provision of essential drugs and supplies." },
    { topic: 'phc', question: "Inter-sectoral collaboration in PHC involves the health sector working with which other sector?", options: ["Only other hospitals", "Only international donors", "Sectors like Education, Agriculture, and Water Resources", "Only the private sector"], answer: 2, explanation: "Inter-sectoral collaboration is a core principle of PHC, recognizing that health is influenced by factors outside the immediate health sector." },
    { topic: 'phc', question: "The Midwives Service Scheme (MSS) in Nigeria was primarily designed to:", options: ["Train more surgeons", "Increase the number of skilled birth attendants in rural communities", "Provide free ambulances", "Build new maternity wards in cities"], answer: 1, explanation: "The MSS was a federal government initiative to address the shortage of skilled health workers in rural areas to reduce maternal and child mortality." },
    { topic: 'phc', question: "What is the foundational role of PHC in achieving Universal Health Coverage (UHC)?", options: ["It provides only the most expensive and specialized care", "It acts as the first point of contact and provides essential, affordable, and accessible care to all", "It focuses only on urban populations", "It is completely separate from the goal of UHC"], answer: 1, explanation: "PHC is the cornerstone of UHC, ensuring that everyone can access the essential health services they need without financial hardship." },
    { topic: 'phc', question: "The 'three ones' principle for PHC under one roof refers to:", options: ["One doctor, one nurse, one pharmacist", "One management body, one plan, one monitoring system", "One building, one vehicle, one budget", "One patient, one disease, one treatment"], answer: 1, explanation: "The 'three ones' principle aims to reduce fragmentation by having one management body, one integrated plan, and one monitoring and evaluation system for all PHC services in a given area." },
    { topic: 'phc', question: "Which of the following is an example of a rehabilitative service within PHC?", options: ["Vaccination", "Health education on diet", "Physiotherapy for a child with disability", "Surgical intervention"], answer: 2, explanation: "Rehabilitation is a key function of comprehensive PHC, aiming to improve functioning and quality of life for people with health conditions." },
    { topic: 'phc', question: "A Village Health Worker (VHW) is an example of which PHC principle in action?", options: ["Appropriate Technology", "Medical Specialization", "Community Participation", "Centralized Planning"], answer: 2, explanation: "VHWs are members of the community who are trained to provide basic health services, representing a key strategy for community participation and extending the reach of the health system." },
    { topic: 'phc', question: "The 'L' in the 'ELEMENTS' of PHC stands for:", options: ["Legislation", "Laboratory services", "Locally endemic disease prevention and control", "Lifestyle modification"], answer: 2, explanation: "The 'L' stands for Locally endemic disease prevention and control." },
    { topic: 'phc', question: "What is the primary focus of the 'promotive' aspect of PHC?", options: ["Treating existing illnesses", "Performing surgery", "Enhancing well-being and encouraging healthy lifestyles", "Diagnosing rare diseases"], answer: 2, explanation: "The promotive aspect of PHC focuses on activities that maintain and enhance health, such as health education and advocacy for healthy environments." },
    { topic: 'phc', question: "The shift from a purely biomedical model to a biopsychosocial model is central to the philosophy of:", options: ["Tertiary care", "Emergency medicine", "Primary Health Care", "Surgical specialties"], answer: 2, explanation: "PHC embodies the biopsychosocial model by considering the whole person, including their social, economic, and environmental context, not just their physical disease." },

    // Research Methodology & Statistics (15)
    { topic: 'res', question: "In research, what is the primary purpose of a literature review?", options: ["To make the document longer", "To identify what is already known about a topic and to situate your research within that context", "To list as many books as possible", "To prove that no other research is needed"], answer: 1, explanation: "A literature review surveys scholarly sources to establish the current state of knowledge, identify gaps, and provide a theoretical framework for the research." },
    { topic: 'res', question: "Which sampling method gives every member of the population an equal and known chance of being selected?", options: ["Convenience sampling", "Quota sampling", "Simple random sampling", "Purposive sampling"], answer: 2, explanation: "Simple random sampling is the cornerstone of probability sampling, ensuring that every individual in the population has an equal chance of being included, which minimizes selection bias." },
    { topic: 'res', question: "What is the primary difference between qualitative and quantitative research?", options: ["Qualitative research is always better", "Quantitative research uses numbers and statistical analysis, while qualitative research uses non-numerical data like text and observations", "Quantitative research is only done in a lab", "Qualitative research does not require ethical approval"], answer: 1, explanation: "The fundamental distinction lies in the type of data collected and analyzed. Quantitative research focuses on numerical data to test hypotheses, while qualitative research explores ideas and experiences in depth through non-numerical data." },
    { topic: 'res', question: "The 'null hypothesis' (H0) in a study typically states that:", options: ["The intervention will be very effective", "There is no difference or relationship between the groups or variables being studied", "The study has flaws", "The alternative hypothesis is true"], answer: 1, explanation: "The null hypothesis is the default position that there is no effect or no relationship. Statistical tests are performed to determine if there is enough evidence to reject this null hypothesis." },
    { topic: 'res', question: "A study that collects data from a group of individuals at a single point in time is called a:", options: ["Cohort study", "Cross-sectional study", "Case-control study", "Randomized controlled trial"], answer: 1, explanation: "A cross-sectional study provides a 'snapshot' of a population at one specific time, making it useful for measuring prevalence." },
    { topic: 'res', question: "In a study, 'informed consent' means that participants:", options: ["Are paid for their time", "Have been fully informed about the research and have voluntarily agreed to participate", "Are friends with the researcher", "Will definitely benefit from the study"], answer: 1, explanation: "Informed consent is a fundamental ethical principle requiring that participants understand the purpose, procedures, risks, and benefits of the research before agreeing to take part." },
    { topic: 'res', question: "Which of the following is a non-parametric equivalent to the independent samples t-test?", options: ["ANOVA", "Pearson correlation", "Mann-Whitney U test", "Paired t-test"], answer: 2, explanation: "The Mann-Whitney U test (or Wilcoxon rank-sum test) is used to compare two independent groups when the data is not normally distributed." },
    { topic: 'res', question: "The process of using multiple sources of data or methods to verify and validate findings is known as:", options: ["Randomization", "Standardization", "Triangulation", "Generalization"], answer: 2, explanation: "Triangulation is a key strategy in qualitative research to enhance the credibility and trustworthiness of the findings." },
    { topic: 'res', question: "What is the 'design effect' in cluster sampling?", options: ["The effect of the study's graphic design", "A measure of the loss of statistical efficiency due to cluster sampling compared to simple random sampling", "The effect of the researcher's bias", "The outcome of the study"], answer: 1, explanation: "The design effect quantifies how much larger the variance is in cluster sampling compared to simple random sampling. A design effect greater than 1 indicates a loss of efficiency, which needs to be accounted for in sample size calculations." },
    { topic: 'res', question: "The 'P' in the PICO framework for formulating research questions stands for:", options: ["Protocol", "Probability", "Patient, Population, or Problem", "Purpose"], answer: 2, explanation: "PICO is a mnemonic used to frame clinical or research questions: P (Patient/Population), I (Intervention), C (Comparison), and O (Outcome)." },
    { topic: 'res', question: "Which of the following is a key characteristic of a longitudinal study?", options: ["Data is collected only once", "It is always experimental", "Data is collected from the same subjects repeatedly over a period of time", "It is always inexpensive and quick"], answer: 2, explanation: "The defining feature of a longitudinal study is the repeated observation of the same variables over time, allowing researchers to study change and development." },
    { topic: 'res', question: "A 'systematic review' is a type of literature review that:", options: ["Is done unsystematically", "Uses explicit and systematic methods to identify, select, and critically appraise relevant research", "Only includes studies from one country", "Is written by a single author"], answer: 1, explanation: "A systematic review aims to provide a comprehensive and unbiased summary of the available evidence on a specific topic by using a rigorous and transparent methodology." },
    { topic: 'res', question: "The ethical principle of 'beneficence' in research means:", options: ["The research must be beneficial to the researcher", "The research should maximize possible benefits and minimize possible harms to participants", "Participants must be paid for their time", "The research must be published"], answer: 1, explanation: "Beneficence is a core ethical principle that requires researchers to ensure the well-being of participants by maximizing benefits and minimizing risks." },
    { topic: 'res', question: "Which of the following is a method for qualitative data collection?", options: ["Randomized controlled trial", "Focus group discussion", "Statistical survey", "Meta-analysis"], answer: 1, explanation: "Focus group discussions are a common qualitative method used to gather in-depth opinions and perspectives from a group of people on a specific topic." },
    { topic: 'res', question: "The process of assigning a numerical value to a variable is called:", options: ["Analysis", "Measurement", "Hypothesis", "Conclusion"], answer: 1, explanation: "Measurement is the process of assigning numbers or labels to objects, events, or observations according to a set of rules." },

    // Health Financing & Management (15)
    { topic: 'fin', question: "Which of the following is a primary function of health care financing?", options: ["Building hospitals", "Training doctors", "Revenue collection, pooling of funds, and purchasing of services", "Marketing health services"], answer: 2, explanation: "Health financing involves three core functions: collecting revenue from sources, pooling these funds to share risk, and purchasing services from providers." },
    { topic: 'fin', question: "Out-of-pocket payment for health services is considered:", options: ["The most equitable financing method", "A form of risk pooling", "A major barrier to accessing care and can lead to catastrophic health expenditure", "The most efficient financing method"], answer: 2, explanation: "High out-of-pocket payments are inequitable and can prevent people from seeking care or push them into poverty when they do." },
    { topic: 'fin', question: "The National Health Insurance Scheme (NHIS), now NHIA, in Nigeria is an example of which type of funding mechanism?", options: ["User fees", "Community financing", "Social health insurance", "Medical savings accounts"], answer: 2, explanation: "Social health insurance is a system where contributions are pooled to cover the health costs of members, as is the model for the NHIA." },
    { topic: 'fin', question: "In health economics, 'cost-benefit analysis' (CBA) measures both costs and outcomes in:", options: ["Natural units (e.g., lives saved)", "Monetary units", "Quality-Adjusted Life Years (QALYs)", "Disability-Adjusted Life Years (DALYs)"], answer: 1, explanation: "CBA is unique in that it values both the costs and the health benefits in monetary terms to determine if a program's benefits outweigh its costs." },
    { topic: 'fin', question: "A 'capitation' payment system is one where a provider is paid:", options: ["Per service rendered", "A fixed amount per person enrolled for a set period, regardless of services used", "A salary based on hours worked", "Based on the severity of the illness"], answer: 1, explanation: "Capitation is a common payment method in health insurance where providers receive a fixed fee per enrolled person, encouraging efficiency and preventive care." },
    { topic: 'fin', question: "The 'Abuja Declaration' of 2001 was a pledge by African Union countries to allocate what percentage of their government budgets to health?", options: ["5%", "10%", "15%", "20%"], answer: 2, explanation: "The Abuja Declaration was a landmark commitment by African heads of state to increase health sector funding to at least 15% of their national budgets." },
    { topic: 'fin', question: "What is 'catastrophic health expenditure'?", options: ["Any health spending by a household", "Health spending that is covered by insurance", "Health spending that exceeds a certain threshold of a household's income or ability to pay", "Government spending on disaster response"], answer: 2, explanation: "It is defined as health expenditure that threatens a household's capacity to meet its basic needs, often set at a threshold like 10% or 25% of total income." },
    { topic: 'fin', question: "Which of the following is a 'demand-side' financing mechanism?", options: ["Building and equipping a hospital", "Providing conditional cash transfers to pregnant women to attend ANC", "Paying salaries to doctors", "Procuring drugs for a health facility"], answer: 1, explanation: "Demand-side financing empowers consumers (patients) to purchase services, such as through vouchers or cash transfers, as opposed to supply-side financing which funds the providers directly." },
    { topic: 'fin', question: "The 'Donabedian model' for assessing quality of care consists of which three components?", options: ["Cost, Access, Equity", "Structure, Process, Outcome", "Inputs, Activities, Outputs", "Prevention, Treatment, Rehabilitation"], answer: 1, explanation: "The Donabedian model is a classic framework for quality assessment, evaluating the context in which care is delivered (Structure), the actual procedures of care (Process), and the effects of care on health status (Outcome)." },
    { topic: 'fin', question: "In management, the 'P' in POSDCORB stands for:", options: ["Purchasing", "Planning", "Personnel", "Policy"], answer: 1, explanation: "POSDCORB is an acronym for the classic functions of management: Planning, Organizing, Staffing, Directing, Coordinating, Reporting, and Budgeting." },
    { topic: 'fin', question: "What is the primary advantage of 'risk pooling' in health insurance?", options: ["It ensures only healthy people get insurance", "It spreads the financial risk of illness across a large number of people", "It makes healthcare more expensive", "It eliminates the need for hospitals"], answer: 1, explanation: "By pooling the contributions of many people, insurance schemes can cover the high costs of the few who fall ill, making healthcare more affordable and accessible for everyone in the pool." },
    { topic: 'fin', question: "A 'cost-effectiveness analysis' (CEA) compares interventions by measuring their costs against their outcomes in:", options: ["Monetary units", "Natural health units (e.g., cases averted, life years gained)", "Political feasibility", "Patient satisfaction scores"], answer: 1, explanation: "CEA is used to compare the relative costs and outcomes of different courses of action, helping policymakers choose the most efficient option to achieve a specific health goal." },
    { topic: 'fin', question: "Which of the following is a key feature of a 'devolved' health system?", options: ["All decisions are made by the central government", "Authority and resources are transferred to lower levels of government, such as states or LGAs", "The health system is run by a single, national hospital", "There is no government involvement in health"], answer: 1, explanation: "Devolution is a form of decentralization where political, administrative, and financial authority for specific functions are transferred to sub-national units of government." },
    { topic: 'fin', question: "The 'Basic Health Care Provision Fund' (BHCPF) in Nigeria is designed to:", options: ["Fund overseas medical trips for government officials", "Provide funding for tertiary hospitals only", "Improve funding for primary health care and provide a basic minimum package of health services", "Pay for private health insurance for all citizens"], answer: 2, explanation: "The BHCPF is a key component of the National Health Act, designed to disburse funds from the federal government directly to PHCs to improve service delivery and financial access at the grassroots level." },
    { topic: 'fin', question: "An 'autocratic' leadership style is characterized by:", options: ["Shared decision-making", "Downward communication and centralized control", "Delegating all responsibility to subordinates", "A focus on team building"], answer: 1, explanation: "In an autocratic leadership style, the leader makes decisions with little or no input from the rest of the team, and communication flows from the top down." },

    // Public Health Microbiology (15)
    { topic: 'micro', question: "Which of the following is a key role of a public health laboratory?", options: ["Providing routine clinical care to individual patients", "Disease surveillance, outbreak investigation, and reference testing", "Manufacturing pharmaceuticals", "Selling medical equipment"], answer: 1, explanation: "Public health laboratories are crucial for monitoring population health, identifying disease trends, confirming diagnoses during outbreaks, and providing specialized testing." },
    { topic: 'micro', question: "The Gram stain is a differential staining technique used to classify bacteria based on their:", options: ["Size", "Shape", "Cell wall structure", "Motility"], answer: 2, explanation: "The Gram stain differentiates bacteria into two main groups (Gram-positive and Gram-negative) based on the physical and chemical properties of their cell walls, specifically the amount of peptidoglycan." },
    { topic: 'micro', question: "Which of the following is an example of a vector-borne disease?", options: ["Influenza", "Tuberculosis", "Malaria", "Cholera"], answer: 2, explanation: "Malaria is a classic vector-borne disease, transmitted to humans through the bite of an infected Anopheles mosquito." },
    { topic: 'micro', question: "The Ziehl-Neelsen stain is used to identify which group of bacteria?", options: ["Spirochetes", "Gram-negative cocci", "Acid-fast bacilli", "Gram-positive bacilli"], answer: 2, explanation: "The Ziehl-Neelsen stain is used to detect acid-fast organisms, primarily Mycobacterium tuberculosis, which have a waxy mycolic acid layer in their cell walls that resists decolorization by acid." },
    { topic: 'micro', question: "Which of the following is a microbe of public health importance transmitted via the fecal-oral route?", options: ["Influenza virus", "Vibrio cholerae", "Plasmodium falciparum", "Mycobacterium tuberculosis"], answer: 1, explanation: "Vibrio cholerae, the bacterium that causes cholera, is typically transmitted through the ingestion of contaminated food or water." },
    { topic: 'micro', question: "The 'chain of infection' includes all of the following components EXCEPT:", options: ["Infectious agent", "Reservoir", "Mode of transmission", "Antibiotic treatment"], answer: 3, explanation: "The chain of infection describes how a pathogen moves from a reservoir to a susceptible host. Antibiotic treatment is an intervention to break the chain, not a component of it." },
    { topic: 'micro', question: "A 'zoonotic' disease is one that:", options: ["Only affects animals", "Is transmitted from vertebrate animals to humans", "Is only found in zoos", "Is caused by protozoa"], answer: 1, explanation: "A zoonosis is an infectious disease that has jumped from a non-human animal to humans. Examples include rabies, Lassa fever, and Ebola." },
    { topic: 'micro', question: "The polymerase chain reaction (PCR) is a laboratory technique used to:", options: ["Grow bacteria on a culture plate", "Visualize viruses with a microscope", "Amplify small amounts of DNA for detection and analysis", "Measure antibody levels in blood"], answer: 2, explanation: "PCR is a powerful molecular biology tool that allows for the rapid amplification of specific DNA sequences, making it highly sensitive for detecting infectious agents." },
    { topic: 'micro', question: "Which of the following is an example of a fungal infection of public health importance?", options: ["Malaria", "Tuberculosis", "Candidiasis", "Influenza"], answer: 2, explanation: "Candidiasis, caused by Candida species, is a common fungal infection that can range from superficial infections to life-threatening systemic disease, particularly in immunocompromised individuals." },
    { topic: 'micro', question: "The principle of 'One Health' recognizes the interconnectedness of the health of:", options: ["Doctors, nurses, and pharmacists", "Humans, animals, and the environment", "Children and adults", "Hospitals and clinics"], answer: 1, explanation: "One Health is a collaborative, multisectoral, and transdisciplinary approach—working at the local, regional, national, and global levels—with the goal of achieving optimal health outcomes recognizing the interconnection between people, animals, plants, and their shared environment." },
    { topic: 'micro', question: "Which of these is a non-residual insecticide, often derived from chrysanthemum flowers?", options: ["DDT", "Malathion", "Pyrethrum", "Dieldrin"], answer: 2, explanation: "Pyrethrum is a natural insecticide that breaks down quickly in sunlight and air, meaning it has little to no residual effect, unlike organochlorines like DDT." },
    { topic: 'micro', question: "The Thayer-Martin medium is a selective agar used for the isolation of:", options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Neisseria gonorrhoeae", "Escherichia coli"], answer: 2, explanation: "Thayer-Martin agar is a specialized medium containing antibiotics that inhibit the growth of other bacteria and fungi, allowing for the selective isolation of Neisseria species." },
    { topic: 'micro', question: "Which of the following is a propagative mode of transmission in a vector?", options: ["The agent undergoes cyclical changes but does not multiply", "The agent multiplies within the vector without any cyclical change", "The agent undergoes both cyclical changes and multiplication", "The agent is carried mechanically on the vector's body"], answer: 1, explanation: "In propagative transmission, the infectious agent multiplies within the vector's body, increasing in number before being transmitted. A classic example is the plague bacillus in fleas." },
    { topic: 'micro', question: "The infective stage of Ascaris lumbricoides for humans is the:", options: ["Adult worm", "Filariform larva", "Embryonated egg", "Cyst"], answer: 2, explanation: "Humans become infected with Ascaris lumbricoides by ingesting food or water contaminated with embryonated eggs containing the infective larva." },
    { topic: 'micro', question: "Which of the following is a key virulence factor that helps bacteria adhere to host cells?", options: ["Flagella", "Endotoxins", "Pili (Fimbriae)", "Spores"], answer: 2, explanation: "Pili are hair-like appendages on the surface of many bacteria that play a crucial role in adherence to host tissues, a critical first step in establishing an infection." }
];

const TOPIC_NAMES = {
    any: 'Any Topic',
    epi: 'Epidemiology',
    bio: 'Biostatistics',
    env: 'Environmental Health',
    occ: 'Occupational Health',
    fam: 'Reproductive & Family Health',
    mgt: 'Health Policy & Management',
    nut: 'Nutrition',
    promo: 'Health Promotion',
    inf: 'Infectious Diseases',
    par: 'Parasitology',
    ncd: 'Non-Communicable Diseases',
    demog: 'Demography & Population',
    socio: 'Medical Sociology',
    rehab: 'Rehabilitative & Social Medicine',
    hist: 'History, Outbreaks & Health Days',
    phc: 'Primary Health Care',
    res: 'Research Methodology & Statistics',
    fin: 'Health Financing & Management',
    micro: 'Public Health Microbiology'
};

const EXAM_QUESTIONS_COUNT = 200;
const EXAM_TIME_LIMIT = 180; // 180 minutes for exam

// --- APPLICATION STATE ---
let state = {};

// --- DOM ELEMENTS ---
const pages = {
    modeSelect: document.getElementById('pageModeSelect'),
    quiz: document.getElementById('pageQuiz'),
    feedback: document.getElementById('pageFeedback'),
    complete: document.getElementById('pageComplete'),
};

const scoreDisplay = document.getElementById('scoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const progressBar = document.getElementById('progressBar');
const topicSelect = document.getElementById('topic');
const numQuestionsInput = document.getElementById('numQuestions');
const timeLimitInput = document.getElementById('timeLimit');
const startPracticeBtn = document.getElementById('startPracticeBtn');
const startExamBtn = document.getElementById('startExamBtn');
const prevQuestionBtn = document.getElementById('prevQuestionBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const prevFeedbackBtn = document.getElementById('prevFeedbackBtn');
const nextFeedbackBtn = document.getElementById('nextFeedbackBtn');
const mainMenuBtnQuiz = document.getElementById('mainMenuBtnQuiz');
const mainMenuBtnFeedback = document.getElementById('mainMenuBtnFeedback');
const showPracticeOptionsBtn = document.getElementById('showPracticeOptionsBtn');
const practiceOptionsContainer = document.getElementById('practiceOptionsContainer');
const mainMenuBtnFromPractice = document.getElementById('mainMenuBtnFromPractice');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const analyticsContainer = document.getElementById('analyticsContainer');

// --- FUNCTIONS ---

function shuffle(array) {
    return [...array].sort(() => 0.5 - Math.random());
}

function navigateTo(pageName) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[pageName].classList.add('active');
}

function initialize() {
    // Populate topic dropdown
    const topics = [...new Set(questions.map(q => q.topic))];
    topicSelect.innerHTML = `<option value="any">Any Topic</option>`;
    topics.sort().forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = TOPIC_NAMES[topic] || topic;
        topicSelect.appendChild(option);
    });
    
    // Event listeners
    showPracticeOptionsBtn.onclick = () => {
        practiceOptionsContainer.style.display = 'block';
        showPracticeOptionsBtn.style.display = 'none';
        startExamBtn.style.display = 'none';
    };

    mainMenuBtnFromPractice.onclick = () => {
        practiceOptionsContainer.style.display = 'none';
        showPracticeOptionsBtn.style.display = 'block';
        startExamBtn.style.display = 'block';
    };

    startPracticeBtn.onclick = () => startQuiz('practice');
    startExamBtn.onclick = () => startQuiz('exam');
    prevQuestionBtn.onclick = prevQuestion;
    nextQuestionBtn.onclick = nextQuestion;
    prevFeedbackBtn.onclick = prevFeedback;
    nextFeedbackBtn.onclick = nextFeedback;
    mainMenuBtnQuiz.onclick = returnToMenu;
    mainMenuBtnFeedback.onclick = returnToMenu;
    imageModal.onclick = () => imageModal.classList.remove('active');
    
    navigateTo('modeSelect'); 
}

function startQuiz(mode) {
    state.mode = mode;
    state.currentStep = 0;
    state.userAnswers = [];
    state.score = 0;

    let questionPool = [];
    let questionCount;
    let timeLimit;

    if (mode === 'practice') {
        const selectedTopic = topicSelect.value;
        state.selectedTopic = selectedTopic;
        questionPool = selectedTopic === 'any' 
            ? questions 
            : questions.filter(q => q.topic === selectedTopic);
        questionCount = parseInt(numQuestionsInput.value, 10);
        timeLimit = parseInt(timeLimitInput.value, 10) * 60;
    } else if (mode === 'exam') {
        questionPool = questions;
        questionCount = EXAM_QUESTIONS_COUNT;
        timeLimit = EXAM_TIME_LIMIT * 60;
    } 
    
    state.currentBatch = shuffle(questionPool).slice(0, questionCount);
    
    if (state.currentBatch.length < questionCount) {
        console.warn(`Warning: Only ${state.currentBatch.length} questions are available for this selection.`);
    }
    if (state.currentBatch.length === 0) {
        console.warn('No questions available for this mode.');
        return;
    }
    
    state.userAnswers = Array(state.currentBatch.length).fill(undefined);

    state.timeRemaining = timeLimit;
    startTimer(timeLimit);

    scoreDisplay.style.display = 'none';
    progressBar.style.width = '0%';
    navigateTo('quiz');
    renderQuestion();
}

function renderQuestion() {
    // Update progress bar
    const progress = ((state.currentStep + 1) / state.currentBatch.length) * 100;
    progressBar.style.width = `${progress}%`;

    const q = state.currentBatch[state.currentStep];
    const header = document.getElementById('quizHeader');
    
    let modeName = "Practice Mode";
    if (state.mode === 'exam') modeName = "Exam Mode";

    header.textContent = `${modeName} - Question ${state.currentStep + 1} of ${state.currentBatch.length}`;
    
    document.getElementById('questionText').textContent = q.question;
    const qImage = document.getElementById('questionImage');
    if (q.image) {
        qImage.src = q.image;
        qImage.style.display = 'block';
        qImage.onclick = () => showImageModal(q.image);
    } else {
        qImage.style.display = 'none';
    }

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    const previouslySelected = state.userAnswers[state.currentStep];

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = opt;
        btn.className = 'option-btn';
        if (previouslySelected === i) {
             btn.classList.add('selected');
        }
        btn.onclick = () => selectAnswer(i);
        optionsContainer.appendChild(btn);
    });
    
    // Update button states
    prevQuestionBtn.disabled = state.currentStep === 0;
    nextQuestionBtn.textContent = (state.currentStep === state.currentBatch.length - 1) ? 'Submit' : 'Next';
}

function selectAnswer(answerIndex) {
    state.userAnswers[state.currentStep] = answerIndex;
    renderQuestion();
}

function prevQuestion() {
    if (state.currentStep > 0) {
        state.currentStep--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (state.currentStep < state.currentBatch.length - 1) {
        state.currentStep++;
        renderQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    stopTimer();
    state.feedbackStep = 0;
    calculateScore();
    updateScoreDisplay();
    navigateTo('feedback');
    renderFeedbackQuestion();
}

function calculateScore() {
    state.score = state.userAnswers.reduce((acc, userAnswer, i) => {
        if (userAnswer === state.currentBatch[i].answer) {
            return acc + 1;
        }
        return acc;
    }, 0);
}


function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${state.score} / ${state.currentBatch.length}`;
    scoreDisplay.style.display = 'block';
}

function renderFeedbackQuestion() {
    const q = state.currentBatch[state.feedbackStep];
    const userAnswer = state.userAnswers[state.feedbackStep];
    const correctAnswer = q.answer;

    document.getElementById('feedbackHeader').textContent = `Reviewing Question ${state.feedbackStep + 1} of ${state.currentBatch.length}`;
    document.getElementById('feedbackQuestionText').textContent = q.question;
    
    const fImage = document.getElementById('feedbackImage');
    if (q.image) {
        fImage.src = q.image;
        fImage.style.display = 'block';
        fImage.onclick = () => showImageModal(q.image);
    } else {
        fImage.style.display = 'none';
    }

    const feedbackOptionsContainer = document.getElementById('feedbackOptionsContainer');
    feedbackOptionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = opt;
        btn.className = 'option-btn';
        btn.disabled = true;
        
        if (i === correctAnswer) {
            btn.classList.add('correct');
        }
        if (userAnswer !== undefined && i === userAnswer && userAnswer !== correctAnswer) {
            btn.classList.add('wrong');
        }
        feedbackOptionsContainer.appendChild(btn);
    });

    document.getElementById('feedbackExplanation').textContent = q.explanation;
    prevFeedbackBtn.disabled = state.feedbackStep === 0;
}

function nextFeedback() {
    if (state.feedbackStep < state.currentBatch.length - 1) {
        state.feedbackStep++;
        renderFeedbackQuestion();
    } else {
        navigateTo('complete');
        renderCompletionPage();
    }
}

function prevFeedback() {
    if (state.feedbackStep > 0) {
        state.feedbackStep--;
        renderFeedbackQuestion();
    }
}


function calculateAnalytics() {
    const topicStats = {};

    state.currentBatch.forEach((question, index) => {
        const topic = question.topic;
        if (!topicStats[topic]) {
            topicStats[topic] = { correct: 0, total: 0 };
        }
        topicStats[topic].total++;
        if (state.userAnswers[index] === question.answer) {
            topicStats[topic].correct++;
        }
    });

    return topicStats;
}

function renderCompletionPage() {
    const title = document.getElementById('completionTitle');
    const message = document.getElementById('completionMessage');
    const actions = document.getElementById('completionActions');
    analyticsContainer.innerHTML = ''; // Clear previous analytics

    const scorePercentage = state.currentBatch.length > 0 ? (state.score / state.currentBatch.length) * 100 : 0;
    message.textContent = `You scored ${state.score} out of ${state.currentBatch.length} (${scorePercentage.toFixed(0)}%).`;

    if (state.mode === 'practice') {
        title.textContent = 'Practice Complete!';
        const retryBtn = document.createElement('button');
        retryBtn.textContent = 'Practice Same Topic Again';
        retryBtn.className = 'button';
        retryBtn.onclick = () => startQuiz('practice');
        actions.innerHTML = '';
        actions.appendChild(retryBtn);

    } else if (state.mode === 'exam') {
        title.textContent = 'Exam Finished!';
        const retryExamBtn = document.createElement('button');
        retryExamBtn.textContent = 'Retry Exam';
        retryExamBtn.className = 'button';
        retryExamBtn.onclick = () => startQuiz('exam');
        actions.innerHTML = '';
        actions.appendChild(retryExamBtn);
    } 
    
    const pickAnotherBtn = document.createElement('button');
    pickAnotherBtn.textContent = 'Go to Main Menu';
    pickAnotherBtn.className = 'button secondary';
    pickAnotherBtn.onclick = returnToMenu;
    actions.appendChild(pickAnotherBtn);

    // Render Analytics
    const analytics = calculateAnalytics();
    const strongAreas = [];
    const weakAreas = [];

    let analyticsHTML = '<h3>Performance Analysis</h3><div class="topic-performance"><ul>';

    for (const topic in analytics) {
        const stats = analytics[topic];
        const percentage = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
        analyticsHTML += `<li><span>${TOPIC_NAMES[topic] || topic}:</span> <span>${stats.correct} / ${stats.total} (${percentage.toFixed(0)}%)</span></li>`;
        
        if (percentage >= 70) {
            strongAreas.push(TOPIC_NAMES[topic]);
        } else if (percentage < 60) {
            weakAreas.push(TOPIC_NAMES[topic]);
        }
    }
    analyticsHTML += '</ul></div>';

    if (strongAreas.length > 0) {
        analyticsHTML += `<h4>Strong Areas:</h4><p>${strongAreas.join(', ')}</p>`;
    }
    if (weakAreas.length > 0) {
        analyticsHTML += `<div class="recommendation"><h4>Areas for Improvement:</h4><p>Consider reviewing the following topics: ${weakAreas.join(', ')}.</p></div>`;
    }

    analyticsContainer.innerHTML = analyticsHTML;
}

function returnToMenu() {
    stopTimer();
    scoreDisplay.style.display = 'none';
    timerDisplay.style.display = 'none';
    navigateTo('modeSelect');
}

function showImageModal(src) {
    modalImage.src = src;
    imageModal.classList.add('active');
}

// --- TIMER FUNCTIONS ---
function startTimer(duration) {
    state.timeRemaining = duration;
    timerDisplay.style.display = 'block';
    updateTimerDisplay();
    
    state.timerId = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        if (state.timeRemaining <= 0) {
            endQuiz();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
    }
}

function updateTimerDisplay() {
    const totalSeconds = state.timeRemaining;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    timerDisplay.textContent = `Time: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// --- PWA Service Worker ---
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// --- INITIALIZE APP ---
document.addEventListener('DOMContentLoaded', () => {
    initialize();
    // registerServiceWorker(); // Uncomment when you have sw.js and manifest.json
});