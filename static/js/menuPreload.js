if (document.images) {
				img1 = new Image();
        img2 = new Image();
        img3 = new Image();
        img4 = new Image();
        img5 = new Image();




				img1.src = "static/images/menu-image-1.jpg";

        img2.src = "static/images/menu-image-2.jpg";
        img3.src = "static/images/menu-image-3.jpg";
        img4.src = "static/images/menu-image-4.jpg";
        img5.src = "static/images/menu-image-5.jpg";

			}
window.onload = function loadStuff() {
	document.getElementById("menu-image-1").style.backgroundImage = "url('static/images/menu-image-1.jpg')";
	document.getElementById("menu-image-1").style.filter = "blur(0px)"

	document.getElementById("menu-image-2").style.backgroundImage = "url('static/images/menu-image-2.jpg')";
	document.getElementById("menu-image-2").style.filter = "blur(0px)";
	document.getElementById("menu-image-3").style.backgroundImage = "url('static/images/menu-image-3.jpg')";
	document.getElementById("menu-image-3").style.filter = "blur(0px)";
	document.getElementById("menu-image-4").style.backgroundImage = "url('static/images/menu-image-4.jpg')";
	document.getElementById("menu-image-4").style.filter = "blur(0px)";
	document.getElementById("menu-image-5").style.backgroundImage = "url('static/images/menu-image-5.jpg')";
	document.getElementById("menu-image-5").style.filter = "blur(0px)";
  console.log("loaded");
}
