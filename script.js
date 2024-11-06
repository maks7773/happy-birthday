let egor = document.querySelector(".egor");
let yes = document.querySelector(".yes");

yes.addEventListener("click", () => {
  console.log("click");
  egor.style.filter = "blur(0px)";
  alert("Я попросил его поздравить тебя!");
});
