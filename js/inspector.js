document.addEventListener("DOMContentLoaded", () => {

  const INSPECTOR_API =
    "https://script.google.com/macros/s/AKfycby-rz0BE7Q04J7CixQ4XRYJMcbo4Wo1WqtvdZ3I7amsrUGgA_kAhLEdiOHGBuJV74tj/exec";

  const inspectorBox = document.getElementById("inspector");

  fetch(INSPECTOR_API)
    .then(response => response.json())
    .then(data => {

      inspectorBox.innerHTML =
        '<option value="">Select Inspector</option>';

      data.forEach(name => {

        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        inspectorBox.appendChild(option);

      });

    })
    .catch(error => {

      console.error("Inspector Load Error:", error);

      inspectorBox.innerHTML =
        '<option value="">Load Failed</option>';

    });

});
