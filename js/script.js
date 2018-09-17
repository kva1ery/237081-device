var contactsLink = document.querySelector(".contacts__button");
var contactsModal = document.querySelector(".modal-contacts");
var contactsClose = contactsModal.querySelector(".modal__close");
var contactsName = contactsModal.querySelector("[name='name']");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.add("modal--show");
  contactsName.focus();
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactsModal.classList.contains("modal--show")) {
      contactsModal.classList.remove("modal--show");
    }
  }
});
