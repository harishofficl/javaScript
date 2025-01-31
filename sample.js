const users = [
  {
    first_name: "Harish",
    last_name: "S",
    dom_reference: null,
    is_update: false,
  },
  {
    first_name: "Suganth",
    last_name: "L",
    dom_reference: null,
    is_update: false,
  },
  {
    first_name: "Krishna",
    last_name: "A",
    dom_reference: null,
    is_update: false,
  },
];

setTimeout(updateUser, 2000);

function updateUser() {
  users[1].first_name = users[1].first_name.toUpperCase();
  users[1].is_update = true;

  renderUser();
}

function renderUser() {
  function contentUpdater(element, user) {
    element.innerHTML = `First Name: ${user.first_name}, Last Name: ${user.last_name}`;
  }

  users.forEach((user) => {
    if (user.dom_reference === null) {
      const divObject = document.createElement("div");
      user.dom_reference = divObject;
      contentUpdater(divObject, user);
      document.body.appendChild(divObject);
    } else {
      if (user.is_update) {
        const divObject = user.dom_reference;
        contentUpdater(divObject, user);
        user.is_update = false;
      }
    }
  });
}

renderUser();
