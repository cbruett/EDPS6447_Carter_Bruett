var array_questions = [
	{
		statement: "Provide a histopathologic diagnosis based on the following image:",
		topic: "Odontogenic cysts",
		sub_topic: "Developmental cysts",
		answer_key: "option2",
		hint: "The patient presented with an asymptomatic radiolucency.",
		type: "multiplce_choice",
		labels: [
			"var answer = Radicular Cyst",
			"var answer = Dentigerous Cyst;",
			"var answer = Odontogenic Keratocyst;",
			"var answer = Orthokeratinized Odontogenic Cyst",
            ],
		image: { display: "true", source: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcasereports.bmj.com%2Fcontent%2F2014%2Fbcr-2014-205150&psig=AOvVaw3PjDEcwG_Gws1h9lGL_RES&ust=1591905519951000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODU66uE-OkCFQAAAAAdAAAAABAD" },
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
		video: { display: "false", source: "N/A" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
	{
		statement: "Which of the following has a uniform, six-to-eight cell layer thick strateified squamous epithelium with corrugated parakeratin and a hyperchromatic basal cell layer?",
		topic: "Odontogenic Cysts",
		sub_topic: "Developmental Cysts",
		answer_key: "option3",
		hint: "No hint is available",
		type: "multiple_choice",
		labels: [
			"var answer = Orthokeratinized Odontogenic Cyst",
			"var answer = Ameloblastoma;",
			"var answer = Odontogenic Keratocyst;",
			"var answer = Lateral Periodontal Cyst;",
		],
		video: { display: "false", source: "N/A" },
		help: ["I dont have any help for you."],
	},
	{
		statement: "Which of the following is not a malignant salivary gland tumor:",
		topic: "Salivary Gland Tumors",
		sub_topic: "Malignant vs Benign",
		answer_key: "option1",
		hint: "There are no available hints",
		type: "multiple_choice",
		labels: [
			"var answer = Pleomorphic Adenoma;",
			"var answer = Mucoepidermoid Carcinoma;",
			"var answer = Adenoid Cystic Carcinoma,
			"var answer = Acinic Cell Carcinoma",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"No help is availabe"],
	},
	];

var array_answers = [];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);
