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
});
