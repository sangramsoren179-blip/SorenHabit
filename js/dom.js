const currentDateElement = document.getElementById("current-date");

const addHabitButton = document.getElementById("add-habit-button");
const habitModal = document.getElementById("habit-modal");
const habitForm = document.getElementById("habit-form");
const habitNameInput = document.getElementById("habit-name");
const habitDescriptionInput = document.getElementById("habit-description");
const cancelHabitButton = document.getElementById("cancel-habit-button");
const moreOptionsMenu = document.getElementById("more-options-menu");
const deleteHabitOption = document.getElementById("delete-habit-option");
const deleteModal = document.getElementById("delete-modal");
const deleteForm = document.getElementById("delete-form");
const deleteMessage = document.getElementById("delete-message");
const mathQuestion = document.getElementById("math-question");
const mathAnswerInput = document.getElementById("math-answer");
const deleteError = document.getElementById("delete-error");
const cancelDeleteButton = document.getElementById("cancel-delete-button");
const habitsList = document.getElementById("habits-list");
const habitsEmpty = document.getElementById("habits-empty");

export {
    currentDateElement,
    addHabitButton,
    habitModal,
    habitForm,
    habitNameInput,
    habitDescriptionInput,
    cancelHabitButton,
    moreOptionsMenu,
    deleteHabitOption,
    deleteModal,
    deleteForm,
    deleteMessage,
    mathQuestion,
    mathAnswerInput,
    deleteError,
    cancelDeleteButton,
    habitsList,
    habitsEmpty
};