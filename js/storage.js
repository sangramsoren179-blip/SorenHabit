const STORAGE_KEY = "sorenHabit_habits";

function saveHabits(habits) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function loadHabits() {
    const savedHabits = localStorage.getItem(STORAGE_KEY);

    if (!savedHabits) {
        return [];
    }

    return JSON.parse(savedHabits);
}

export { saveHabits, loadHabits };