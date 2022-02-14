let comments = [];

function addComment() {
    let myCom = document.getElementById("newComments").value;
    comments.push(myCom);
    checkSpam();

    generateComments();
}

function checkSpam() {
    for (let i = 0; i < comments.length; i++) {
        let spamV = comments[i].replace(/viagra/gi, "***");
        let spamX = spamV.replace(/XXX/gi, "***")
        comments[i] = spamX;
    }
}

function generateComments() {
    let optionsString = "";
    for (let comment of comments) {
        optionsString += `<div>${comment}</div>`
    }

    document.getElementById("container").innerHTML = optionsString;
    document.getElementById("newComments").value = "";
}

document.addEventListener("DOMContentLoaded",
    function () {
        generateComments();
    });