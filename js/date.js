function displayCurrentDate(dateElement) {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    dateElement.textContent = formattedDate;
}

export { displayCurrentDate };