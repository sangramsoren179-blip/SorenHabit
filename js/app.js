import {
    currentDateElement,
    addHabitButton,
    habitModal,
    habitForm,
    habitNameInput,
    habitDescriptionInput,
    cancelHabitButton,
    moreOptionsMenu,
    deleteHabitOption,
    deleteModal,
    deleteForm,
    deleteMessage,
    mathQuestion,
    mathAnswerInput,
    deleteError,
    cancelDeleteButton,
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
import {
    showDeleteModal,
    hideDeleteModal
} from "./delete.js";

let habits = loadHabits();
let selectedHabit = null;
let correctDeleteAnswer = null;

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

deleteHabitOption.addEventListener("click", () => {
    if (!selectedHabit) {
        return;
    }

    moreOptionsMenu.hidden = true;
    delete moreOptionsMenu.dataset.habitName;

    correctDeleteAnswer = showDeleteModal(
        deleteModal,
        deleteMessage,
        mathQuestion,
        mathAnswerInput,
        deleteError,
        selectedHabit
    );
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

deleteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userAnswer = Number(mathAnswerInput.value);

    if (userAnswer !== correctDeleteAnswer) {
        deleteError.textContent = "Incorrect answer. Try again.";
        deleteError.hidden = false;
        mathAnswerInput.focus();
        return;
    }

    habits = habits.filter((habit) => habit !== selectedHabit);

    saveHabits(habits);
    
    const habitCard = habitsList.querySelector(
        `[data-habit-name="${CSS.escape(selectedHabit.name)}"]`
    );
    
    if (habitCard) {
        habitCard.remove();
    }
    
    habitsEmpty.hidden = habits.length > 0;
    
    hideDeleteModal(deleteModal);
    
    selectedHabit = null;
    correctDeleteAnswer = null;
});

cancelDeleteButton.addEventListener("click", () => {
    hideDeleteModal(deleteModal);

    selectedHabit = null;
    correctDeleteAnswer = null;
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