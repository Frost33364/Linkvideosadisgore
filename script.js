document.getElementById("acceptBtn").addEventListener("click", function () {
  document.getElementById("cookiePopup").style.display = "none";
  const jumpscare = document.getElementById("jumpscare");
  jumpscare.classList.remove("hidden");
  document.getElementById("scream").play();
});
