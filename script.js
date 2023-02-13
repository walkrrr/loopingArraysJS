// Output Strings with a for…of Loop

var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

console.log(programmingLanguages);

for (var languages of programmingLanguages) {
  console.log(`I want to learn ${languages}!`);
}

// Created a Numbered List with forEach()

programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item.toUpperCase()}`);
});

// Filter Elements by a String

var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});
console.log(updatedLanguages);
