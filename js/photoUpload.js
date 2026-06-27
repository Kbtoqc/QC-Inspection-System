console.log("Photo Upload JS Loaded");

const params = new URLSearchParams(window.location.search);
const inspectionID = params.get("id");

const inspectionBox = document.getElementById("inspectionID");
const uploadButton = document.getElementById("uploadButton");
const photoInput = document.getElementById("photos");
const fileList = document.getElementById("fileList");
const statusBox = document.getElementById("status");

const PHOTO_UPLOAD_API =
"https://script.google.com/macros/s/AKfycbyx5BWuoCALxEIkaJN7a93NOtHSYD7t8XDPjkwTcEtXshmDwWZ14OSILhbBr5Z3WFdo2A/exec";

if (inspectionID) {

    inspectionBox.value = inspectionID;
    inspectionBox.readOnly = true;

} else {

    alert("Invalid Inspection ID");
    uploadButton.disabled = true;

}

photoInput.onchange = function () {

    fileList.innerHTML = "";

    Array.from(photoInput.files).forEach(file => {

        const li = document.createElement("li");
        li.innerText = file.name;
        fileList.appendChild(li);

    });

};

uploadButton.onclick = async function () {

    if (!inspectionID) {

        alert("Inspection ID Missing");
        return;

    }

    if (photoInput.files.length === 0) {

        alert("Please select photo");
        return;

    }

    uploadButton.disabled = true;
    statusBox.innerHTML = "Uploading...";

    try {

        for (let i = 0; i < photoInput.files.length; i++) {

            const file = photoInput.files[i];

            const base64 = await new Promise(resolve => {

                const reader = new FileReader();

                reader.onload = function () {

                    resolve(reader.result.split(",")[1]);

                };

                reader.readAsDataURL(file);

            });

            await fetch(PHOTO_UPLOAD_API, {

                method: "POST",

                body: JSON.stringify({

                    inspectionID: inspectionID,
                    fileNo: i + 1,
                    fileName: file.name,
                    mimeType: file.type,
                    base64: base64

                })

            });

            statusBox.innerHTML =
                "Uploading " + (i + 1) + " / " + photoInput.files.length;

        }

        alert("Upload Complete");

        // กลับไปหน้าแรกและเคลียร์ฟอร์ม
        window.location.href =
        "index.html?finish=1";

    }
    catch (err) {

        console.error(err);

        alert("Upload Failed");

        uploadButton.disabled = false;

    }

};
