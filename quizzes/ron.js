let firstQuestion = document.getElementById('question1')
let secondQuestion = document.getElementById('question2')
let thirdQuestion = document.getElementById('question3')
let fourthQuestion = document.getElementById('question4')
let fifthQuestion = document.getElementById('question5')
let sixthQuestion = document.getElementById('question6')
let seventhQuestion = document.getElementById('question7')
let eighthQuestion = document.getElementById('question8')
let ninthQuestion = document.getElementById('question9')
let tenthQuestion = document.getElementById('question10')
let result = document.getElementById('results')
let tryAgain = document.getElementById('try-again')
let finalButton = document.getElementById('quiz-end')
let nextButton = document.getElementById('next')

let answers = document.querySelectorAll('.answer')
let correctAnswers = 0

firstQuestion.hidden = false
secondQuestion.hidden = true
thirdQuestion.hidden = true
fourthQuestion.hidden = true
fifthQuestion.hidden = true
sixthQuestion.hidden = true
seventhQuestion.hidden = true
eighthQuestion.hidden = true
ninthQuestion.hidden = true
tenthQuestion.hidden = true
result.hidden = true
tryAgain.hidden = true
finalButton.hidden = true

let questions = [
    { question: "What is Ron Weasley's middle name?", correctAnswer: "Bilius" },
    { question: "How many siblings does Ron have?", correctAnswer: "6" },
    { question: "What is the name of Ron's pet rat?", correctAnswer: "Scabbers" },
    { question: "What is Ron most afraid of?", correctAnswer: "Spiders" },
    { question: "What color is Ron's first Yule Ball outfit?", correctAnswer: "Burgundy with lace" },
    { question: "What is the name of Ron’s sister?", correctAnswer: "Ginny" },
    { question: "Which Quidditch team does Ron support?", correctAnswer: "Chudley Cannons" },
    { question: "Which magical object makes Ron believe he is 'The Best'?", correctAnswer: "Slytherin’s Locket" },
    { question: "What Christmas gift does Ron receive every year from his mother?", correctAnswer: "A handmade sweater" },
    { question: "Who does Ron marry at the end of the series?", correctAnswer: "Hermione Granger" }
];

let currentQuestionIndex = 0;

answers.forEach(answer => {
    answer.onclick = () => {
        if (answer.textContent.trim() === questions[currentQuestionIndex].correctAnswer) {
            correctAnswers++
            answer.style.transition = 'box-shadow 0.5s ease, background-color 0.5s ease'
            answer.style.boxShadow = '0 0 25px rgba(50, 205, 50, 1)'
            answer.style.backgroundColor = '#32cd32'

        } else {
            answer.style.transition = 'box-shadow 0.5s ease, background-color 0.5s ease'
            answer.style.boxShadow = '0 0 25px rgba(255, 0 , 0, 1)'
            answer.style.backgroundColor = 'red'
            for (let i = 0; i < answers.length; i++) {
                if (answers[i].textContent.trim() === questions[currentQuestionIndex].correctAnswer) {
                    answers[i].style.transition = 'box-shadow 0.5s ease, background-color 0.5s ease'
                    answers[i].style.boxShadow = '0 0 25px rgba(50, 205, 50, 1)'
                    answers[i].style.backgroundColor = '#32cd32'
                }
            }
        }

        nextButton.style.visibility = 'visible'
        nextButton.style.opacity = '1'
        nextButton.style.transition = 'opacity 0.5s ease'

        answers.forEach(answer => answer.style.pointerEvents = 'none')
    }

})

nextButton.onclick = () => {

    let currentQuestionElement = document.getElementById(`question${currentQuestionIndex + 1}`);
    currentQuestionElement.hidden = true;

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        nextButton.style.visibility = 'hidden'
        nextButton.style.opacity = '0'
        result.hidden = false
        if (correctAnswers > 5) {
            document.getElementById('result').innerHTML = `Congratulations! <br>You scored ${correctAnswers}/10`
            finalButton.hidden = false
        } else {
            document.getElementById('result').innerHTML = `Oops! You only scored ${correctAnswers}/10`
            tryAgain.hidden = false
        }
    }

    let nextQuestionElement = document.getElementById(`question${currentQuestionIndex + 1}`);
    nextQuestionElement.hidden = false;

    let answerElements = nextQuestionElement.querySelectorAll('.answer');
    answerElements.forEach(answer => {
        answer.style.boxShadow = '';
        answer.style.backgroundColor = '';
        answer.style.pointerEvents = 'auto';
    });

    nextButton.style.visibility = 'hidden'
    nextButton.style.opacity = '0'
};
