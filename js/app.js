import {
    currentDateElement,
    addHabitButton,
    habitModal,
    habitForm,
    habitNameInput,
    habitDescriptionInput,
    cancelHabitButton,
    moreOptionsMenu,
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
let selectedHabit = null;

function handleCompletionChange() {
    saveHabits(habits);
}

function handleMoreOptions(habit) {
    selectedHabit = habit;
}

displayCurrentDate(currentDateElement);

habits.forEach((habit) => {
    createHabitCard(
        habit,
        habitsList,
        moreOptionsMenu,
        handleMoreOptions,
        handleCompletionChange
    );
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

    createHabitCard(
        habit,
        habitsList,
        moreOptionsMenu,
        handleMoreOptions,
        handleCompletionChange
    );

    habitsEmpty.hidden = true;

    habitForm.reset();
    hideHabitModal(habitModal);
});

document.addEventListener("click", (event) => {
    if (moreOptionsMenu.hidden) {
        return;
    }

    const clickedInsideMenu = moreOptionsMenu.contains(event.target);
    const clickedMoreButton = event.target.closest(".more-options-button");

    if (!clickedInsideMenu && !clickedMoreButton) {
        moreOptionsMenu.hidden = true;
        delete moreOptionsMenu.dataset.habitName;
    }
});