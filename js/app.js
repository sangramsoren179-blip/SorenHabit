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
import { saveHabits, loadHabits } from "./storage.js";

let habits = loadHabits();

function handleCompletionChange() {
    saveHabits(habits);
}

displayCurrentDate(currentDateElement);

habits.forEach((habit) => {
    createHabitCard(habit, habitsList, handleCompletionChange);
});

if (habits.length > 0) {
    habitsEmpty.hidden = true;
}

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
        description: habitDescription,
        completed: false
    };
    
    habits.push(habit);
    saveHabits(habits);
    
    createHabitCard(habit, habitsList, handleCompletionChange);

    habitsEmpty.hidden = true;

    habitForm.reset();
    hideHabitModal(habitModal);
});