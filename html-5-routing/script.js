function loadPage(url) {
    console.log(url);
    if (url.endsWith('.js')) {
      import(url)
        .then((module) => {
          module.homeDisplay();
        })
        .catch((error) => {
          console.error("Error loading module:", error);
        });
    } else {
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("content-container").innerHTML = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  
  function changePage(url) {
    history.pushState(null, null, url);
    loadPage(url);
  }
  
  document.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const url = event.target.href;
      changePage(url);
    }
  });
  
  window.addEventListener("popstate", function () {
    const currentUrl = window.location.href;
    loadPage(currentUrl);
  });