document.addEventListener("DOMContentLoaded", () => {

  const SUPPLIER_API =
  "https://script.google.com/macros/s/AKfycbxMucxispr3qhpxDVZ0-WnCdlzO3hs_KRXVORVIsid_olm33zvU02TTzYdT-iBntLCU/exec";


  const supplierBox = document.getElementById("supplier");


  fetch(SUPPLIER_API)

    .then(response => response.json())

    .then(data => {

      supplierBox.innerHTML =
        '<option value="">Select Supplier</option>';


      data.forEach(name => {

        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        supplierBox.appendChild(option);

      });

    })

    .catch(error => {

      console.error("Supplier Load Error:", error);

      supplierBox.innerHTML =
        '<option value="">Load Failed</option>';

    });

});
