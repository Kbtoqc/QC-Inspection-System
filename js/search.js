console.log("Search JS Loaded");

const SEARCH_API =
"https://script.google.com/macros/s/AKfycbx8YbMBRqHYwElWw0o5vLu_XiQd4ARR5-0k1WcVw3fRxBWVUTkIkhZD4yjw121pw5oZ/exec";

async function searchInspection() {

    const request = {

        inspectionID: document.getElementById("inspectionID").value,
        soNo: document.getElementById("soNo").value,
        inspectionType: document.getElementById("inspectionType").value,
        model: document.getElementById("model").value,
        serialNo: document.getElementById("serialNo").value,
        dateFrom: document.getElementById("dateFrom").value,
        dateTo: document.getElementById("dateTo").value

    };

    console.log(request);

    try {

        const response = await fetch(SEARCH_API, {

            method: "POST",
            body: JSON.stringify(request)

        });

        const result = await response.json();

        console.log(result);

        document.getElementById("result").innerHTML =
            "<pre>" + JSON.stringify(result, null, 2) + "</pre>";

    }
    catch (err) {

        console.error(err);

        alert("Search Error");

    }

}
