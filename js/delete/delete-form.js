function setupDeleteForm(
    deleteForm,
    mathAnswerInput,
    correctDeleteAnswer,
    deleteError,
    getHabits,
    getSelectedHabit,
    setHabits,
    saveHabits,
    habitsList,
    habitsEmpty,
    closeDeleteModal,
    deleteModal
) {
    deleteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userAnswer = Number(mathAnswerInput.value);

        if (userAnswer !== correctDeleteAnswer()) {
            deleteError.textContent = "Incorrect answer. Try again.";
            deleteError.hidden = false;
            mathAnswerInput.focus();
            return;
        }

        const habits = getHabits();
        const selectedHabit = getSelectedHabit();

        const updatedHabits = habits.filter(
            (habit) => habit !== selectedHabit
        );

        setHabits(updatedHabits);
        saveHabits(updatedHabits);

        const habitCard = habitsList.querySelector(
            `[data-habit-name="${CSS.escape(selectedHabit.name)}"]`
        );

        if (habitCard) {
            habitCard.remove();
        }

        habitsEmpty.hidden = updatedHabits.length > 0;

        closeDeleteModal(deleteModal);
    });
}

export {
    setupDeleteForm
};