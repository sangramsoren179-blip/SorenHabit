function hideMoreOptionsMenu(moreOptionsMenu) {
    moreOptionsMenu.hidden = true;
    delete moreOptionsMenu.dataset.habitName;
}

function setupMoreOptionsMenu(moreOptionsMenu) {
    document.addEventListener("click", (event) => {
        if (moreOptionsMenu.hidden) {
            return;
        }

        const clickedInsideMenu = moreOptionsMenu.contains(event.target);
        const clickedMoreButton = event.target.closest(".more-options-button");

        if (!clickedInsideMenu && !clickedMoreButton) {
            hideMoreOptionsMenu(moreOptionsMenu);
        }
    });
}

export {
    hideMoreOptionsMenu,
    setupMoreOptionsMenu
};