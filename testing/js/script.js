function opened() {
    document.getElementById("mySidebar").style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

display_datetime();
setInterval("display_datetime()", 1000);
function display_datetime() {
    var curtime = new Date();
    var curhour = curtime.getHours();
    var curmin = curtime.getMinutes();
    var cursec = curtime.getSeconds();
    var time = "";
    if(curhour == 0) curhour = 12;
    time = (curhour > 12 ? curhour - 12 : curhour) + ":" +
        (curmin < 10 ? "0"  :  "") + curmin + ":" +
        (cursec < 10 ? "0"  :  "") + cursec + " " +
        (curhour > 12 ? "PM"  :  "AM");
    try{
        document.getElementById("time").innerHTML=  time+", "+ curtime.toLocaleDateString();
    }catch(e){}
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}