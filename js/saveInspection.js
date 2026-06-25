const SAVE_API =
"https://script.google.com/macros/s/AKfycbyAGKN_dGTq2GtmPVznU8EccXFlqhXfd2o9isaIoirQLAhU7SHN6VWhScGaWPDuixpz/exec";


document.addEventListener("DOMContentLoaded", () => {

  const saveButton =
    document.getElementById("saveInspection");


  saveButton.addEventListener("click", saveInspection);

});


async function saveInspection() {

  const saveButton =
    document.getElementById("saveInspection");


  saveButton.disabled = true;
  saveButton.innerText = "Saving...";


  try {

    const details = [];

    document
      .querySelectorAll("#inspectionBody tr")
      .forEach(row => {

        details.push({

          itemNo:
            row.cells[0].innerText,

          checkPoint:
            row.cells[1].innerText,

          spec:
            row.cells[2].innerText,

          checkType:
            row.cells[3].innerText,

          result:
            row.querySelector(".result")?.value || "",

          remark:
            row.querySelector(".remark")?.value || ""

        });

      });


    const payload = {

      inspectionDate:
        document.getElementById("inspectionDate").value,

      soNo:
        document.getElementById("soNo").value,

      poNo:
        document.getElementById("poNo").value,

      inspector:
        document.getElementById("inspector").value,

      customer:
        document.getElementById("customer").value,

      supplier:
        document.getElementById("supplier").value,

      inspectionType:
        document.getElementById("inspectionType").value,

      materialType:
        document.getElementById("material").value,

      model:
        document.getElementById("model").value,

      serialNo:
        document.getElementById("serialNo").value,

      finalJudgement:
        document.getElementById("finalJudgement").value,

      finalRemark:
        document.getElementById("finalRemark").value,

      details: details

    };


    const response = await fetch(
      SAVE_API,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );


    const result =
      await response.json();


    if (result.success) {

      alert(
        "Saved Successfully\n\n" +
        result.inspectionId
      );

      clearForm();

    } else {

      alert(
        "Save Failed\n\n" +
        result.message
      );

      saveButton.disabled = false;
      saveButton.innerText =
        "Save Inspection";

    }

  }

  catch (error) {

    console.error(error);

    alert(
      "Save Failed\n\n" +
      error
    );

    saveButton.disabled = false;
    saveButton.innerText =
      "Save Inspection";

  }

}


function clearForm() {

  document.getElementById("inspectionDate").value = "";
  document.getElementById("soNo").value = "";
  document.getElementById("poNo").value = "";
  document.getElementById("inspector").selectedIndex = 0;
  document.getElementById("customer").selectedIndex = 0;
  document.getElementById("supplier").selectedIndex = 0;
  document.getElementById("inspectionType").selectedIndex = 0;
  document.getElementById("material").selectedIndex = 0;
  document.getElementById("model").value = "";
  document.getElementById("serialNo").value = "";
  document.getElementById("finalJudgement").selectedIndex = 0;
  document.getElementById("finalRemark").value = "";

  document.getElementById("inspectionBody").innerHTML = "";

  const photoInput =
    document.getElementById("inspectionPhotos");

  if (photoInput) {
    photoInput.value = "";
  }


  const saveButton =
    document.getElementById("saveInspection");

  saveButton.disabled = false;
  saveButton.innerText =
    "Save Inspection";

}
