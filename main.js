const year = new Date(),
  $1 = document,
  $ = (i) => $1.querySelector(i),
  $2 = (i, m) => ($(i).innerHTML = m),
  $4 = (i) => $1.createElement(i),
  $5 = (m) => $(m).appendChild(i),
  $6 = (m) => (i.innerHTML = m),
  $7 = (i, m) => ($6(i), $5(m)),
  website = {
    menu: ["home", "services", "gallery", "contect"],
  };
i = $4("ul");
i.classList.add("menu");
$5("main");
i = $4("div");
i.classList.add("content");
$5("main");
website.menu.forEach((m) => {
  i = $4("li");
  i.setAttribute("class", "menu-itm");
  $7(m.toUpperCase(), ".menu");
});
$1.addEventListener("click", whoIs);
i = $4("div");
i.classList.add("contect");
$5(".content");
i = $4("div");
i.classList.add("services");
$5(".content");
i = $4("div");
i.classList.add("contect-1");
$5(".contect");
i = $4("div");
i.classList.add("contect-2");
$5(".contect");
i = $4("h2");
$7(`RonakGiri Goswami`, ".contect-1");
i = $4("p");
$7(
  `<img src="Anant koti solution.jpg">`,
  ".contect-2"
);
i = $4("p");
$7(`175 Nandanvan Soc, Near Matrushakti, Punagam-395010, Surat`, ".contect-2");
i = $4("p");
$7(`+91 6354852905<br>GoswamiRonakGiri38@gmail.com `, ".contect-1");
i = $4("p");
$7(`+91 9429700108/brainfoodsrt@gmail.com`, ".contect-2");
i = $4("h2");
$7("National & InterNational Courier Booking", ".services");
$(".menu *:nth-child(1)").classList.add("acctive");
display();
function display() {
  $(".acctive").innerHTML === "CONTECT"
    ? ($(".contect").style.display = "")
    : ($(".contect").style.display = "none");
  $(".acctive").innerHTML === "SERVICES"
    ? ($(".services").style.display = "")
    : ($(".services").style.display = "none");
}
function whoIs(i) {
  for (w = 1; w <= website.menu.length; w++) {
    pathofclick = ".menu *:nth-child(" + w + ")";
    if (i.path[0].innerHTML === $(pathofclick).innerHTML) {
      acctiveLess(i);
    }
  }
}
function acctiveLess(m) {
  $(".acctive").classList.remove("acctive");
  m.path[0].classList.add("acctive");
  display();
}
