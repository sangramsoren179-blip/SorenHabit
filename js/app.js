import {
    currentDateElement,
    addHabitButton,
    habitModal,
    habitForm,
    habitNameInput,
    habitDescriptionInput,
    cancelHabitButton,
    habitsList,
    habitsEmpty
} from "./dom.js";

import { displayCurrentDate } from "./date.js";
import {
    showHabitModal,
    hideHabitModal,
    createHabitCard
} from "./habits.js";

displayCurrentDate(currentDateElement);

addHabitButton.addEventListener("click", () => {
    showHabitModal(habitModal, habitNameInput);
});

cancelHabitButton.addEventListener("click", () => {
    hideHabitModal(habitModal);
});

habitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const habitName = habitNameInput.value.trim();
    const habitDescription = habitDescriptionInput.value.trim();

    const habit = {
        name: habitName,
        description: habitDescription
    };

    createHabitCard(habit, habitsList);

    habitsEmpty.hidden = true;

    habitForm.reset();
    hideHabitModal(habitModal);
});