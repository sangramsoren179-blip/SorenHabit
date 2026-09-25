import {
    getDeleteHabitOption,
    getDeleteModal,
    getDeleteForm,
    getDeleteMessage,
    getMathQuestion,
    getMathAnswerInput,
    getDeleteError,
    getCancelDeleteButton
} from "./delete-dom.js";
import {
    setSelectedHabit,
    getSelectedHabit,
    showDeleteModal,
    hideDeleteModal
} from "./delete.js";
import { setupDeleteForm } from "./delete-form.js";
import { saveHabits } from "../storage.js";

import {
    getHabitsList,
    getHabitsEmpty
} from "../habits/habits-dom.js";

import {
    getHabits,
    updateHabits
} from "../habits/habits-init.js";

let correctDeleteAnswer = null;

function handleDeleteOption() {
    if (!getSelectedHabit()) {
        return;
    }

    correctDeleteAnswer = showDeleteModal(
        getDeleteModal(),
        getDeleteMessage(),
        getMathQuestion(),
        getMathAnswerInput(),
        getDeleteError(),
        getSelectedHabit()
    );
}

function initializeDelete() {
    getDeleteHabitOption().addEventListener("click", handleDeleteOption);
    
    setupDeleteForm(
        getDeleteForm(),
        getMathAnswerInput(),
        () => correctDeleteAnswer,
        getDeleteError(),
        getHabits,
        getSelectedHabit,
        updateHabits,
        saveHabits,
        getHabitsList(),
        getHabitsEmpty(),
        hideDeleteModal,
        getDeleteModal()
    );
    
    getCancelDeleteButton().addEventListener("click", () => {
        hideDeleteModal(getDeleteModal());
    
        setSelectedHabit(null);
        correctDeleteAnswer = null;
    });
}

export {
    initializeDelete
}