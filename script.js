if (document.querySelector("head > title").innerHTML === "La NSI En 1ère") {
	alert("Bonjour cher visiteur, ce site a été crée par Sasha Guérin-Loison à l'occasion d'un projet pour les vacances de février.");
	alert("!!! ATTENTION !!! CE SITE WEB A ÉTÉ PRÉVU POUR FONCTIONNER EN MODE PAYSAGE UNIQUEMENT !!!");

	var divs = [document.querySelector("#mainTitle h1"), document.querySelector(".credits")];
	var strings = ["Les Cours de NSI en 1ère", "Par Sasha Guérin-Loison"];
	var i = 0;
	var y = 0;
	var stringToWrite = "";
	var currentString = "";

	(function typeMessage () {
		if (y < divs.length) {
			currentString = strings[y];
			stringToWrite +=  currentString[i];
			divs[y].innerHTML = stringToWrite + " <span class=\"blinkingCursor\">_</span>";
			i += 1;
			if (currentString[i] === undefined) {
				if (y < divs.length - 1) {
					divs[y].innerHTML = stringToWrite;
				}
				y = y + 1;
				i = 0;
				stringToWrite = "";
				setTimeout(function() {
					typeMessage(currentString, divs[y], i)
				}, 100);
			} else {
				setTimeout(function() {
					typeMessage(currentString, divs[y], i)
				}, 100);
			}
		} else {
			return false;
		}
	})();
}

let active = false;
let navBarIcon = document.querySelector(".navBarIcon");
let navBarCases = document.querySelectorAll(".navBarCase");
navBarIcon.addEventListener("click", function(){
	if (active === false) {
		active = true;
	} else {
		active = false;
	}

	if (active === false) {
		navBarIcon.style.transform = "rotate(0deg)";
		for (let navBarCase of navBarCases) {
			navBarCase.style.height = "0";
			navBarCase.style.width = "0";
			navBarCase.style.fontSize = "0";
			navBarCase.style.borderBottom = "0";
		}
	} else {
		navBarIcon.style.transform = "rotate(90deg)";
		for (let navBarCase of navBarCases) {
			navBarCase.style.height = "15.6vh";
			navBarCase.style.width = "15vw";
			navBarCase.style.fontSize = "2vh";
			navBarCase.style.borderBottom = "1px solid black";
		}
	}

	return false;
});