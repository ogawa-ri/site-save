// ===== 画面要素 =====
const screenHome = document.getElementById("screen-home");
const screenList = document.getElementById("screen-list");
const screenRecommend = document.getElementById("screen-recommend");

// ===== ボタン =====
const toListBtn = document.getElementById("toListBtn");
const toRecommendBtn = document.getElementById("toRecommendBtn");
const backHomeFromList = document.getElementById("backHomeFromList");
const backHomeFromRecommend = document.getElementById("backHomeFromRecommend");

// ===== 画面切り替え関数 =====
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

// ===== 初期画面 =====
showScreen(screenHome);
