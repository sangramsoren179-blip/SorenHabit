function showHabitModal(habitModal, habitNameInput) {
    habitModal.hidden = false;
    habitNameInput.focus();
}

function hideHabitModal(habitModal) {
    habitModal.hidden = true;
}

export { showHabitModal, hideHabitModal };