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
		statement: "Select the correct option amongst the examples listed below for defining a JavaScript object.",
		topic: "javascript",
		sub_topic: "object",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_objects.asp",
		type: "multiple_choice",
		labels: [
			"var answer = {value: 'I am the correct answer!'};",
			"var answer = {value = 'I am the correct answer!'};",
			"var answer = (value: 'I am the correct answer!');",
			"var answer = {value: 'I am the correct answer!'}",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"Text strings in values assigned to properties are denoted by quotes.",
			"Don't forget the semicolon at the end of the line.",
			"Declarations of properties typically rely on a colon symbol ':'.",
		],
	},
	{
		statement: "JavaScript variables can be declared using the let keyword - it will have block scope, and can only be accessed from inside the function.",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_let.asp",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "true", source: "https://www.youtube.com/embed/q8SHaDQdul0" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
];

var array_answers = [];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);
