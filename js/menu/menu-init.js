import {
    setupMoreOptionsMenu
} from "./menu.js";

import { getMoreOptionsMenu } from "./menu-dom.js";

function initializeMenu() {
    setupMoreOptionsMenu(getMoreOptionsMenu());
}

export {
    initializeMenu
};