# SorenHabit

A simple and modern habit tracker built from scratch using HTML, CSS, and JavaScript.

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
SorenHabit/
├── css/
│   ├── base.css
│   ├── delete.css
│   ├── habits.css
│   ├── header.css
│   ├── main.css
│   ├── overview.css
│   ├── reset.css
│   └── variables.css
├── js/
│   ├── date/
│   │   ├── date-dom.js
│   │   └── date.js
│   ├── delete/
│   │   ├── delete-dom.js
│   │   ├── delete-form.js
│   │   ├── delete-init.js
│   │   └── delete.js
│   ├── habits/
│   │   ├── habit-form.js
│   │   ├── habit-renderer.js
│   │   ├── habits-dom.js
│   │   ├── habits-init.js
│   │   └── habits.js
│   ├── menu/
│   │   ├── menu-dom.js
│   │   ├── menu-init.js
│   │   └── menu.js
│   ├── modal/
│   │   ├── modal-dom.js
│   │   ├── modal-init.js
│   │   └── modal.js
│   ├── app.js
│   └── storage.js
├── .gitignore
├── index.html
└── README.md
```

## Features

### Completed

- [x] Project setup
- [x] Basic HTML5 structure
- [x] README documentation
- [x] CSS foundation
- [x] Styled header and main layout
- [x] Styled Overview and My Habits sections
- [x] ES6 module structure
- [x] Current date display
- [x] Styled current date
- [x] My Habits empty state
- [x] Styled My Habits empty state
- [x] Habit creation modal structure
- [x] Styled habit creation modal
- [x] Open habit modal using the Add Habit button
- [x] Close habit modal using the Cancel button
- [x] Automatically focus the Habit Name input
- [x] Create and display habits
- [x] Optional habit descriptions
- [x] Habit card styling
- [x] Mark habits as complete
- [x] Toggle habit completion by clicking the card
- [x] Strikethrough for completed habits
- [x] Hide the empty state after creating a habit
- [x] Save habits using localStorage
- [x] Load saved habits after refreshing
- [x] Save habit completion status
- [x] Restore completion status after refreshing
- [x] More Options button for each habit
- [x] Open and close the More Options menu
- [x] Position the More Options menu beside the selected habit
- [x] Close the More Options menu when clicking outside
- [x] Prevent accidental completion changes while the menu is open
- [x] Delete-confirmation modal
- [x] Generate a new math question for every deletion attempt
- [x] Verify the math answer before deletion
- [x] Delete the selected habit after the correct answer
- [x] Save the updated habits after deletion
- [x] Show the empty state after deleting all habits
- [x] Cancel deletion without changing the habit list
- [x] Feature-based JavaScript folder structure
- [x] Feature-specific DOM modules
- [x] Feature-specific initialization modules
- [x] Initialization-only app entry point

### Planned

- [ ] Edit habits
- [ ] Daily habit tracking
- [ ] Habit streaks
- [ ] Progress tracking
- [ ] Statistics
- [ ] Personal notes and extra information
- [ ] Sidebar navigation
- [ ] Multiple task types
- [ ] Advanced local data management
- [ ] User registration and login
- [ ] User authentication
- [ ] Cloud data storage for user habits
- [ ] Responsive mobile design
- [ ] Dark mode

## Project Status

🚧 In development

## Author

Sangram Soren

## Development

SorenHabit is being developed step by step, starting from the basic web foundation and gradually adding habit-tracking features.

## License

This project is currently unlicensed.