const elements = [
  {
    tag: "div",
    class: "container-1",
    id: "div-1",
    style: {
      border: "1px solid black",
      padding: "10px",
    },
    children: [
      {
        tag: "h1",
        class: "heading-1",
        id: "h-1",
        style: {
          color: "blue",
          fontSize: "24px",
        },
        text: "innerHTML",
      },
      {
        tag: "p",
        id: "p-1",
        style: {
          fontStyle: "italic",
        },
        text: "The easiest way to modify the content of an HTML element is by using the innerHTML property.",
      },
    ],
  },
  {
    tag: "div",
    class: "container-2",
    id: "div-2",
    style: {
      border: "1px solid black",
      padding: "10px",
    },
    children: [
      {
        tag: "h2",
        class: "heading-2",
        id: "h-2",
        style: {
          color: "red",
          fontSize: "24px",
        },
        text: "W3Schools",
      },
      {
        tag: "p",
        id: "p-2",
        style: {
          fontStyle: "bold",
        },
        text: "W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.",
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
      if (
        entry[0] != "tag" &&
        entry[0] != "style" &&
        entry[0] != "children" &&
        entry[0] != "text"
      ) {
        tagObject.setAttribute(entry[0], entry[1]);
      } else if (entry[0] === "style") {
        const styles = Object.entries(element.style);
        styles.forEach((sty) => {
          tagObject.style[sty[0]] = sty[1];
        });
      } else if (entry[0] === "children") {
        HTMLBuilder(element.children, element.id);
      } else if (entry[0] === "text") {
        tagObject.innerHTML = entry[1];
      }
    });
  });
}

HTMLBuilder(elements,"body");