const $_ = document,
  $ = (i) => $_.querySelector(i),
  $2 = (i) => $_.createElement(i),
  $3 = (m) => $(m).appendChild(i),
  $4 = (im, m) => ((i.innerHTML = im), $3(m)),
  $5 = (m, im) => (i.classList.add(m), $3(im)),
  $6 = (a, b) => ((i = $2("div")), $5(a, b)),
  website = {
    menu: ["home", "services", "contect", "blogs"],
  };
var l = 0;
var i = $2("ul");
$5("menu", "main");
$6("content", "main");
$6("home", ".content");
$6("services", ".content");
$6("blogs", ".content");
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
$_.addEventListener("click", (i) => {
  for (let w = 1; w <= website.menu.length; w++) {
    var pathofclick = ".menu *:nth-child(" + w + ")";
    if (i.path[0].innerHTML === $(pathofclick).innerHTML) {
      $(".acctive").classList.remove("acctive");
      i.path[0].classList.add("acctive");
      website.menu.forEach((m) => {
        var i = m.toUpperCase();
        if ($(".acctive").innerHTML === i) {
          $(`.${m}`).style.display = "";
        } else {
          $(`.${m}`).style.display = "none";
        }
      });
    }
  }
});
var i = $2("h2");
$4("I'm an Anant Koti Solution ", ".home_one");
var i = $2("p");
$4("Powered by an individual Freelancer", ".home_one");
var i = $2("h2");
$4("<span>I don't use WordPress,<br>Even if I like it.</span>", ".home_two");
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
i = $2("div");
$4(
  `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14877.984472594297!2d72.8733335!3d21.2121667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d4d3173cf956fa4!2sANANT%20KOTI%20SOLUTION!5e0!3m2!1sen!2sin!4v1631153442086!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
  ".contect-3"
);
$(".menu *:nth-child(1)").classList.add("acctive");
website.menu.forEach((m) => {
  var i = m.toUpperCase();
  if ($(".acctive").innerHTML === i) {
    $(`.${m}`).style.display = "";
  } else {
    $(`.${m}`).style.display = "none";
  }
});
setInterval(Change, 2000);
function Change() {
  if (l === 0) {
    $("#hello").innerHTML = "Back-end Devlopment";
    l = 1;
  } else if (l === 1) {
    $("#hello").innerHTML = "Front-end Design";
    l = 0;
  }
}
