function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  console.log(window.matchMedia("screen and (max-width: 1045px)"));
  if (window.matchMedia("screen and (max-width: 1045px)").matches) {
    document.getElementById("mySidenav").style.width = "160px";
  }

  console.log(window.matchMedia("screen and (max-width: 768px)"));
  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    document.getElementById("mySidenav").style.width = "50px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(() => {
  $(".dropdown").on("click", () => {
    $(".dropdown")
      .fadeToggle(300)
      .toggle(500);
  });
  $(".pageSection").hide();
  $("#Intro-page").show(500);

  $(".navbar-link").each((index, link) => {
    $(link).on("click", e => {
      e.preventDefault();
      $(".pageSection").hide();
      $($(link).data("sec")).show(500);
    });
  });
  $(".navbar-link1").each((index, link1) => {
    $(link1).on("click", e => {
      e.preventDefault();
      $(".pageSection").hide();
      $($(link1).data("sec1")).show();
    });
  });

  $(".panel-button5").on("click", () => {
    $("#Intro-page").show(500);
    $("#contact").hide();
  });
  $(".burger-nav").on("click", function() {
    $(".main-nav ul").toggleClass("open");
    $(".logo").toggle();
  });
});
