const txt = document.querySelector("#txt");
const changes = document.querySelector("span");

txt.addEventListener("input", () => {
  const ntx = txt.value;
  changes.textContent = `Total Characters: ${ntx.length}`;
});
