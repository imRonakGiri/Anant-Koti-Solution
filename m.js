const $_ = document,
  $ = (i) => $_.querySelector(i),
  $2 = (i) => $_.createElement(i),
  $3 = (m) => $(m).appendChild(i),
  $4 = (im, m) => ((i.innerHTML = im), $3(m)),
  $5 = (m, im) => (i.classList.add(m), $3(im)),
  $6 = (a, b) => ((i = $2("div")), $5(a, b));
website = {
  menu: ["home", "services", "gallery", "contect"],
};
i = $2("ul");
$5("menu", "main");
$6("content", "main");
$6("home", ".content");
$6("services", ".content");
$6("gallery", ".content");
$6("contect", ".content");
$6("contect-1", ".contect");
$6("contect-2", ".contect");
$6("contect-3", ".contect");
website.menu.forEach((m) => {
  i = $2("li");
  i.setAttribute("class", "menu-itm");
  $4(m.toUpperCase(), ".menu");
});
$_.addEventListener("click", RoanakGiri);
// Services
i = $2("h3");
$4("National & InterNational Courier Booking", ".services");
i = $2("p");
$4(
  "International shipping costs more than domestic delivery because of the extra steps taken before the parcel arrives at its destination. Once the parcel is cleared, the parcel is sent to the next courier to complete the last leg of the journey.",
  ".services"
);
// Contect
i = $2("h2");
$4(`RonakGiri Goswami`, ".contect-1");
i = $2("p");
$4(`+91 6354852905<br>GoswamiRonakGiri38@gmail.com `, ".contect-2");
i = $2("p");
$4(`175 Nandanvan Soc, Near Matrushakti, Punagam-395010, Surat`, ".contect-3");
$(".menu *:nth-child(1)").classList.add("acctive");
function RoanakGiri(i) {
  for (w = 1; w <= website.menu.length; w++) {
    pathofclick = ".menu *:nth-child(" + w + ")";
    if (i.path[0].innerHTML === $(pathofclick).innerHTML) {
      dNone();
      $(".acctive").classList.remove("acctive");
      i.path[0].classList.add("acctive");
      switch ($(".acctive").innerHTML) {
        case "HOME":
          $(".home").style.display = "";
          break;
        case "SERVICES":
          $(".services").style.display = "";
          break;
        case "CONTECT":
          $(".contect").style.display = "";
          break;
        case "GALLERY":
          $(".gallery").style.display = "";
      }
    }
  }
}
function dNone() {
  $(".gallery").style.display = "none";
  $(".home").style.display = "none";
  $(".services").style.display = "none";
  $(".contect").style.display = "none";
}
dNone();
