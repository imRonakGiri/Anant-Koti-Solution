const $_ = document,
  $ = (i) => $_.querySelector(i);
var l = 0;
function None() {
  $(".gallery").style.display = "none";
  $(".home").style.display = "none";
  $(".services").style.display = "none";
  $(".contect").style.display = "none";
  $(".content").style.background = "";
}
function Change() {
  console.log("hey");
  if (l === 0) {
    $("#hello").innerHTML = "Back-end Devlopment";
    l = 1;
  } else if (l === 1) {
    $("#hello").innerHTML = "Front-end Design";
    l = 0;
  }
}
export default { Change, None };
