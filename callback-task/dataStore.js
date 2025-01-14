export const subjects = {
  english: 0,
  tamil: 0,
  maths: 0,
  "computer science": 0,
  physics: 0,
};

export const results = {
  average: 0,
  total: 0,
  percentage: 0,
};

export const elements = [
  {
    tag: "div",
    class: "div-main-row",
    attributes: {
      id: "div-main-row",
    },
    children: [
      {
        tag: "div",
        class: "input-fields-div",
        attributes: {
          id: "input-fields-div",
        },
        children: [
          {
            tag: "label",
            text: "English:",
            attributes: {
              for: "english",
            },
          },
          {
            tag: "input",
            class: "subject-input",
            attributes: {
              type: "text",
              id: "english",
              name: "english",
            },
          },
          {
            tag: "label",
            text: "Tamil:",
            attributes: {
              for: "tamil",
            },
          },
          {
            tag: "input",
            class: "subject-input",
            attributes: {
              type: "text",
              id: "tamil",
              name: "tamil",
            },
          },
          {
            tag: "label",
            text: "Maths:",
            attributes: {
              for: "maths",
            },
          },
          {
            tag: "input",
            class: "subject-input",
            attributes: {
              type: "text",
              id: "maths",
              name: "maths",
            },
          },
          {
            tag: "label",
            text: "Computer Science:",
            attributes: {
              for: "computer-science",
            },
          },
          {
            tag: "input",
            class: "subject-input",
            attributes: {
              type: "text",
              id: "computer-science",
              name: "computer-science",
            },
          },
          {
            tag: "label",
            text: "Physics:",
            attributes: {
              for: "physics",
            },
          },
          {
            tag: "input",
            class: "subject-input",
            attributes: {
              type: "text",
              id: "physics",
              name: "physics",
            },
          },
        ],
      },
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
      {
        tag: "div",
        class: "results-container",
        attributes: {
          id: "results-container",
        },
        children: [
          {
            tag: "span",
            text: "Average: ",
            attributes: {
              id: "average-result",
            },
          },
          {
            tag: "span",
            text: "0",
            attributes: {
              id: "average-value",
            },
          },
          {
            tag: "br",
          },
          {
            tag: "span",
            text: "Total: ",
            attributes: {
              id: "total-result",
            },
          },
          {
            tag: "span",
            text: "0",
            attributes: {
              id: "total-value",
            },
          },
          {
            tag: "br",
          },
          {
            tag: "span",
            text: "Percentage: ",
            attributes: {
              id: "percentage-result",
            },
          },
          {
            tag: "span",
            text: "0%",
            attributes: {
              id: "percentage-value",
            },
          },
        ],
      },
    ],
  },
];
