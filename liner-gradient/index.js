const charoText = document.getElementById("bottom-charo");
window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    // you're at the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log(document.body.offsetHeight);
        charoText.style.animation = "changeColorBottom 3s linear forwards";
    } else {
        charoText.style.animation = "";
    }
    this.oldScroll = this.scrollY;
}
    