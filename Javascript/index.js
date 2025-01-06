const files = [
    { name: "Homepage", url: "index.html" }
  ];

  function performSearch() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");
    const filteredFiles = files.filter(file =>
      file.name.toLowerCase().includes(input)
    );

    resultsContainer.innerHTML = "";
    if (input) {
      filteredFiles.forEach(file => {
        const link = document.createElement("a");
        link.href = file.url;
        link.textContent = file.name;
        resultsContainer.appendChild(link);
      });
      resultsContainer.style.display = "block";
    } else {
      resultsContainer.style.display = "none";
    }
  }