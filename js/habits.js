function showHabitModal(habitModal, habitNameInput) {
    habitModal.hidden = false;
    habitNameInput.focus();
}

function hideHabitModal(habitModal) {
    habitModal.hidden = true;
}

function createHabitCard(habit, habitsList, onCompletionChange) {
    const habitCard = document.createElement("article");
    habitCard.className = "habit-card";

    const habitContent = document.createElement("div");
    habitContent.className = "habit-content";

    const habitName = document.createElement("h3");
    habitName.textContent = habit.name;

    habitContent.appendChild(habitName);

    if (habit.description) {
        const habitDescription = document.createElement("p");
        habitDescription.textContent = habit.description;

        habitContent.appendChild(habitDescription);
    }

    const habitCheckbox = document.createElement("input");
    habitCheckbox.type = "checkbox";
    habitCheckbox.className = "habit-checkbox";
    habitCheckbox.setAttribute("aria-label", `Mark ${habit.name} as complete`);
    habitCheckbox.checked = habit.completed;

    habitCard.appendChild(habitCheckbox);
    habitCard.appendChild(habitContent);
    habitCard.classList.toggle("completed", habitCheckbox.checked);

    habitCard.addEventListener("click", (event) => {
        if (event.target !== habitCheckbox) {
            habitCheckbox.checked = !habitCheckbox.checked;
        }
    
        habit.completed = habitCheckbox.checked;
    
        habitCard.classList.toggle("completed", habitCheckbox.checked);
    
        onCompletionChange(habit);
    });

    habitsList.appendChild(habitCard);
}

export {
    showHabitModal,
    hideHabitModal,
    createHabitCard
};