"use strict";
var form = document.getElementById("form__triangle-calc");
if (!form) {
    console.error("Не знайдено форму!");
} else form.addEventListener("submit", calculateTriangle);
var clearButton = document.getElementById("form__clear-button");
if (!clearButton) {
    console.error("Не знайдено кнопку очистки форми!");
} else clearButton.addEventListener("click", clearForm);
var result = document.getElementById("resultTriangle");
if (!result) {
    console.error("Не знайдено результат!");
}
function checkTriangle(sideId) {
    var sideTriangle = String(document.getElementById(sideId).value);
    var side = document.getElementById(sideId);
    if (!side) {
        console.error("Не знайдено поле для введення сторін трикутника!");
    } else side.value = sideTriangle + " см";
    if (!sideTriangle) return undefined;
    if (sideTriangle === "") {
        alert("Ви не ввели сторону трикутника!");
        return null;
    }
    var numberSideTriangle = Number(sideTriangle);
    if (numberSideTriangle <= 0) {
        alert("Сторона трикутника менше або = нулю!");
        document.getElementById(sideId).value = "";
    } else return numberSideTriangle;
}
function calculateTriangle(event) {
    event.preventDefault();
    var aTriangle = Number(checkTriangle("aTriangle"));
    var bTriangle = Number(checkTriangle("bTriangle"));
    var cTriangle = Number(checkTriangle("cTriangle"));
    if (aTriangle < bTriangle + cTriangle && bTriangle < aTriangle + cTriangle && cTriangle < aTriangle + bTriangle) {
        if (Math.pow(aTriangle, 2) === Math.pow(bTriangle, 2) + Math.pow(cTriangle, 2) || Math.pow(bTriangle, 2) === Math.pow(cTriangle, 2) + Math.pow(aTriangle, 2) || Math.pow(cTriangle, 2) === Math.pow(bTriangle, 2) + Math.pow(aTriangle, 2)) {
            if (Math.pow(aTriangle, 2) === Math.pow(bTriangle, 2) + Math.pow(cTriangle, 2)) {
                result.textContent = "Ваш трикутник прямокутний з гіпотенузою " + aTriangle + " см";
            } else if (Math.pow(bTriangle, 2) === Math.pow(cTriangle, 2) + Math.pow(aTriangle, 2)) {
                result.textContent = "Ваш трикутник прямокутний з гіпотенузою " + bTriangle + " см";
            } else result.textContent = "Ваш трикутник прямокутний з гіпотенузою " + cTriangle + " см";
        } else if (aTriangle === bTriangle && aTriangle !== cTriangle || bTriangle === cTriangle && bTriangle !== aTriangle || cTriangle === aTriangle && cTriangle !== bTriangle) {
            if (aTriangle === bTriangle && aTriangle !== cTriangle) {
                result.textContent = "Ваш трикутник рівнобедрений з основою " + cTriangle + " см";
            } else if (bTriangle === cTriangle && bTriangle !== aTriangle) {
                result.textContent = "Ваш трикутник рівнобедрений з основою " + aTriangle + " см";
            } else result.textContent = "Ваш трикутник рівнобедрений з основою " + bTriangle + " см";
        } else if (aTriangle === bTriangle && aTriangle === cTriangle) {
            result.textContent = "Ваш трикутник рівносторонній!";
        } else result.textContent = "Ваш трикутник довільний";
        var perimetrTriangle = aTriangle + bTriangle + cTriangle;
        var halfPerimetr = perimetrTriangle / 2;
        var area = Math.sqrt(halfPerimetr * (halfPerimetr - aTriangle) * (halfPerimetr - bTriangle) * (halfPerimetr - cTriangle));
        var areaTriangle = document.getElementById("areaTriangle");
        if (!areaTriangle) {
            console.error("Не знайдено поле для введення площі трикутника!");
        } else areaTriangle.value = String(Math.round(area)) + " см²";
        var perimetrTriangleElement = document.getElementById("perimetrTriangle");
        if (!perimetrTriangleElement) {
            console.error("Не знайдено поле для введення площі трикутника!");
        } else perimetrTriangleElement.value = String(perimetrTriangle) + " см";
    } else result.textContent = "З даних сторін не можна скласти трикутник!";
    var triangle = {
        a: aTriangle,
        b: bTriangle,
        c: cTriangle,
        area: aTriangle * bTriangle / 2,
        perimetr: aTriangle + bTriangle + cTriangle
    };
    console.log(triangle);
}
function clearForm(event) {
    event.preventDefault();
    if (confirm("Ви точно хочете очистити форму?")) {
        document.getElementById("aTriangle").value = "";
        document.getElementById("bTriangle").value = "";
        document.getElementById("cTriangle").value = "";
        document.getElementById("areaTriangle").value = "";
        document.getElementById("perimetrTriangle").value = "";
        document.getElementById("resultTriangle").textContent = "";
    }
}