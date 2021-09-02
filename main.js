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
$6("book", "main");
$6("home_one", ".home");
$6("home_two", ".home");
website.menu.forEach((m) => {
  i = $2("li");
  i.setAttribute("class", "menu-itm");
  $4(m.toUpperCase(), ".menu");
});
$_.addEventListener("click", RoanakGiri);

// home
i = $2("h2");
$4("I'm an Anant Koti Solution ", ".home_one");
i = $2("p");
$4("Powered by an individual freelancer", ".home_one");
// Services
i = $2("img");
i.setAttribute("alt", "programing languages");
i.setAttribute("src", "/img/cmplg.png");
$3(".services");
$4("About Me", ".services");
i = $2("p");
$4(
  "I am RonakGiri Goswami from Surat Gujarat. I am a digital marketer and consultant and full stack web developer If you need any help, let me know...",
  ".services"
);
// Contect
i = $2("h2");
$4(`RonakGiri Goswami`, ".contect-1");
i = $2("p");
$4(`GoswamiRonakGiri38@gmail.com`, ".contect-2");
i = $2("p");
$4(`Punagam-395010, Surat`, ".contect-3");
$(".menu *:nth-child(1)").classList.add("acctive");
dNone();
$(".home").style.display = "";
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
