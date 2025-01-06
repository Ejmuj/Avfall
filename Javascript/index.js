const files = [
    { name: "Home Page", url: "index.html" },
    { name: "About Us", url: "about.html" },
    { name: "Contact", url: "contact.html" },
    { name: "Services", url: "services.html" },
    { name: "Portfolio", url: "portfolio.html" }
  ];

  function suggestFiles() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const suggestionBox = document.getElementById("suggestionBox");

    // Filter files based on the input
    const filteredFiles = files.filter(file =>
      file.name.toLowerCase().includes(input)
    );

    suggestionBox.innerHTML = "";
    if (input && filteredFiles.length > 0) {
      filteredFiles.forEach(file => {
        const div = document.createElement("div");
        div.textContent = file.name;
        div.onclick = () => {
          document.getElementById("searchBar").value = file.name;
          suggestionBox.style.display = "none";
          window.location.href = file.url; // Navigate to the file
        };
        suggestionBox.appendChild(div);
      });
      suggestionBox.style.display = "block";
    } else {
      suggestionBox.style.display = "none";
    }
  }

  // Hide the suggestion box when clicking outside
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".search-container").contains(e.target)) {
      document.getElementById("suggestionBox").style.display = "none";
    }
  });