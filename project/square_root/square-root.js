const button = document.querySelector("#button");

button.onclick = () => {
  const width = Number(document.querySelector("#width").value);
  let ansBox = document.querySelector("#answer");
  ansBox.textContent = (Math.sqrt(width)).toFixed(2);
}
