const boxCelsius = document.getElementById("celsius");
const boxFar = document.getElementById("far");

boxCelsius.addEventListener("input", () => {
    boxFar.value = (boxCelsius.value * 9 / 5) + 32;
});

boxFar.addEventListener("input", () => {
    boxCelsius.value = (boxFar.value - 32) * (5 / 9);
});
