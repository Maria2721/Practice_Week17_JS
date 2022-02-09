function calcRandom() {
    document.getElementById("generate").innerHTML = "Сгенерировали: ";
    document.getElementById("min").innerHTML = "Минимальное: ";
    document.getElementById("max").innerHTML = "Максимальное: ";
    document.getElementById("average").innerHTML = "Среднее арифметическое: ";
    document.getElementById("sum").innerHTML = "Сумма чисел: ";
    document.getElementById("mult").innerHTML = "Произведение чисел: ";

    let arrayNumber = [];
    for (let i = 0; i < 10; i++) {
        arrayNumber.push(Math.round((Math.random() * (10 + 10)) - 10));
    }
    document.getElementById("generate").innerHTML += arrayNumber.join(" ");

    let arrayMin = Math.min.apply(Math, arrayNumber);
    document.getElementById("min").innerHTML += arrayMin;
    let arrayMax = Math.max.apply(Math, arrayNumber);
    document.getElementById("max").innerHTML += arrayMax;

    /* Второй способ нахождения min max через сортировку массива, 
    тогда min = arraySort[0], max = arraySort[9]
    
    let arraySort = arrayNumber.sort(function (a, b) {
        return a - b
    })
    console.log(arraySort); */

    let arraySum = 0;
    for (let i = 0; i < 10; i++) {
        arraySum = arraySum + arrayNumber[i];
    }
    document.getElementById("average").innerHTML += arraySum / 10;
    document.getElementById("sum").innerHTML += arraySum;

    let arrayMult = 1;
    for (let i = 0; i < 10; i++) {
        arrayMult = arrayMult * arrayNumber[i];
    }
    document.getElementById("mult").innerHTML += arrayMult;
}