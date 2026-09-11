import {
    currentDateElement,
    addHabitButton,
    habitModal,
    habitForm,
    habitNameInput,
    cancelHabitButton
} from "./dom.js";

import { displayCurrentDate } from "./date.js";
import { showHabitModal, hideHabitModal } from "./habits.js";

displayCurrentDate(currentDateElement);

addHabitButton.addEventListener("click", () => {
    showHabitModal(habitModal, habitNameInput);
});

cancelHabitButton.addEventListener("click", () => {
    hideHabitModal(habitModal);
});