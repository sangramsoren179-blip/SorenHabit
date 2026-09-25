import { getCurrentDateElement } from "./date-dom.js";

function updateCurrentDate() {
    const today = new Date();
    
    const formattedDate = today.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    
    getCurrentDateElement().textContent = formattedDate;
}

function initializeDate() {
    updateCurrentDate();
}

export {
    initializeDate
};