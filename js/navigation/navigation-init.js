import {
    getPages,
    getBottomNavigation
} from "./navigation-dom.js";

import {
    navigationItems,
    createNavigationLink,
    showPage
} from "./navigation.js";

function initializeNavigation() {
    const pages = getPages();
    const bottomNavigation = getBottomNavigation();

    navigationItems.forEach((pageId) => {
        const label = pageId.charAt(0).toUpperCase() + pageId.slice(1);
        const iconPath = `icons/${pageId}.svg`;

        const link = createNavigationLink(
            pageId,
            label,
            iconPath
        );

        bottomNavigation.appendChild(link);

        link.addEventListener("click", () => {
            bottomNavigation
                .querySelectorAll("a")
                .forEach((item) => {
                    item.classList.remove("active");
                });
            showPage(pageId, pages);
            link.classList.add("active");
        });
    });

    const initialPageId = window.location.hash.slice(1) || "overview";

    showPage(initialPageId, pages);

    const initialLink = bottomNavigation.querySelector(
        `a[href="#${initialPageId}"]`
    );

    if (initialLink) {
        initialLink.classList.add("active");
    }

    window.addEventListener("hashchange", () => {
        const pageId = window.location.hash.slice(1);

        bottomNavigation
            .querySelectorAll("a")
            .forEach((item) => {
                item.classList.remove("active");
            });

        const activeLink = bottomNavigation.querySelector(
            `a[href="#${pageId}"]`
        );

        if (activeLink) {
            activeLink.classList.add("active");
        }

        showPage(pageId, pages);
    });
}

export {
    initializeNavigation
};