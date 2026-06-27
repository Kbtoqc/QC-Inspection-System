console.log("Photo Upload JS Loaded");

const uploadButton = document.getElementById("uploadButton");
const photoInput = document.getElementById("photos");
const fileList = document.getElementById("fileList");
const statusBox = document.getElementById("status");

const PHOTO_UPLOAD_API =
"https://SCRIPT_URL";

photoInput.addEventListener("change", function () {

    fileList.innerHTML = "";

    Array.from(this.files).forEach(file => {

        const li = document.createElement("li");
        li.innerText = file.name;

        fileList.appendChild(li);

    });

});

uploadButton.onclick = async function () {

    const inspectionID =
        document.getElementById("inspectionID").value.trim();

    if (inspectionID === "") {

        alert("Please enter Inspection ID");
        return;

    }

    if (photoInput.files.length === 0) {

        alert("Please select photo");
        return;

    }

    uploadButton.disabled = true;

    statusBox.innerHTML = "Uploading...";

    for (let i = 0; i < photoInput.files.length; i++) {

        const file = photoInput.files[i];

        const reader = new FileReader();

        const base64 = await new Promise(resolve => {

            reader.onload = () => {

                resolve(reader.result.split(",")[1]);

            };

            reader.readAsDataURL(file);

        });

        const data = {

            inspectionID: inspectionID,

            fileNo: i + 1,

            fileName: file.name,

            mimeType: file.type,

            base64: base64

        };

        const response = await fetch(PHOTO_UPLOAD_API, {

            method: "POST",

            body: JSON.stringify(data)

        });

        const result = await response.text();

        statusBox.innerHTML =
            "Uploading " +
            (i + 1) +
            " / " +
            photoInput.files.length +
            "<br>" +
            result;

    }

    alert("Upload Complete");

    document.getElementById("inspectionID").value = "";
    photoInput.value = "";
    fileList.innerHTML = "";
    statusBox.innerHTML = "";

    uploadButton.disabled = false;

};
