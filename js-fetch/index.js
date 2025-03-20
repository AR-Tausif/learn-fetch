const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

// open modal
modalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
