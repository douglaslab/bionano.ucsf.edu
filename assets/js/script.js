var navSelects = document.querySelectorAll("nav select");
for (var i = 0; i < navSelects.length; i++) {
  navSelects[i].addEventListener("change", function () {
    location.href = this.value;
  });
}
