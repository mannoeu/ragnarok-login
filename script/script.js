var modal = document.querySelector('.modal');

var login = document.querySelector('#login').addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.toggle('active');
});

var closeModal = document.querySelector('#closeModal').addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.toggle('active');
});

var exit = document.querySelector('#exit').addEventListener('click', function (e){
  e.preventDefault();
  alert('Até breve');
})