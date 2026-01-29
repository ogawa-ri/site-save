alert("JSは読み込まれています");

const list = document.getElementById("list");

function loadSites() {
  const sites = JSON.parse(localStorage.getItem("sites") || "[]");
  list.innerHTML = "";

  sites.forEach((site, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${site.url}" target="_blank">${site.url}</a><br>
      <small>${site.memo}</small><br>
      <button onclick="deleteSite(${index})">削除</button>
    `;
    list.appendChild(li);
  });
}

function saveSite() {
  const url = document.getElementById("url").value;
  const memo = document.getElementById("memo").value;

  if (!url) return alert("URLを入力してください");

  const sites = JSON.parse(localStorage.getItem("sites") || "[]");
  sites.push({ url, memo });

  localStorage.setItem("sites", JSON.stringify(sites));

  document.getElementById("url").value = "";
  document.getElementById("memo").value = "";

  loadSites();
}

function deleteSite(index) {
  const sites = JSON.parse(localStorage.getItem("sites"));
  sites.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(sites));
  loadSites();
}

loadSites();

// ===== Safari + PWA 判定（iOS対応 完全版） =====

// iOS判定
const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

// PWA（スタンドアロン）判定：iOSは navigator.standalone も見る
const isStandalone =
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

// Safariで、PWAじゃない場合に案内を出す
if (isIOS && !isStandalone) {
  alert("📌 このアプリはホーム画面に追加するとデータが保存されます");
}

if (isIOS && !isStandalone) {
  alert(" このアプリはホーム画面に追加するとデータが保存されます");
}



