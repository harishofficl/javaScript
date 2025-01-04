const elements = [
  {
    tag: "h2",
    class: "form-heading",

    style: {
      margin: "20px auto auto auto",
      width: "30%",
      "text-align": "center"
    },
    attributes: {
      id: "user-form-heading",
    },
    text: "FORM",
  },
  {
    tag: "form",
    class: "user-form",
    style: {
      margin: "20px auto auto auto",
      display: "flex",
      "flex-direction": "column",
      width: "30%",
    },
    attributes: {
      id: "user-form",
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
      {
        tag: "label",
        text: "Languages:",
        attributes: {
          for: "languages",
          id: "label-languages",
        },
      },
      {
        tag: "input",
        attributes: {
          type: "text",
          id: "languages",
          name: "languages",
        },
      },
      {
        tag: "label",
        text: "Comments:",
        attributes: {
          for: "comment-box",
          id: "label-comment-box",
        },
      },
      {
        tag: "textarea",
        attributes: {
          id: "comment-box",
          name: "comment-box",
        },
        style: {
          gridColumn: "span 2",
        },
      },
      {
        tag: "button",
        text: "Submit",
        attributes: {
          type: "submit",
          id: "submit-button",
        },
        style: {
          gridColumn: "span 2",
        },
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
        htmlBuilder(element.children, element.attributes.id);
      }
    });
  });
}

htmlBuilder(elements, "body");
