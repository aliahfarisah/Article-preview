const Share = document.querySelector("button");
const Balloon = document.querySelector(".balloon");
const Triangle = document.querySelector(".triangle");

Share.addEventListener("mouseover", function () {
  Balloon.style.visibility = "visible";
  Triangle.style.visibility = "visible";
  Share.style.backgroundColor = "var(--Very_Dark_Grayish_Blue)";
});

Share.addEventListener("mouseout", function () {
  Balloon.style.visibility = "hidden";
  Triangle.style.visibility = "hidden";
  Share.style.backgroundColor = "var(--Light_Grayish_Blue)";
});
