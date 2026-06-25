document.addEventListener("DOMContentLoaded", () => {

  const INSPECTION_ITEM_API =
  "https://script.google.com/macros/s/AKfycbw9QKqQNuHD5nQdP7MTwDOc5vu4nyMFCgeeHsXnG7dZYxrykaCf2yJv4-ZU36CvYvYU/exec";


  const materialBox = document.getElementById("material");
  const itemBox = document.getElementById("inspectionItem");


  let inspectionItems = [];


  fetch(INSPECTION_ITEM_API)

    .then(response => response.json())

    .then(data => {

      inspectionItems = data;

      itemBox.innerHTML =
      '<option value="">Select Material First</option>';

    })

    .catch(error => {

      console.error("Inspection Item Load Error:", error);

    });



  materialBox.addEventListener("change", () => {


    const selectedMaterial = materialBox.value;


    itemBox.innerHTML =
    '<option value="">Select Inspection Item</option>';


    const filteredItems = inspectionItems.filter(item =>
      item.materialType === selectedMaterial
    );


    filteredItems.forEach(item => {


      const option = document.createElement("option");


      option.value = item.itemNo;

      option.textContent =
        item.itemNo + " - " +
        item.checkPoint + " - " +
        item.spec;


      itemBox.appendChild(option);


    });


  });


});
