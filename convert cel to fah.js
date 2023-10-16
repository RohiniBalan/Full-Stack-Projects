function convert() {
  let celval = Number(document.getElementById("input").value);
  let fahval = celval * (9 / 5) + 32;
  let convert = document.getElementById("result");
  convert.innerHTML = fahval.toFixed(2) + "F";
}
