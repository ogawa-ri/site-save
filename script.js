const input = document.getElementById("urlInput");
const saveBtn = document.getElementById("saveBtn");
const list = document.getElementById("list");

let urls = JSON.parse(localStorage.getItem("urls")) || [];

function render() {
  list.innerHTML = "";
  urls.forEach((url) => {
    const li = document.createElement("li");
    li.textContent = url;
    list.appendChild(li);
  });
}

saveBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (!url) return;

  urls.unshift(url);
  localStorage.setItem("urls", JSON.stringify(urls));
  input.value = "";
  render();
});

render();
