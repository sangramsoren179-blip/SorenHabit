import {
    getHabitForm,
    getHabitDescriptionInput,
    getHabitsList,
    getHabitsEmpty
} from "./habits-dom.js";

import {
    getHabitNameInput,
    getHabitModal
} from "../modal/modal-dom.js";

import { getMoreOptionsMenu } from "../menu/menu-dom.js";
import { saveHabits } from "../storage.js";
import {
    createHabit,
    createHabitCard
} from "./habits.js";
import { closeHabitModal } from "../modal/modal.js";

function setupHabitForm(
    habits,
    handleMoreOptions,
    handleCompletionChange
) {
    getHabitForm().addEventListener("submit", (event) => {
        event.preventDefault();

        const habitName = getHabitNameInput().value.trim();
        const habitDescription = getHabitDescriptionInput().value.trim();

        const habit = createHabit(habitName, habitDescription);

        habits.push(habit);
        saveHabits(habits);

        createHabitCard(
            habit,
            getHabitsList(),
            getMoreOptionsMenu(),
            handleMoreOptions,
            handleCompletionChange
        );

        getHabitsEmpty().hidden = true;

        getHabitForm().reset();
        closeHabitModal(getHabitModal());
    });
}

export {
    setupHabitForm
};