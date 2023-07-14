const button = document.querySelector("#button");

button.onclick = () => {
  const height = Number(document.querySelector("#height").value);
  const width = Number(document.querySelector("#width").value);
  let ansBox = document.querySelector("#answer");
  ansBox.textContent = height * width;
}
