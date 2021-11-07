function resetDOM() {
	var elem = document.getElementsByClassName('ctx');
	for(var i = 0; i < elem.length; i ++) {
		elem[i].style = 'display: none';
	}
}
function myFunction() {
	var elem = document.getElementsByClassName('menus');
	for(var i = 0; i < elem.length; i ++) {
		if(elem[i].addEventListener) {
			elem[i].addEventListener("mouseover", function(){
				resetDOM();
				document.getElementById(this.getAttribute('data-target')).style = 'display: block';
			});
		}
	}
}

window.addEventListener("load", myFunction);

function opened() {
    document.getElementById("mySidebar").style.display = "block";
    window.scrollTo(0, 0);
}
function closed() {
    document.getElementById("mySidebar").style.display = "none";
}
