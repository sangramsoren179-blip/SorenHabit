import {
    openHabitModal,
    closeHabitModal
} from "./modal.js";

import {
    getHabitModal,
    getHabitNameInput,
    getAddHabitButton,
    getCancelHabitButton
} from "./modal-dom.js";

function initializeModal() {
    getAddHabitButton().addEventListener("click", () => {
        openHabitModal(
            getHabitModal(),
            getHabitNameInput()
        );
    });

    getCancelHabitButton().addEventListener("click", () => {
        closeHabitModal(getHabitModal());
    });
}

export {
    initializeModal
};