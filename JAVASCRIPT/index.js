
var className = "scroll-active";
var scrollTrigger = 100;

window.onscroll = function() {
 
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};



function toggleFunction(){
  var sidebar = document.getElementById("side-bar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}



function submit() {
  alert("Submitted successfully....");
}





