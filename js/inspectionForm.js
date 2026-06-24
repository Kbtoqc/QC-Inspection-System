function createResultInput(resultType, itemNo) {

    let container = document.createElement("div");


    if (resultType === "OKNGNA") {

        let ok = document.createElement("input");
        ok.type = "radio";
        ok.name = "result_" + itemNo;
        ok.value = "OK";

        let okLabel = document.createElement("label");
        okLabel.textContent = "OK";


        let ng = document.createElement("input");
        ng.type = "radio";
        ng.name = "result_" + itemNo;
        ng.value = "NG";

        let ngLabel = document.createElement("label");
        ngLabel.textContent = "NG";


        let na = document.createElement("input");
        na.type = "radio";
        na.name = "result_" + itemNo;
        na.value = "N/A";

        let naLabel = document.createElement("label");
        naLabel.textContent = "N/A";


        container.appendChild(ok);
        container.appendChild(okLabel);

        container.appendChild(ng);
        container.appendChild(ngLabel);

        container.appendChild(na);
        container.appendChild(naLabel);


    } else if (resultType === "Value") {


        let input = document.createElement("input");

        input.type = "text";
        input.placeholder = "Enter value";

        input.id = "result_" + itemNo;


        container.appendChild(input);

    }


    return container;

}
