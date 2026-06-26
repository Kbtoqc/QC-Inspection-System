document.addEventListener("DOMContentLoaded", () => {

  const requiredFields = [

    "inspectionDate",
    "inspector",
    "inspectionType",
    "material",
    "finalJudgement"

  ];

  requiredFields.forEach(id => {

    document
      .getElementById(id)
      .addEventListener("change", validateForm);

  });

  validateForm();

});


function validateForm() {

  const inspectionDate =
    document.getElementById("inspectionDate").value.trim();

  const inspector =
    document.getElementById("inspector").value.trim();

  const inspectionType =
    document.getElementById("inspectionType").value.trim();

  const material =
    document.getElementById("material").value.trim();

  const finalJudgement =
    document.getElementById("finalJudgement").value.trim();

  const saveButton =
    document.getElementById("saveInspection");

  const enable =

    inspectionDate !== "" &&
    inspector !== "" &&
    inspectionType !== "" &&
    material !== "" &&
    finalJudgement !== "";

  saveButton.disabled = !enable;

}
