import { createHabitCard } from "./habits.js";

function renderHabits(
    habits,
    habitsList,
    moreOptionsMenu,
    handleMoreOptions,
    handleCompletionChange,
    habitsEmpty
) {
    habits.forEach((habit) => {
        createHabitCard(
            habit,
            habitsList,
            moreOptionsMenu,
            handleMoreOptions,
            handleCompletionChange
        );
    });

    habitsEmpty.hidden = habits.length > 0;
}

export {
    renderHabits
};