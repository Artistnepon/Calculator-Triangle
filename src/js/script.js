"use strict";

document.getElementById("form__triangle-calc").addEventListener("submit", function (event) {return calculateTriangle(event);});
document.getElementById("form__clear-button").addEventListener("click", function (event) {return clearForm(event);});

function checkTriangle(sideId) {
  let sideTriangle = document.getElementById(sideId).value;
  if (sideTriangle === "") {
    alert("Ви не ввели сторону трикутника!");
    return null;
  } else if (isNaN(sideTriangle)) {
    alert("Сторона трикутника має бути числом!");
    document.getElementById(sideId).value = null;
    return null;
  }
  sideTriangle = Number(sideTriangle);
  if (sideTriangle <= 0) {
    alert("Сторона трикутника менше або = нулю!");
    document.getElementById(sideId).value = null;
    return null;
  }
  return sideTriangle;
}

function calculateTriangle(event) {
  event.preventDefault();

  let aTriangle = checkTriangle("aTriangle");
  let bTriangle = checkTriangle("bTriangle");
  let cTriangle = checkTriangle("cTriangle");

  if (aTriangle < bTriangle + cTriangle && bTriangle < aTriangle + cTriangle && cTriangle < aTriangle + bTriangle) {
    if (aTriangle ** 2 === bTriangle ** 2 + cTriangle ** 2 || bTriangle ** 2 === cTriangle ** 2 + aTriangle ** 2 || cTriangle ** 2 === bTriangle ** 2 + aTriangle ** 2) {
      if (aTriangle ** 2 === bTriangle ** 2 + cTriangle ** 2) {
        document.getElementById("resultTriangle").textContent = "Ваш трикутник прямокутний з гіпотенузою " + aTriangle + " см";
      } else if (bTriangle ** 2 === cTriangle ** 2 + aTriangle ** 2) {
        document.getElementById("resultTriangle").textContent = "Ваш трикутник прямокутний з гіпотенузою " + bTriangle + " см";
      } else {
        document.getElementById("resultTriangle").textContent = "Ваш трикутник прямокутний з гіпотенузою " + cTriangle + " см";
      }
    } else if (aTriangle === bTriangle && aTriangle !== cTriangle || bTriangle === cTriangle && bTriangle !== aTriangle || cTriangle === aTriangle && cTriangle !== bTriangle) {
      if (aTriangle === bTriangle && aTriangle !== cTriangle) {
        document.getElementById("resultTriangle").textContent = "Ваш трикутник рівнобедрений з основою " + cTriangle + " см";
      } else if (bTriangle === cTriangle && bTriangle !== aTriangle) {
        document.getElementById("resultTriangle").textContent = "Ваш трикутник рівнобедрений з основою " + aTriangle + " см";
      } else {
        document.getElementById("resultTriangle").textContent = "Ваш трикутник рівнобедрений з основою " + bTriangle + " см";
      }
    } else if (aTriangle === bTriangle && aTriangle === cTriangle) {
      document.getElementById("resultTriangle").textContent = "Ваш трикутник рівносторонній!";
    } else {
      document.getElementById("resultTriangle").textContent = "Ваш трикутник довільний";
    }
    let perimetrTriangle = aTriangle + bTriangle + cTriangle;
    document.getElementById("perimetrTriangle").value = perimetrTriangle + " см";
    let halfPerimetr = perimetrTriangle / 2;
    let halfArea = halfPerimetr * (halfPerimetr - aTriangle) * (halfPerimetr - bTriangle) * (halfPerimetr - cTriangle);
    let areaTriangle = Math.sqrt(halfArea);
    document.getElementById("areaTriangle").value = Math.round(areaTriangle) + " см²";
    document.getElementById("aTriangle").value = aTriangle + " см";
    document.getElementById("bTriangle").value = bTriangle + " см";
    document.getElementById("cTriangle").value = cTriangle + " см";
  } else {
    alert("З даних сторін не можна скласти трикутник!");
  }
  let triangle = {
    a: document.getElementById("aTriangle").value,
    b: document.getElementById("bTriangle").value,
    c: document.getElementById("cTriangle").value,
    area: document.getElementById("areaTriangle").value,
    perimetr: document.getElementById("perimetrTriangle").value
  };
  console.log(triangle);
}
function clearForm(event) {
  event.preventDefault();
  if (confirm("Ви точно хочете очистити форму?")) {
    document.getElementById("aTriangle").value = null;
    document.getElementById("bTriangle").value = null;
    document.getElementById("cTriangle").value = null;
    document.getElementById("areaTriangle").value = null;
    document.getElementById("perimetrTriangle").value = null;
    document.getElementById("resultTriangle").textContent = null;
  }
}