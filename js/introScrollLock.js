//For members.html page
//to hidden the scroll page from members.html when the menu button being toggled

var t3 = new TimelineMax({ paused: true });

t3.staggerFrom("body", 1, { overflow: "hidden", ease: Circ.easeOut }, 0.3);

//here

t3.reverse();

$(document).on("click", ".toggle", function () {
  t3.reversed(!t3.reversed());
});
