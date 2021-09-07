import Good from "./js.js";
const $_ = document,
  $ = (i) => $_.querySelector(i),
  $2 = (i) => $_.createElement(i),
  $3 = (m) => $(m).appendChild(i),
  $4 = (im, m) => ((i.innerHTML = im), $3(m)),
  $5 = (m, im) => (i.classList.add(m), $3(im)),
  $6 = (a, b) => ((i = $2("div")), $5(a, b)),
  website = {
    menu: ["home", "services", "gallery", "contect"],
  };
var i = $2("ul");
$5("menu", "main");
$6("content", "main");
$6("home", ".content");
$6("services", ".content");
$6("gallery", ".content");
$6("contect", ".content");
$6("contect-1", ".contect");
$6("contect-2", ".contect");
$6("contect-3", ".contect");
$6("book", "main");
$6("home_one", ".home");
$6("home_two", ".home");
website.menu.forEach((m) => {
  i = $2("li");
  i.setAttribute("class", "menu-itm");
  $4(m.toUpperCase(), ".menu");
});
$2("img");
var i = $2("h2");
$4("I'm an Anant Koti Solution ", ".home_one");
var i = $2("p");
$4("Powered by an individual Freelancer", ".home_one");
var i = $2("h2");
$4("<strong><span id='hello'>Front-end Design</span></strong>", ".services");
i = $2("p");
$4(
  "I am RonakGiri Goswami from Surat Gujarat. I am a digital marketer and consultant and full stack web developer If you need any help, let me know...",
  ".services"
);
i = $2("h2");
$4(`RonakGiri A Goswami`, ".contect-1");
i = $2("p");
$4(`GoswamiRonakGiri38@gmail.com`, ".contect-2");
i = $2("p");
$4(`Punagam-395010, Surat`, ".contect-3");
$(".menu *:nth-child(1)").classList.add("acctive");
Good.None();
$(".home").style.display = "";
setInterval(Good.Change, 2000);
function RoanakGiri(i) {
  for (let w = 1; w <= website.menu.length; w++) {
    var pathofclick = ".menu *:nth-child(" + w + ")";
    if (i.path[0].innerHTML === $(pathofclick).innerHTML) {
      Good.None();
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
          $(".content").style.background = "none";
      }
    }
  }
}
$_.addEventListener("click", RoanakGiri);
