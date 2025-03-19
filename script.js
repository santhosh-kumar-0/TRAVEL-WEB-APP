document.addEventListener("DOMContentLoaded", () => {
  const photo = document.getElementById("travel-photo");
  const bookingOptions = document.getElementById("booking-options");

  photo.addEventListener("click", () => {
    bookingOptions.classList.toggle("hidden");
  });
});
