$(document).ready(function () {
  $(".skills__bar").waypoint(
    function () {
      $(".skills__bar").css({
        animation: "animate-positive 8s",
        opacity: "1",
      });
    },
    { offset: "100%" }
  );
});
