function nameClick()
{
	var myName = document.getElementById('myName');
    myName.setAttribute("class", "nameStyle");
	myName.innerHTML = "Hello, visitor!";

	document.getElementById('me').setAttribute("class", "meStyle");
}