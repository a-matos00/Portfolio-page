
var HILO_description = "</br>Made with HTML/CSS/JS</br>Optimized only for mobile devices</br>Made into an android app using Adobe Phonegapp";
var bio = "Hi my name is Andrija. I am a 20 year old computer science student at the University of Split. My skills include working in HTML/CSS/JS/C/C++, I am also accustomed with using Git and Github. If you are still reading to this point make sure to check the projects section of my website to see what I created so far.";

document.getElementById("text").innerHTML = bio; //biography text

class Cbutton{
	
	constructor(css_class, project_name, desc_target, arg_desc)
	{
		this.el = document.createElement("BUTTON");
		this.el.classList.add(css_class);
		this.el.innerHTML	= project_name;
		this.desc_target = desc_target;
		this.desc = arg_desc;
		this.desc_title = project_name;
		this.desc_title_el = document.createElement("div");
		
		$(this.el).click(function(){showInfo();});
		
		function showInfo(){
			document.getElementById(desc_target).innerHTML = "";
			
			var title = document.createElement("div");
			document.getElementById(desc_target).appendChild(title);
			title.className = "project_titles";
			title.innerHTML = project_name;
			
			var desc_div = document.createElement("div");
			document.getElementById(desc_target).appendChild(desc_div);
			desc_div.className = "project_text";
			desc_div.innerHTML = arg_desc;
			
		}
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
	document.getElementById("text").innerHTML = bio;
	document.getElementById("left").innerHTML = "About</br>Me"
}

function display_info(){
	document.getElementById("text").innerHTML = "e-mail: andrija.matosic@outlook.com</br>";
	document.getElementById("text").innerHTML += "Github: ";
	document.getElementById("text").appendChild(github_link);
	document.getElementById("left").innerHTML = "Contact</br>Info";	
}
	
function display_projects(){
	HILO_btn = new Cbutton("project_buttons", "Higher or lower guess game", "left",HILO_description);	//adds HI-LO game button
	
	document.getElementById("text").innerHTML = "";
	document.getElementById("text").appendChild(HILO_btn.el); //adds the button for the HI-LO game
	
	document.getElementById("left").innerHTML = "My</br>Projects";
	
}
