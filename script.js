// ===== 画面 =====
const screenHome = document.getElementById("screen-home");
const screenList = document.getElementById("screen-list");
const screenRecommend = document.getElementById("screen-recommend");

// ===== ボタン =====
const toListBtn = document.getElementById("toListBtn");
const toRecommendBtn = document.getElementById("toRecommendBtn");
const backHomeFromList = document.getElementById("backHomeFromList");
const backHomeFromRecommend = document.getElementById("backHomeFromRecommend");
const saveBtn = document.getElementById("saveBtn");

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

// ===== イベント =====
toListBtn.addEventListener("click", () => {
  showScreen(screenList);
});

toRecommendBtn.addEventListener("click", () => {
  showScreen(screenRecommend);
});

backHomeFromList.addEventListener("click", () => {
  showScreen(screenHome);
});

backHomeFromRecommend.addEventListener("click", () => {
  showScreen(screenHome);
});

saveBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (!url) return;

  urls.push(url);
  localStorage.setItem("urls", JSON.stringify(urls));
  input.value = "";

  // 保存したら一覧へ
  showScreen(screenList);
});

// ===== 初期 =====
showScreen(screenHome);
