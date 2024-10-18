function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); // inbuilt js function to toggle class
    icon.classList.toggle("open"); 
}