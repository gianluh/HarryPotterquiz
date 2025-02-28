
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
    {
        question: "What is Albus Dumbledore's full name?",
        correctAnswer: "Albus Percival Wulfric Brian Dumbledore"
    },
    {
        question: "What is the name of Dumbledore's pet phoenix?",
        correctAnswer: "Fawkes"
    },
    {
        question: "Which school did Dumbledore attend as a student?",
        correctAnswer: "Hogwarts School of Witchcraft and Wizardry"
    },
    {
        question: "What position did Dumbledore hold at Hogwarts?",
        correctAnswer: "Headmaster"
    },
    {
        question: "What is the name of the first magical object Dumbledore shows Harry in his first year?",
        correctAnswer: "The Mirror of Erised"
    },
    {
        question: "Who was Dumbledore's sister?",
        correctAnswer: "Ariana Dumbledore"
    },
    {
        question: "Which magical creature did Dumbledore save from a deadly situation in his youth?",
        correctAnswer: "A phoenix"
    },
    {
        question: "What was Dumbledore's relationship with Gellert Grindelwald?",
        correctAnswer: "They were once close friends"
    },
    {
        question: "What is Dumbledore’s favorite flavor of Bertie Bott’s Every Flavor Beans?",
        correctAnswer: "Lemon"
    },
    {
        question: "Who kills Albus Dumbledore?",
        correctAnswer: "Severus Snape"
    }
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
