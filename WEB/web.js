var txt = "Hi my name is Andrija. I am a 20 year old computer science student at the University of Split. I started programming at the age of 18 when I wanted to make my custom website on Blogger. That lead me to HTML, CSS and Javascript. After 2 years of messing around I created this webpage which can hopefully showcase what I learned so far. "
document.getElementById("text").innerHTML = txt;
var a = document.createElement('a');
      var linkText = document.createTextNode("https://github.com/a-matos00");
      a.appendChild(linkText);
      
      a.href = "https://github.com/a-matos00";

var hi_lo = document.createElement("BUTTON");
	hi_lo.classList.add("project_buttons");
	hi_lo.innerHTML = "Higher or lower game</br>";
	
function homepage(){
	hi_lo.remove(); //removes the button
	document.getElementById("text").innerHTML = "Hi my name is Andrija. I am a 20 year old computer science student at the University of Split. I started programming at the age of 18 when I wanted to make my custom website on Blogger. That lead me to HTML, CSS and Javascript. After 2 years of messing around I created this webpage which can hopefully showcase what I learned so far. "
	document.getElementById("left").innerHTML = "About</br>Me"
}

function info(){
	hi_lo.remove(); //removes the button
	document.getElementById("text").innerHTML = ""; //prevents infinite appending
	document.getElementById("text").innerHTML = "e-mail: andrija.matosic@outlook.com</br>"
	document.getElementById("text").innerHTML += "Github: ";
	document.getElementById("text").appendChild(a);
	
	document.getElementById("left").innerHTML = "Contact</br>Info"
}

function projects(){
	document.getElementById("right").appendChild(hi_lo); //adds the button for the HI-LO game
	hi_lo.onclick = function(){};
	document.getElementById("text").innerHTML = "";
	document.getElementById("left").innerHTML = "My</br>Projects";
}
