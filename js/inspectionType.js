document.addEventListener("DOMContentLoaded", () => {

  const INSPECTION_TYPE_API =
  "https://script.google.com/macros/s/AKfycbyKuiMu4hfPttljc3HnF7hdKE2HP8UG7z68KMCvkk8GSBG6bLJeuL-aeirobW3VDJ9o/exec";


  const typeBox = document.getElementById("inspectionType");


  fetch(INSPECTION_TYPE_API)

    .then(response => response.json())

    .then(data => {

      typeBox.innerHTML =
        '<option value="">Select Inspection Type</option>';


      data.forEach(name => {

        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        typeBox.appendChild(option);

      });

    })

    .catch(error => {

      console.error("Inspection Type Load Error:", error);

      typeBox.innerHTML =
        '<option value="">Load Failed</option>';

    });

});
