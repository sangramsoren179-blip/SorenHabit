import { currentDateElement } from "./dom.js";

const today = new Date();

const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
});

currentDateElement.textContent = formattedDate;