

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("h1").style.fontSize = "30px";
  } else {
    document.getElementById("h1").style.fontSize = "90px";
  }
}