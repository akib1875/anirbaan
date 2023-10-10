// script.js
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
    const certificateButton = document.getElementById("certificate-button");
    const resultMessage = document.getElementById("result-message");

    certificateButton.style.display = "none"; // Initially hide the certificate button

    questions.forEach((question) => {
        const radios = question.querySelectorAll('input[type="radio"]');
        const hint = question.querySelector(".hint");
        const correctIndex = parseInt(question.getAttribute("data-correct-index"));

        radios.forEach((radio, index) => {
            radio.addEventListener("change", function () {
                if (index === correctIndex) {
                    question.classList.add("correct");
                    hint.style.display = "none";
                } else {
                    question.classList.remove("correct");
                    hint.style.display = "block";
                }

                const allCorrect = Array.from(questions).every((q) =>
                    q.classList.contains("correct")
                );

                if (allCorrect) {
                    certificateButton.style.display = "block";
                    resultMessage.innerText = "Congratulations! You passed the quiz.";
                } else {
                    certificateButton.style.display = "none";
                    resultMessage.innerText = "Keep trying to answer all questions correctly.";
                }
            });
        });
    });
});
