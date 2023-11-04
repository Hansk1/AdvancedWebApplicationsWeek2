const submitBtn = document.getElementById("submit-data");

submitBtn.addEventListener("click", function () {
    const textInput = document.getElementById("input-text");
    console.log(textInput.value);
    fetch("http://localhost:3000/list", {
        method: "post",
        headers: {
            "Content-type": "application/json",
        },
        body: '{ "text": "' + textInput.value + '"}',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
});
