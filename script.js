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
