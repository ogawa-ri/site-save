// ===== 画面 =====
const screenHome = document.getElementById("screen-home");
const screenList = document.getElementById("screen-list");
const screenRecommend = document.getElementById("screen-recommend");

// ===== ボタン =====
const saveBtn = document.getElementById("saveBtn");
const toListBtn = document.getElementById("toListBtn");
const toRecommendBtn = document.getElementById("toRecommendBtn");
const backHomeFromList = document.getElementById("backHomeFromList");
const backHomeFromRecommend = document.getElementById("backHomeFromRecommend");

// ===== 入力 =====
const input = document.getElementById("urlInput");

// ===== データ =====
let urls = JSON.parse(localStorage.getItem("urls")) || [];

// ===== 画面切り替え =====
function showScreen(screen) {
  screenHome.style.display = "none";
  screenList.style.display = "none";
  screenRecommend.style.display = "none";
  screen.style.display = "block";
}

// ===== 保存処理 =====
saveBtn.addEventListener("click", () => {
  const url = input.value.trim();

  if (!url) {
    alert("URLを入力してください");
    return;
  }

  urls.push(url);
  localStorage.setItem("urls", JSON.stringify(urls));

  input.value = "";
  alert("保存しました");

  showScreen(screenList);
});

// ===== 画面遷移 =====
toListBtn.addEventListener("click", () => showScreen(screenList));
toRecommendBtn.addEventListener("click", () => showScreen(screenRecommend));
backHomeFromList.addEventListener("click", () => showScreen(screenHome));
backHomeFromRecommend.addEventListener("click", () => showScreen(screenHome));

// ===== 初期 =====
showScreen(screenHome);
