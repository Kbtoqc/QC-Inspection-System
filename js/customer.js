fetch("https://script.google.com/macros/s/AKfycbzv1IRXeBSLB1S9y-0XtcJk9m181o_UIvPctafuUKOyocYoipFbxH1z413JcGXsfR0UQg/exec")

.then(response => response.json())

.then(data => {

    let box = document.getElementById("customer");

    data.forEach(item => {

        let option = document.createElement("option");

        option.text = item;
        option.value = item;

        box.add(option);

    });

});
