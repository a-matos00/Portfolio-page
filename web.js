
var HILO_description = "</br>Made with HTML/CSS/JS</br>Optimized only for mobile devices</br>Made into an android app using Adobe Phonegapp";
var bio = "Hi my name is Andrija. I am a 20 year old computer science student at the University of Split. My skills include working in HTML/CSS/JS/C/C++, I am also accustomed with using Git and Github. If you are still reading to this point make sure to check the projects section of my website to see what I created so far.";

document.getElementById("text").innerHTML = bio; //biography text

class Cbutton{
	constructor(css_class, text){
		this.el = document.createElement("BUTTON");
		this.el.classList.add(css_class);
		this.el.innerHTML	= text;
		
	}
	
}

var live_btn = document.createElement("BUTTON");
	live_btn.classList.add("project_buttons");
	live_btn.innerHTML	= "Live version";
	
var live_url = document.createElement('a');
	live_url.href = "https://www.google.com/"; //insert link
	
	live_url.appendChild(live_btn);
	
var github_link = document.createElement('a');	//anchor that holds the github link
	github_link.href = "https://github.com/a-matos00";	//asigning url to the text
var github_text = document.createTextNode("https://github.com/a-matos00");
	github_link.appendChild(github_text);
	github_link.href = "https://github.com/a-matos00";	//asigning url to the text

var project_text = document.createElement("div");
	project_text.classList.add("project_text");



var hi_lo_title = document.createElement('div');
	hi_lo_title.classList.add("project_titles");
	hi_lo_title.innerHTML = "Higher/lower game";
	
function display_homepage(){
	hi_lo_title.remove();
	hi_lo_btn.remove(); //removes the button
	document.getElementById("text").innerHTML = bio;
	document.getElementById("left").innerHTML = "About</br>Me"
}

function display_info(){
	hi_lo_btn.remove(); //removes the button
	hi_lo_title.remove();
	document.getElementById("text").innerHTML = "e-mail: andrija.matosic@outlook.com</br>";
	document.getElementById("text").innerHTML += "Github: ";
	document.getElementById("text").appendChild(github_link);
	document.getElementById("left").innerHTML = "Contact</br>Info";	
}
	
function display_projects(){
	HILO_btn = new Cbutton("project_buttons", "Higher or lower guess game");	//initialise button class for HI-LO game
	
	document.getElementById("text").innerHTML = "";
	document.getElementById("text").appendChild(HILO_btn.el); //adds the button for the HI-LO game
	
	HILO_btn.showInfo("left", HILO_description, );
	
	/*hi_lo_btn.onclick = function(){
		document.getElementById("left").innerHTML = "";
		document.getElementById("left").appendChild(hi_lo_title);
		document.getElementById("left").appendChild(project_text);
		project_text.innerHTML = hi_lo_bio;
		document.getElementById("left").appendChild(live_url);
	}; 
	*/
	
	document.getElementById("left").innerHTML = "My</br>Projects";
}
