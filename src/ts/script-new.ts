"use strict";

const form = (document.getElementById("form__triangle-calc") as HTMLFormElement);
if (!form) {
    console.error("Не знайдено форму!")
}
else form.addEventListener("submit", calculateTriangle);

const clearButton = (document.getElementById("form__clear-button") as HTMLButtonElement);
if (!clearButton) {
    console.error("Не знайдено кнопку очистки форми!")
}
else clearButton.addEventListener("click", clearForm);

const result = document.getElementById("resultTriangle") as HTMLParagraphElement;
if (!result) {
    console.error("Не знайдено результат!")
}

function checkTriangle(sideId:string):number|null|undefined {
    const sideTriangle:string = String((document.getElementById(sideId) as HTMLInputElement).value);

    const side = document.getElementById(sideId) as HTMLInputElement;

    if (!side) {
        console.error("Не знайдено поле для введення сторін трикутника!");
    }
    else side.value = sideTriangle + " см";

    if (!sideTriangle) return undefined;

    if (sideTriangle === "") {
        alert("Ви не ввели сторону трикутника!");
        return null;
    }
    const numberSideTriangle:number = Number(sideTriangle);

    if (numberSideTriangle <= 0) {
        alert("Сторона трикутника менше або = нулю!");
        (document.getElementById(sideId) as HTMLInputElement).value = "";
    }
    else return numberSideTriangle;

}

function calculateTriangle(event:Event):void {
    event.preventDefault();

    const aTriangle:number = Number(checkTriangle("aTriangle"));
    const bTriangle:number = Number(checkTriangle("bTriangle"));
    const cTriangle:number = Number(checkTriangle("cTriangle"));

    if (aTriangle < bTriangle + cTriangle && bTriangle < aTriangle + cTriangle && cTriangle < aTriangle + bTriangle) {
        if (aTriangle ** 2 === bTriangle ** 2 + cTriangle ** 2 || bTriangle ** 2 === cTriangle ** 2 + aTriangle ** 2 || cTriangle ** 2 === bTriangle ** 2 + aTriangle ** 2) {
            if (aTriangle ** 2 === bTriangle ** 2 + cTriangle ** 2) {
                result.textContent = "Ваш трикутник прямокутний з гіпотенузою " + aTriangle + " см";
            } else if (bTriangle ** 2 === cTriangle ** 2 + aTriangle ** 2) {
                result.textContent = "Ваш трикутник прямокутний з гіпотенузою " + bTriangle + " см";
            } else result.textContent = "Ваш трикутник прямокутний з гіпотенузою " + cTriangle + " см";
        }
        else if (aTriangle === bTriangle && aTriangle !== cTriangle || bTriangle === cTriangle && bTriangle !== aTriangle || cTriangle === aTriangle && cTriangle !== bTriangle) {
            if (aTriangle === bTriangle && aTriangle !== cTriangle) {
                result.textContent = "Ваш трикутник рівнобедрений з основою " + cTriangle + " см";
            } else if (bTriangle === cTriangle && bTriangle !== aTriangle) {
                result.textContent = "Ваш трикутник рівнобедрений з основою " + aTriangle + " см";
            } else result.textContent = "Ваш трикутник рівнобедрений з основою " + bTriangle + " см";
        }
        else if (aTriangle === bTriangle && aTriangle === cTriangle) {
            result.textContent = "Ваш трикутник рівносторонній!";
        }
        else result.textContent = "Ваш трикутник довільний";

        const perimetrTriangle:number = aTriangle + bTriangle + cTriangle;
        const halfPerimetr:number = perimetrTriangle / 2;
        const area:number = Math.sqrt(halfPerimetr * (halfPerimetr - aTriangle) * (halfPerimetr - bTriangle) * (halfPerimetr - cTriangle));

        const areaTriangle = document.getElementById("areaTriangle") as HTMLInputElement;

        if(!areaTriangle) {
            console.error("Не знайдено поле для введення площі трикутника!");
        }
        else areaTriangle.value = String(Math.round(area)) + " см²";

        const perimetrTriangleElement = document.getElementById("perimetrTriangle") as HTMLInputElement;
        if(!perimetrTriangleElement) {
            console.error("Не знайдено поле для введення площі трикутника!");
        }
        else perimetrTriangleElement.value = String(perimetrTriangle) + " см";
    }
    else result.textContent = "З даних сторін не можна скласти трикутник!";

    const triangle:{a:number, b:number, c:number, area:number, perimetr:number} = {
        a: aTriangle,
        b: bTriangle,
        c: cTriangle,
        area: (aTriangle * bTriangle) / 2,
        perimetr: aTriangle + bTriangle + cTriangle
    };
    console.log(triangle);
}

function clearForm(event:Event):void {
    event.preventDefault();

    if (confirm("Ви точно хочете очистити форму?")) {
        (document.getElementById("aTriangle") as HTMLInputElement).value = "";
        (document.getElementById("bTriangle") as HTMLInputElement).value = "";
        (document.getElementById("cTriangle") as HTMLInputElement).value = "";
        (document.getElementById("areaTriangle") as HTMLInputElement).value = "";
        (document.getElementById("perimetrTriangle") as HTMLInputElement).value = "";
        (document.getElementById("resultTriangle") as HTMLParagraphElement).textContent = "";
    }
}