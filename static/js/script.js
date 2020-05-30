if (document.images) {
				img1 = new Image();


				img1.src = "static/images/frontpage.jpg";

			}
window.onload = function loadStuff() {
  document.getElementById("frontPage").style.backgroundImage = "url('static/images/frontpage.jpg')";
	document.getElementById("frontPage").style.filter = "blur(0px)";
  console.log("loaded");
}
function openNav() {
  document.getElementById("menu").style.width = "250px";

  console.log("open");

}

function closeNav() {
  document.getElementById("menu").style.width="0";
}
