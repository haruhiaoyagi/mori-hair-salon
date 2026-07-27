// スマートフォン用メニューの開閉
const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");
const menuLabel = menuButton.querySelector(".sr-only");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  globalNav.classList.toggle("is-open", !isOpen);
  menuLabel.textContent = isOpen ? "メニューを開く" : "メニューを閉じる";
});

// メニュー内のリンクを選んだら、メニューを自動で閉じる
globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    globalNav.classList.remove("is-open");
    menuLabel.textContent = "メニューを開く";
  });
});

// Escapeキーでもメニューを閉じられるようにする
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && globalNav.classList.contains("is-open")) {
    menuButton.setAttribute("aria-expanded", "false");
    globalNav.classList.remove("is-open");
    menuLabel.textContent = "メニューを開く";
    menuButton.focus();
  }
});

// フッターの年を自動更新
document.getElementById("current-year").textContent = new Date().getFullYear();

// ポートフォリオ用ダミーリンクの案内
const demoToast = document.querySelector(".demo-toast");
let toastTimer;

document.querySelectorAll("[data-demo-link]").forEach((link) => {
  link.addEventListener("click", () => {
    demoToast.setAttribute("aria-hidden", "false");
    demoToast.classList.add("is-visible");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      demoToast.classList.remove("is-visible");
      demoToast.setAttribute("aria-hidden", "true");
    }, 3200);
  });
});
