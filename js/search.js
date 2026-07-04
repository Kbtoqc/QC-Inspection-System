console.log("Search JS Loaded");

const SEARCH_API =
"https://script.google.com/macros/s/AKfycbx8YbMBRqHYwElWw0o5vLu_XiQd4ARR5-0k1WcVw3fRxBWVUTkIkhZD4yjw121pw5oZ/exec";


// ===============================
// โหลด Master Data (Dropdown)
// ===============================
document.addEventListener("DOMContentLoaded", async () => {
    await loadMasterData();
});

async function loadMasterData() {

    try {

        const res = await fetch(SEARCH_API, {
            method: "POST",
            body: JSON.stringify({
                action: "getMaster"
            })
        });

        const result = await res.json();

        if (result.status !== "success") return;

        // Inspection Type
        const inspectionType = document.getElementById("inspectionType");
        inspectionType.innerHTML = `<option value="">All</option>`;

        result.inspectionType.forEach(item => {
            inspectionType.innerHTML += `<option value="${item}">${item}</option>`;
        });

        // Material Type
        const materialType = document.getElementById("materialType");
        materialType.innerHTML = `<option value="">All</option>`;

        result.materialType.forEach(item => {
            materialType.innerHTML += `<option value="${item}">${item}</option>`;
        });

    } catch (err) {
        console.error("Master Load Error", err);
    }
}


// ===============================
// Search
// ===============================
async function searchInspection() {

    const request = {

        inspectionID: document.getElementById("inspectionID").value,
        soNo: document.getElementById("soNo").value,
        inspectionType: document.getElementById("inspectionType").value,
        materialType: document.getElementById("materialType").value,
        model: document.getElementById("model").value,
        serialNo: document.getElementById("serialNo").value,
        dateFrom: document.getElementById("dateFrom").value,
        dateTo: document.getElementById("dateTo").value

    };

    console.log("Send:", request);

    try {

        const response = await fetch(SEARCH_API, {
            method: "POST",
            body: JSON.stringify(request)
        });

        const result = await response.json();

        console.log("Result:", result);

        if (result.status !== "success") {
            document.getElementById("result").innerHTML =
                "Search Error : " + result.message;
            return;
        }

        let html = `
        <table>
        <tr>
            <th>Inspection ID</th>
            <th>Date</th>
            <th>SO No</th>
            <th>Customer</th>
            <th>Model</th>
            <th>Serial No</th>
            <th>Judgement</th>
            <th>Action</th>
        </tr>
        `;

        if (result.data.length === 0) {

            html += `
            <tr>
                <td colspan="8">No Data Found</td>
            </tr>
            `;

        } else {

            result.data.forEach(item => {

                html += `
                <tr>
                    <td>${item.inspectionID}</td>
                    <td>${item.inspectionDate}</td>
                    <td>${item.soNo}</td>
                    <td>${item.customer}</td>
                    <td>${item.model}</td>
                    <td>${item.serialNo}</td>
                    <td>${item.judgement}</td>
                    <td>
                        <button onclick="printInspection('${item.inspectionID}')">
                            Print
                        </button>

                        <button onclick="generateForm('${item.inspectionID}')">
                            Standard Form
                        </button>
                    </td>
                </tr>
                `;

            });
        }

        html += "</table>";

        document.getElementById("result").innerHTML = html;

    } catch (error) {
        console.error(error);
        alert("Search Error");
    }
}


// ===============================
// Print Report
// ===============================
function printInspection(id) {
    window.open("print.html?id=" + id, "_blank");
}


// ===============================
// Generate Standard Form
// ===============================
async function generateForm(id) {

    try {

        const response = await fetch(SEARCH_API, {
            method: "POST",
            body: JSON.stringify({
                action: "generateTemplate",
                inspectionID: id
            })
        });

        const result = await response.json();

        if (result.status === "success") {
            window.open(result.url, "_blank");
        } else {
            alert(result.message);
        }

    } catch (err) {
        console.error(err);
        alert("Generate Error");
    }
}
