/* Big image display */
function getImage(choice) {
	if (choice == 1) {
		document.getElementById("big-image").src = "../images/gallery1.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Galle Fort </h1><br>Galle dutch fort is a historical, archaeological and architectural heritage monument built in 1588 by the Portuguese. The fort has a colourful history, and today has a multi-ethnic and multi-religious population.<br><br>The Sri Lankan government and many Dutch people who still own some of the properties inside the fort looking at making this one of the modern wonders of the world.<br><br>The heritage value of the fort has been recognized by the UNESCO and the site has been inscribed as a cultural heritage.<br><br><a href=\"https://en.wikipedia.org/wiki/Galle_Fort\" target=\"_blank\">Read more</a>";

	} else if (choice == 2) {
		document.getElementById("big-image").src = "../images/gallery2.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Sigiriya </h1><br> According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kashyapa (477 – 495 AD) for his new capital. He built his palace on the top of this rock and decorated its sides with colourful frescoes.<br><br>  On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure — Sīnhāgiri, the Lion Rock (an etymology similar to Sinhapura, the Sanskrit name of Singapore, the Lion City).<br><br> The capital and the royal palace was abandoned after the king's death. It was used as a Buddhist monastery until the 14th century. Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning. <br><br><a href=\"https://en.wikipedia.org/wiki/Sigiriya\" target=\"_blank\">Read more</a>";

	} else if (choice == 3) {
		document.getElementById("big-image").src = "../images/gallery3.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Nine Arch Bridge </h1><br> The Nine Arch Bridge also called the Bridge in the Sky, is a viaduct bridge in Sri Lanka. It is one of the best examples of colonial-era railway construction in the country. The construction of the bridge is generally attributed to a local Ceylonese builder, P. K. Appuhami, in consultation with British engineers. <br><br> It is located in Demodara, between Ella and Demodara railway stations. The surrounding area has seen a steady increase of tourism due to the bridge's architectural ingenuity and the profuse greenery in the nearby hillsides.<br><br> Popular rumours suggest that when construction work commenced on the bridge, the Great War began between the empires of Europe and the steel assigned for this site was reallocated to Britain's War related projects at the battlefront. As a result, the work came to a standstill, leading the locals to build the bridge with stone bricks and cement, but without steel.<br><br><a href=\"https://en.wikipedia.org/wiki/Nine_Arch_Bridge,_Demodara\" target=\"_blank\">Read more</a>";
	} else if (choice == 4) {
		document.getElementById("big-image").src = "../images/gallery4.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Temple of Tooth </h1><br> Sri Dalada Maligawa or the Temple of the Sacred Tooth Relic is a Buddhist temple in the city of Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. <br><br> Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country. Kandy was the last capital of the Sri Lankan kings and is a World Heritage Site mainly due to the temple.<br><br> The temple sustained damage from bombings by Janatha Vimukthi Peramuna in 1989 and by Liberation Tigers of Tamil Eelam in 1998 but was fully restored each time.<br><br><a href=\"https://en.wikipedia.org/wiki/Temple_of_the_Tooth\" target=\"_blank\">Read more</a>";
	} else if (choice == 5) {
		document.getElementById("big-image").src = "../images/gallery5.jpg";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Dunhinda Falls </h1><br> Dunhinda Falls is a waterfall located about 5 kilometres (3.1 mi) from Badulla in the lower central hills of Sri Lanka. The waterfalls are purported to be one of the country’s most beautiful waterfalls.<br><br> The waterfall, which is 64 metres (210 ft) high, gets its name from the smoky dew drops spray, (Dun in sinhala means mist or smoke) which surrounds the area at the foot of the waterfall. It's also known as bridal fall, as the shape of the water falling is similar to a bridal veil. The waterfall is created by the Badulu Oya which flows through Badulla.<br><br><a href=\"https://en.wikipedia.org/wiki/Dunhinda_Falls\" target=\"_blank\">Read more</a>";
	} else {

	}
}


/* destinations */
function CheckDestination(form) {
	var selected = destinations[destinations.selectedIndex].value;
	if (selected == "option1") {
		getImage(1);
	} else if (selected == "option2") {
		getImage(2);
	} else if (selected == "option3") {
		getImage(3);
	} else if (selected == "option4") {
		getImage(4);
	} else if (selected == "option5") {
		getImage(5);
	} else {

	}
}


function bgcolor(radio) {
	var selected = radio.value;

	if (selected == "color1") {
		document.body.style.backgroundColor = "#74e89b";
	} else if (selected == "color2") {
		document.body.style.backgroundColor = "#39bbdb";
	} else if (selected == "color3") {
		document.body.style.backgroundColor = "#ede379";
	} else {

	}

}


function changeColor(colour) {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = colour;
	}
}


function fontcolor(form) {
	var selected = fontColor[fontColor.selectedIndex].value;

	if (selected == "color1") {
		changeColor("#ab5454");
	} else if (selected == "color2") {
		changeColor("#3865e0");
	} else if (selected == "color3") {
		changeColor("#77188c");
	} else if (selected == "color4") {
		changeColor("#8c1861");
	} else if (selected == "color5") {
		changeColor("#18758c");
	} else {

	}
}


function reset1() {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = "black";
	}
	document.body.style.backgroundColor = "white";
	document.getElementById("gallery-display").style.display = "none";
}