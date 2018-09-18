var contactsLink = document.querySelector(".contacts__button");
var contactsModal = document.querySelector(".modal-contacts");
var contactsClose = contactsModal.querySelector(".modal__close");

var contactsForm = contactsModal.querySelector(".contacts-form");
var contactsName = contactsModal.querySelector("[name='name']");
var contactsEmail = contactsModal.querySelector("[name='email']");
var contactsMessage = contactsModal.querySelector("[name='message']");

var mapLink = document.querySelector(".contacts__map-link");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal__close");

var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";

try {
  nameStorage = localStorage.getItem("name");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.add("modal--show");

  if (nameStorage || emailStorage) {
    contactsName.value = nameStorage ? nameStorage : "";
    contactsEmail.value = emailStorage ? emailStorage : "";
    contactsMessage.focus();
  } else {
    contactsName.focus();
  }
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.remove("modal--show");
  contactsModal.classList.remove("modal--error");
});

contactsForm.addEventListener("submit", function (evt) {
  if (!contactsName.value || !contactsEmail.value || !contactsMessage.value) {
    evt.preventDefault();
    contactsModal.classList.remove("modal--error");
    contactsModal.offsetWidth = contactsModal.offsetWidth;
    contactsModal.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactsName.value);
      localStorage.setItem("email", contactsEmail.value);
    }
  }
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
      contactsModal.classList.remove("modal--error");
    }
    if (mapModal.classList.contains("modal--show")) {
      mapModal.classList.remove("modal--show");
    }
  }
});
