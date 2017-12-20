var link = document.querySelector(".booking-form-show");
var modal = document.querySelector(".booking-form-container");

modal.classList.add("modal-content-hide");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.toggle("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    modal.classList.remove("modal-content-show");
  }
});
