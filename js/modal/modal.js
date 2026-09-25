function openHabitModal(habitModal, habitNameInput) {
    habitModal.hidden = false;
    habitNameInput.focus();
}

function closeHabitModal(habitModal) {
    habitModal.hidden = true;
}

export {
    openHabitModal,
    closeHabitModal
};