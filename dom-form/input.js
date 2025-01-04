const elements = [
    {
        tag: "form",
        class: "user-form",
        style: {
            marginTop: "20px",
            display: "flex",
            "flex-direction": "column",
            width: "50%"
        },
        attributes: {
            id: "userForm",
        },
        children: [
            {
                tag: "label",
                text: "First Name:",
                attributes: {
                    for: "fname",
                    id: "labelFname",
                },
            },
            {
                tag: "input",
                attributes: {
                    type: "text",
                    id: "fname",
                    name: "fname",
                },
            },
            {
                tag: "label",
                text: "Last Name:",
                attributes: {
                    for: "lname",
                    id: "labelLname",
                },
            },
            {
                tag: "input",
                attributes: {
                    type: "text",
                    id: "lname",
                    name: "lname",
                },
            },
            {
                tag: "label",
                text: "Age:",
                attributes: {
                    for: "age",
                    id: "labelAge",
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
                    id: "labelGender",
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
                            id: "optionMale",
                        },
                    },
                    {
                        tag: "option",
                        text: "Female",
                        attributes: {
                            value: "female",
                            id: "optionFemale",
                        },
                    },
                    {
                        tag: "option",
                        text: "Other",
                        attributes: {
                            value: "other",
                            id: "optionOther",
                        },
                    },
                ],
            },
            {
                tag: "label",
                text: "Languages:",
                attributes: {
                    for: "languages",
                    id: "labelLanguages",
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
                    for: "commentsBox",
                    id: "labelCommentsBox",
                },
            },
            {
                tag: "textarea",
                attributes: {
                    id: "commentsBox",
                    name: "commentsBox",
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
                    id: "submitButton",
                },
                style: {
                    gridColumn: "span 2",
                },
            },
        ],
    },
];

function HTMLBuilder(elements, parentId) {
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
        HTMLBuilder(element.children, element.attributes.id);
      }
    });
  });
}

HTMLBuilder(elements, "body");
