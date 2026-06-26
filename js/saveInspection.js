console.log("Save JS Loaded");

const SAVE_API =
  "https://script.google.com/macros/s/AKfycbyAGKN_dGTq2GtmPVznU8EccXFlqhXfd2o9isaIoirQLAhU7SHN6VWhScGaWPDuixpz/exec";

const saveButton = document.getElementById("saveInspection");

console.log("Save Button:", saveButton);

if (saveButton) {

  saveButton.onclick = async function () {

    const header = {

      inspectionDate: document.getElementById("inspectionDate").value,

      soNo: document.getElementById("soNo").value,

      poNo: document.getElementById("poNo").value,

      inspector: document.getElementById("inspector").value,

      customer: document.getElementById("customer").value,

      supplier: document.getElementById("supplier").value,

      inspectionType: document.getElementById("inspectionType").value,

      materialType: document.getElementById("material").value,

      model: document.getElementById("model").value,

      serialNo: document.getElementById("serialNo").value,

      finalJudgement: document.getElementById("finalJudgement").value,

      finalRemark: document.getElementById("finalRemark").value

    };


    const details = [];

    document.querySelectorAll("#inspectionBody tr").forEach(row => {

      details.push({

        itemNo: row.cells[0].innerText,

        checkPoint: row.cells[1].innerText,

        spec: row.cells[2].innerText,

        checkType: row.cells[3].innerText,

        result: row.querySelector(".result").value,

        remark: row.querySelector(".remark").value

      });

    });


    const data = {

      header: header,

      details: details

    };

    console.log(data);

    saveButton.disabled = true;
    saveButton.innerText = "Saving...";

    try {

      const response = await fetch(SAVE_API, {

        method: "POST",

        body: JSON.stringify(data)

      });

      const result = await response.text();

      alert(result);

    } catch (error) {

      console.error(error);

      alert("Save Failed");

    }

    saveButton.disabled = false;
    saveButton.innerText = "Save Inspection";

  };

}
