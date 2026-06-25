const INSPECTOR_API = "https://script.google.com/macros/s/AKfycby-rz0BE7Q04J7CixQ4XRYJMcbo4Wo1WqtvdZ3I7amsrUGgA_kAhLEdiOHGBuJV74tj/exec";

document.addEventListener("DOMContentLoaded", function () {

  const inspectorBox = document.getElementById("inspector");

  fetch(INSPECTOR_API)
    .then(response => response.json())
    .then(data => {

      data.forEach(function(name) {

        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        inspectorBox.appendChild(option);

      });

    })
    .catch(function(error) {

      console.log("Inspector Load Error:", error);

    });

});
