

  window.onscroll = function() {myFunction()};
function myFunction() {

  var element = document.getElementById("mainHeader");
  var class_name = element.className;


  var h = (window.innerHeight)*.95;

console.log(document.body.scrollTop);
  if (((document.body.scrollTop + document.documentElement.scrollTop) > h) && class_name != "slideUp") {

    element.classList.add("slideUp");


    element.style.transform = "translateY(0)";


    console.log("done");

  }

  else if ((document.body.scrollTop + document.documentElement.scrollTop) < h && class_name == "slideUp"){
  document.getElementById("mainHeader").classList.remove("slideUp");
  console.log("remove");
  element.style.transform = "translateY(-15vh)";
}}

function openNav() {
  document.getElementById("menu").style.transform = "translateX(0)";
}

function closeNav() {
  document.getElementById("menu").style.transform = "translateX(100%)";
}


(function() {
/**
* Video element
* @type {HTMLElement}
*/
var video = document.getElementById("video");

/**
* Check if video can play, and play it
*/
video.addEventListener( "canplay", function() {
video.play();
});
})();
