document.addEventListener("DOMContentLoaded", () => {

  const INSPECTION_ITEM_API =
  "https://script.google.com/macros/s/AKfycbw9QKqQNuHD5nQdP7MTwDOc5vu4nyMFCgeeHsXnG7dZYxrykaCf2yJv4-ZU36CvYvYU/exec";


  const materialBox = document.getElementById("material");
  const inspectionBody = document.getElementById("inspectionBody");


  let inspectionItems = [];


  fetch(INSPECTION_ITEM_API)
    .then(response => response.json())
    .then(data => {

      inspectionItems = data;

      console.log("Inspection Item Loaded:", inspectionItems);

    })
    .catch(error => {

      console.error("Inspection Item Load Error:", error);

    });



  materialBox.addEventListener("change", () => {


    const materialType = materialBox.value;


    inspectionBody.innerHTML = "";


    const checklist = inspectionItems.filter(item =>
      item.materialType === materialType
    );


    checklist.forEach(item => {


      const row = document.createElement("tr");


      let resultField = "";


      if (item.resultType === "OKNGNA") {

        resultField = `
          <select>
            <option value="">Select</option>
            <option value="OK">OK</option>
            <option value="NG">NG</option>
            <option value="NA">NA</option>
          </select>
        `;

      } else {

        resultField = `
          <input type="text">
        `;

      }


      row.innerHTML = `

        <td>${item.itemNo}</td>
        <td>${item.checkPoint}</td>
        <td>${item.spec}</td>
        <td>${item.checkType}</td>
        <td>${resultField}</td>
        <td>
          <input type="text">
        </td>

      `;


      inspectionBody.appendChild(row);


    });


  });


});
