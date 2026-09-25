import {
    getHabitsList,
    getHabitsEmpty
} from "./habits-dom.js";

import { getMoreOptionsMenu } from "../menu/menu-dom.js";

import { loadHabits, saveHabits } from "../storage.js";
import { setupHabitForm } from "./habit-form.js";
import { renderHabits } from "./habit-renderer.js";
import { setSelectedHabit } from "../delete/delete.js";

let habits = [];

function handleCompletionChange() {
    saveHabits(habits);
}

function handleMoreOptions(habit) {
    setSelectedHabit(habit);
}

function initializeHabits() {
    habits = loadHabits();

    renderHabits(
        habits,
        getHabitsList(),
        getMoreOptionsMenu(),
        handleMoreOptions,
        handleCompletionChange,
        getHabitsEmpty()
    );
    
    setupHabitForm(
        habits,
        handleMoreOptions,
        handleCompletionChange
    );
}

function getHabits() {
    return habits;
}

function updateHabits(updatedHabits) {
    habits = updatedHabits;
}

export {
    initializeHabits,
    getHabits,
    updateHabits
};