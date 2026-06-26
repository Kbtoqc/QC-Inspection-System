function validateForm() {

  const inspectionDate = document.getElementById("inspectionDate").value;
  const inspector = document.getElementById("inspector").value;
  const inspectionType = document.getElementById("inspectionType").value;
  const material = document.getElementById("material").value;
  const finalJudgement = document.getElementById("finalJudgement").value;

  const saveButton = document.getElementById("saveInspection");

  const isValid =
    inspectionDate !== "" &&
    inspector !== "" &&
    inspectionType !== "" &&
    material !== "" &&
    finalJudgement !== "";

  saveButton.disabled = !isValid;

}

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("saveInspection").disabled = true;

  [
    "inspectionDate",
    "inspector",
    "inspectionType",
    "material",
    "finalJudgement"
  ].forEach(id => {

    document
      .getElementById(id)
      .addEventListener("change", validateForm);

  });

});
