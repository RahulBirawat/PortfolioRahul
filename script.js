let menu_btn = document.querySelector(".menu_bar img");
let close_btn = document.querySelector(".close_btn");
let nav_bar = document.querySelector(".nav_bar");
let nav_icons = document.querySelector(".nav_icons");
let contact_btn = document.querySelector("#contact_btn");
let logo = document.querySelector(".nav_bar h1");
console.log(logo);
menu_btn.addEventListener("click" , () => {
    nav_bar.style.height = "auto";
    nav_bar.style.width = "100%";
    nav_bar.style.display = "flex";
    nav_bar.style.justifyContent = "center";
    nav_bar.style.alignItems = "center";
    nav_bar.style.flexDirection = "column";
    nav_bar.style.backgroundColor = "white";
    nav_bar.style.gap = "4rem";
    nav_bar.style.position = "fixed";
    nav_bar.style.top = "0";
    nav_bar.style.left = "0";
    nav_bar.style.zIndex = "100";
    nav_icons.style.display = "flex";
    nav_icons.style.justifyContent = "center";
    nav_icons.style.alignItems = "center";
    nav_icons.style.flexDirection = "column";
    menu_btn.style.display = "none";
    close_btn.style.display = "block";
    close_btn.style.position = "relative";
    close_btn.style.top = "0";
    close_btn.style.right = "0";
    close_btn.style.left = "8rem";
    close_btn.style.float = "right";
    contact_btn.style.display = "block";
})
close_btn.addEventListener("click", () => {
    nav_icons.style.display = "none";
    contact_btn.style.display = "none";
    menu_btn.style.display = "block";
    close_btn.style.display = "none";
    menu_btn.style.top = "0";
    menu_btn.style.right = "0";
    menu_btn.style.left = "8rem";
    menu_btn.style.float = "right";
    nav_bar.style.display = "flex";
    nav_bar.style.flexDirection = "row";
    menu_btn.style.width = "80%";
});
