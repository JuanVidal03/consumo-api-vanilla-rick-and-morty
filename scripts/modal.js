const openModalBtns = document.querySelectorAll(".modal-open-btn");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal-close-btn");

console.log(openModalBtns, closeModalBtn);

document.addEventListener("DOMContentLoaded", () => {
    openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.toggle("modal-close");
            modal.classList.toggle("modal-open");
        });
    });
    
    closeModalBtn.addEventListener("click", () => {
        modal.classList.toggle("modal-close");
        modal.classList.toggle("modal-open");
    });
})

