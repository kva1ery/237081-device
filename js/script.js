var contactsLink = document.querySelector(".contacts__button");
var contactsModal = document.querySelector(".modal-contacts");
var contactsClose = contactsModal.querySelector(".modal__close");
var contactsName = contactsModal.querySelector("[name='name']");

var mapLink = document.querySelector(".contacts__map-link");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal__close");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.add("modal--show");
  contactsName.focus();
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.remove("modal--show");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal--show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactsModal.classList.contains("modal--show")) {
      contactsModal.classList.remove("modal--show");
    }
    if (mapModal.classList.contains("modal--show")) {
      mapModal.classList.remove("modal--show");
    }
  }
});
