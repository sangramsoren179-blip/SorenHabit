function generateMathQuestion() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let firstNumber;
    let secondNumber;
    let answer;

    if (operator === "+") {
        firstNumber = Math.floor(Math.random() * 20) + 1;
        secondNumber = Math.floor(Math.random() * 20) + 1;
        answer = firstNumber + secondNumber;
    }

    if (operator === "-") {
        firstNumber = Math.floor(Math.random() * 20) + 1;
        secondNumber = Math.floor(Math.random() * 20) + 1;

        if (firstNumber < secondNumber) {
            [firstNumber, secondNumber] = [secondNumber, firstNumber];
        }

        answer = firstNumber - secondNumber;
    }

    if (operator === "*") {
        firstNumber = Math.floor(Math.random() * 10) + 1;
        secondNumber = Math.floor(Math.random() * 10) + 1;
        answer = firstNumber * secondNumber;
    }

    if (operator === "/") {
        secondNumber = Math.floor(Math.random() * 9) + 1;
        answer = Math.floor(Math.random() * 10) + 1;
        firstNumber = secondNumber * answer;
    }

    return {
        question: `${firstNumber} ${operator} ${secondNumber} = ?`,
        answer
    };
}

function showDeleteModal(
    deleteModal,
    deleteMessage,
    mathQuestion,
    mathAnswerInput,
    deleteError,
    habit
) {
    const mathProblem = generateMathQuestion();

    deleteMessage.textContent =
        `Are you sure you want to delete "${habit.name}"?`;

    mathQuestion.textContent = `Solve this: ${mathProblem.question}`;

    mathAnswerInput.value = "";
    deleteError.hidden = true;

    deleteModal.hidden = false;
    mathAnswerInput.focus();

    return mathProblem.answer;
}

function hideDeleteModal(deleteModal) {
    deleteModal.hidden = true;
}

export {
    generateMathQuestion,
    showDeleteModal,
    hideDeleteModal
};