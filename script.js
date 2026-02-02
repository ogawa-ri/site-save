alert("script.js 読み込まれた");

// 要素取得
const urlInput = document.getElementById("urlInput");
const saveBtn = document.getElementById("saveBtn");
const list = document.getElementById("list");

// 保存されているデータを取得
let savedSites = JSON.parse(localStorage.getItem("sites")) || [];

// 初期表示
renderList();

// 保存ボタン
saveBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();

  if (url === "") {
    alert("URLを入力してください");
    return;
  }

  savedSites.push(url);
  localStorage.setItem("sites", JSON.stringify(savedSites));

  urlInput.value = "";
  renderList();
});

// リスト表示
function renderList() {
  list.innerHTML = "";

  savedSites.forEach((url, index) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = url;
    a.textContent = url;
    a.target = "_blank";

    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.addEventListener("click", () => {
      savedSites.splice(index, 1);
      localStorage.setItem("sites", JSON.stringify(savedSites));
      renderList();
    });

    li.appendChild(a);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

