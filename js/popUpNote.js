function showdiv() {
  document.getElementById("consent-popup").style.opacity = 1;
  document.getElementById("consent-popup").style.zIndex = 100;
}

setTimeout("showdiv()", 3000);

// function hidediv() {
//   document.getElementById("consent-popup").style.opacity = 0;
// }

// setTimeout("hidediv()", 7000);

function acceptDiv() {
  document.getElementById("consent-popup").style.transition =
    "opacity 0.8s ease";
  document.getElementById("consent-popup").style.zIndex = -1;
  document.getElementById("consent-popup").style.opacity = 0;
}
