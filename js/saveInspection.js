console.log("Save JS Loaded");

const saveButton = document.getElementById("saveInspection");

console.log("Save Button:", saveButton);

if (saveButton) {

  saveButton.onclick = function () {

    console.log("Save Button Clicked");

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

    console.log("========== HEADER ==========");
    console.table(header);

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

    console.log("========== DETAIL ==========");
    console.table(details);

    console.log("Header Record :", 1);
    console.log("Detail Record :", details.length);

  };

}
