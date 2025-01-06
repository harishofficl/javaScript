const elements = [
  {
    tag: "h2",
    class: "form-heading",
    attributes: {
      id: "user-form-heading",
    },
    text: "FORM",
  },
  {
    tag: "form",
    class: "user-form",
    attributes: {
      id: "user-form",
    },
    children: [
      {
        tag: "div",
        class: "div-main-row-1",
        attributes: {
          id: "div-main-row-1",
        },
        children: [
          {
            tag: "div",
            class: "div-row-1",
            attributes: {
              id: "div-row-1",
            },
            children: [
              {
                tag: "div",
                class: "first-name",
                attributes: {
                  id: "first-name-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "First Name:",
                    attributes: {
                      for: "first-name",
                      id: "label-first-name",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "text",
                      id: "first-name",
                      name: "first-name",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "last-name",
                attributes: {
                  id: "last-name-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Last Name:",
                    attributes: {
                      for: "last-name",
                      id: "label-last-name",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "text",
                      id: "last-name",
                      name: "last-name",
                    },
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            class: "div-row-2",
            attributes: {
              id: "div-row-2",
            },
            children: [
              {
                tag: "div",
                class: "age",
                attributes: {
                  id: "age-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Age:",
                    attributes: {
                      for: "age",
                      id: "label-age",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "number",
                      id: "age",
                      name: "age",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "gender",
                attributes: {
                  id: "gender-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Gender:",
                    attributes: {
                      for: "gender",
                      id: "label-gender",
                    },
                  },
                  {
                    tag: "select",
                    attributes: {
                      id: "gender",
                      name: "gender",
                    },
                    children: [
                      {
                        tag: "option",
                        text: "Male",
                        attributes: {
                          value: "male",
                          id: "option-male",
                        },
                      },
                      {
                        tag: "option",
                        text: "Female",
                        attributes: {
                          value: "female",
                          id: "option-female",
                        },
                      },
                      {
                        tag: "option",
                        text: "Other",
                        attributes: {
                          value: "other",
                          id: "option-other",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            class: "div-row-3",
            attributes: {
              id: "div-row-3",
            },
            children: [
              {
                tag: "div",
                class: "email",
                attributes: {
                  id: "email-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Email:",
                    attributes: {
                      for: "email",
                      id: "label-email",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "email",
                      id: "email-input",
                      name: "email",
                    },
                  },
                ],
              },
              {
                tag: "div",
                class: "phone-number",
                attributes: {
                  id: "phone-number-div",
                },
                children: [
                  {
                    tag: "label",
                    text: "Phone Number:",
                    attributes: {
                      for: "phone-number",
                      id: "label-phone-number",
                    },
                  },
                  {
                    tag: "input",
                    attributes: {
                      type: "tel",
                      id: "phone-number",
                      name: "phone-number",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "div-main-row-2",
        attributes: {
          id: "div-main-row-2",
        },
        children: [
          {
            tag: "div",
            class: "submit-button-div",
            attributes: {
              id: "submit-button-div",
            },
            children: [
              {
                tag: "button",
                text: "Submit",
                class: "submit-button",
                attributes: {
                  type: "submit",
                  id: "submit-button",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

function htmlBuilder(elements, parentId) {
  if (parentId === undefined) parentId = "body";
  elements.forEach((element) => {
    const tagObject = document.createElement(element.tag);
    if (parentId === "body") {
      document.body.appendChild(tagObject);
    } else {
      document.getElementById(parentId).appendChild(tagObject);
    }
    const entries = Object.entries(element);
    entries.forEach((entry) => {
      if (entry[0] === "class") {
        tagObject.className = entry[1];
      } else if (entry[0] === "text") {
        tagObject.innerHTML = entry[1];
      } else if (entry[0] === "style") {
        const styles = Object.entries(element.style);
        styles.forEach((sty) => {
          tagObject.style[sty[0]] = sty[1];
        });
      } else if (entry[0] === "attributes") {
        const attributeObj = Object.entries(entry[1]);
        attributeObj.forEach((attribute) => {
          tagObject.setAttribute(attribute[0], attribute[1]);
        });
      } else if (entry[0] === "children") {
        htmlBuilder(element.children, element.attributes?.id || parentId);
      }
    });
  });
}

htmlBuilder(elements, "body");
