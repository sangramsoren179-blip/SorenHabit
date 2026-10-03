const navigationItems = [
    "overview",
    "plans",
    "habits",
    "notes",
    "progress",
    "statistics",
    "comparison",
    "insights",
    "settings"
];

function createNavigationLink(pageId, label, iconPath) {
    const link = document.createElement("a");

    link.href = `#${pageId}`;
    link.setAttribute("aria-label", label);

    const icon = document.createElement("img");
    icon.src = iconPath;
    icon.alt = "";

    link.appendChild(icon);

    return link;
}

function showPage(pageId, pages) {
    pages.forEach((page) => {
        page.hidden = page.id !== pageId;
    });
}

export {
    navigationItems,
    createNavigationLink,
    showPage
};