document.addEventListener("DOMContentLoaded", () => {

  const CUSTOMER_API =
  "https://script.google.com/macros/s/AKfycbzv1IRXeBSLB1S9y-0XtcJk9m181o_UIvPctafuUKOyocYoipFbxH1z413JcGXsfR0UQg/exec";


  const customerBox = document.getElementById("customer");


  fetch(CUSTOMER_API)

    .then(response => response.json())

    .then(data => {

      customerBox.innerHTML =
        '<option value="">Select Customer</option>';


      data.forEach(name => {

        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        customerBox.appendChild(option);

      });

    })

    .catch(error => {

      console.error("Customer Load Error:", error);

      customerBox.innerHTML =
        '<option value="">Load Failed</option>';

    });

});
