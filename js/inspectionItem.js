document.addEventListener("DOMContentLoaded", () => {


  const INSPECTION_ITEM_API =
  "https://script.google.com/macros/s/AKfycbw9QKqQNuHD5nQdP7MTwDOc5vu4nyMFCgeeHsXnG7dZYxrykaCf2yJv4-ZU36CvYvYU/exec";


  const materialBox = document.getElementById("material");

  const inspectionBody =
    document.getElementById("inspectionBody");


  let inspectionItems = [];


  // Load checklist master

  fetch(INSPECTION_ITEM_API)

    .then(response => response.json())

    .then(data => {

      inspectionItems = data;

    })

    .catch(error => {

      console.error(
        "Inspection Item Load Error:",
        error
      );

    });



  // เมื่อเลือก Material Type

  materialBox.addEventListener("change", () => {


    const materialType = materialBox.value;


    inspectionBody.innerHTML = "";


    if (!materialType) {

      return;

    }


    const checklist =
      inspectionItems.filter(item =>
        item.materialType === materialType
      );



    checklist.forEach((item, index) => {


      const row =
      document.createElement("tr");



      // Result Column

      let resultInput = "";



      if (item.resultType === "OKNGNA") {


        resultInput = `

          <select class="result">

            <option value="">
              Select
            </option>

            <option value="OK">
              OK
            </option>

            <option value="NG">
              NG
            </option>

            <option value="NA">
              NA
            </option>

          </select>

        `;


      } else if (item.resultType === "Value") {


        resultInput = `

          <input 
            type="text"
            class="result"
            placeholder="Enter Value">

        `;


      }



      row.innerHTML = `

        <td>
          ${item.itemNo}
        </td>


        <td>
          ${item.checkPoint}
        </td>


        <td>
          ${item.spec}
        </td>


        <td>
          ${item.checkType}
        </td>


        <td>
          ${resultInput}
        </td>


        <td>
          <input 
            type="text"
            class="remark"
            placeholder="Remark">
        </td>


      `;


      inspectionBody.appendChild(row);


    });


  });


});
