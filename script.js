const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const messageButton = document.querySelector("[data-message]");
const toast = document.querySelector(".toast");
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

menuButton?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton?.setAttribute("aria-expanded", "false");
    });
});

messageButton?.addEventListener("click", () => {
    toast.textContent = "Здесь появляются новые идеи. Заглядывайте чаще!";
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 3500);
});
