const modal = document.querySelector(".modal");
const modalLoading = document.querySelector(".modal-loading");

const user = document.querySelector("#user");
const password = document.querySelector("#password");

const login = document
  .querySelector("#login")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (user.value && password.value) {
      modal.classList.toggle("active");
    } else {
      alert("Preencha os campos");
    }
  });

const closeModal = document
  .querySelector("#closeModal")
  .addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.toggle("active");
  });

const exit = document
  .querySelector("#exit")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("Até breve");
  });

const initLoading = document
  .querySelector("#initLoading")
  .addEventListener("click", (e) => {
    e.preventDefault();
    modalLoading.classList.toggle("active");

    setTimeout(() => {
      modalLoading.classList.toggle("active");
      modal.classList.toggle("active");
    }, 6000);
  });
