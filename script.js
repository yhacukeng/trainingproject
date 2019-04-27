function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");
	function showSkills () {
		let skills = ["HTML", "Pug", "CSS", "Sass", "JS", "GIMP"];
		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			console.log("Здравствуйте");
		} else {
			console.log("Привет");
		}
	}

	function checkAge();

	function calcPow(num) {
		return num*num;
	}

	console.log(calcPow(4));
}

myFirstApp("Alex", 23);
