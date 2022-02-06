function getConclusion() {
    let inputName = (document.getElementById("userName").value).trim().toLowerCase();
    let arrayNames = inputName.split(' ');
    let arrayNamesNotEmpty = arrayNames.filter(el => el);
    let filteredArrayName = [];

    for (let arrayName of arrayNamesNotEmpty) {
        let userNamesOnly = [];
        for (let i = 0; i < arrayName.length; i++) {
            if (isNaN(arrayName[i])) {
                userNamesOnly.push(arrayName[i]);
            }
        }
        let filteredName = userNamesOnly.join('');

        let filteredNameUp = filteredName[0].toUpperCase() + filteredName.slice(1);
        filteredArrayName.push(filteredNameUp);
    }

    document.getElementById("lastname").value = filteredArrayName[0];
    document.getElementById("name").value = filteredArrayName[1];
    document.getElementById("patronymic").value = filteredArrayName[2];

    document.getElementById("userName").value = "";
}