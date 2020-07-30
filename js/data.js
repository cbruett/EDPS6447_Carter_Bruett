var array_questions = [
	{
        statement: "A leukoplakia is a premalignant lesion and should always be biopsied",
        topic: "Cancer",
        answer_key: "option1",
        hint: "You don't need a hint!",
        help: "A leukoplakia is definitely a premalignant lesion...",
        type: "true_false",
        labels: ["True", "False", "N/A", "N/A"],
    },
    {
		statement: "A Dentigerous Cyst is most commonly found around an impacted 3rd molar",
		topic: "Odontogenic cysts",
		sub_topic: "Developmental cysts",
		answer_key: "option1",
		hint: "The patient presented with an asymptomatic radiolucency.",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
	{
		statement: "The radicular cyst often has microscopic findings of a fibrous cyst wall with a mixture of inflammatory cells, cholesterol clefts, hyaline bodies, and a non-keratinizing stratified squamous epithelium lining.",
		topic: "Odontogenic Cysts",
		sub_topic: "Reactive cysts",
		answer_key: "option1",
		hint: "No hint is available",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		content:{type: "video", display: "false", source: "N/A" },
		help: ["Are radicular cysts non-keratinizing cysts?"],
	},
	{
		statement: "The Odontogenic Keratocyst has a uniform, six-to-eight cell layer thick strateified squamous epithelium with corrugated parakeratin and a hyperchromatic basal cell layer?",
		topic: "Odontogenic Cysts",
		sub_topic: "Developmental Cysts",
		answer_key: "option1",
		hint: "No hint is available",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		content:{type: "video", display: "false", source: "N/A" },
		help: ["An OKC has a high recurrence rate. Think about why this might be."],
	},
	{
		statement: "The pleomorphic adenoma is not a malignant salivary gland tumor.",
		topic: "Salivary Gland Tumors",
		sub_topic: "Malignant vs Benign",
		answer_key: "option1",
		hint: "There are no available hints",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		content:{type: "video", display: "false", source: "N/A" },
		help: [
			"No help is availabe"],
	},
	];

var array_answers = [];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);
