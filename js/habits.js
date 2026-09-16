function showHabitModal(habitModal, habitNameInput) {
    habitModal.hidden = false;
    habitNameInput.focus();
}

function hideHabitModal(habitModal) {
    habitModal.hidden = true;
}

function createHabitCard(
    habit,
    habitsList,
    moreOptionsMenu,
    onMoreOptions,
    onCompletionChange
) {
    const habitCard = document.createElement("article");
    habitCard.className = "habit-card";
    habitCard.dataset.habitName = habit.name;

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

    const moreOptionsButton = document.createElement("button");
    moreOptionsButton.type = "button";
    moreOptionsButton.className = "more-options-button";
    moreOptionsButton.textContent = "⋮";
    moreOptionsButton.setAttribute("aria-label", `More options for ${habit.name}`);

    habitCard.appendChild(moreOptionsButton);

    moreOptionsButton.addEventListener("click", (event) => {
        event.stopPropagation();

        const isMenuOpen =
            !moreOptionsMenu.hidden &&
            moreOptionsMenu.dataset.habitName === habit.name;

        if (isMenuOpen) {
            moreOptionsMenu.hidden = true;
            delete moreOptionsMenu.dataset.habitName;
            return;
        }

        onMoreOptions(habit);

        const buttonRect = moreOptionsButton.getBoundingClientRect();

        moreOptionsMenu.style.position = "fixed";
        moreOptionsMenu.style.top = `${buttonRect.bottom + 4}px`;

        moreOptionsMenu.hidden = false;
        moreOptionsMenu.dataset.habitName = habit.name;

        const menuWidth = moreOptionsMenu.offsetWidth;

        moreOptionsMenu.style.left = `${buttonRect.right - menuWidth}px`;
    });

    habitCheckbox.addEventListener("click", (event) => {
        event.stopPropagation();

        if (!moreOptionsMenu.hidden) {
            event.preventDefault();

            moreOptionsMenu.hidden = true;
            delete moreOptionsMenu.dataset.habitName;
        }
    });

    habitCheckbox.addEventListener("change", () => {
        habit.completed = habitCheckbox.checked;

        habitCard.classList.toggle("completed", habitCheckbox.checked);

        onCompletionChange(habit);
    });

    habitCard.addEventListener("click", (event) => {
        if (event.target.closest(".habit-checkbox")) {
            return;
        }

        if (event.target.closest(".more-options-button")) {
            return;
        }

        if (!moreOptionsMenu.hidden) {
            moreOptionsMenu.hidden = true;
            delete moreOptionsMenu.dataset.habitName;
            return;
        }

        habitCheckbox.checked = !habitCheckbox.checked;

        habit.completed = habitCheckbox.checked;

        habitCard.classList.toggle("completed", habitCheckbox.checked);

        onCompletionChange(habit);
    });

    habitsList.appendChild(habitCard);
    return habitCard;
}

export {
    showHabitModal,
    hideHabitModal,
    createHabitCard
};