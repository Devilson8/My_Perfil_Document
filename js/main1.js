//require
const annotate = RoughNotation.annotate;
const annotationGroup = RoughNotation.annotationGroup;

const g1 = annotate(document.querySelector(".content-1"), {
  type: "highlight",
  color: "#70b8fb",
  strokeWidth: 4,
  animationDuration: 8000,
});

//Run
const ag = annotationGroup([g1]);
ag.show();
