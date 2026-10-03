function getPages() {
    return document.querySelectorAll("[data-page]");
}

function getBottomNavigation() {
    return document.querySelector(".bottom-navigation");
}

export {
    getPages,
    getBottomNavigation
};