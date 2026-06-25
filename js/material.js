document.addEventListener("DOMContentLoaded", () => {

  const MATERIAL_API =
  "https://script.google.com/macros/s/AKfycbwOXcgOVIpMYFKRcceRi3Uxhp_zxBq05VchU18xF-3mwKXJ1hWjzzGmjCozwLkK3A0l/exec";


  const materialBox = document.getElementById("material");


  fetch(MATERIAL_API)

    .then(response => response.json())

    .then(data => {

      materialBox.innerHTML =
        '<option value="">Select Material Type</option>';


      data.forEach(name => {

        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        materialBox.appendChild(option);

      });

    })

    .catch(error => {

      console.error("Material Load Error:", error);

      materialBox.innerHTML =
        '<option value="">Load Failed</option>';

    });

});
