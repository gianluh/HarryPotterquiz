
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

    { question: 'What is Harry\'s full name?', correctAnswer: 'Harry James Potter' },

    { question: 'Who are Harry Potter\'s parents?', correctAnswer: 'Lily and James Potter' },

    { question: 'What is the name of the scar on Harry\'s forehead?', correctAnswer: 'Lightning Bolt Scar' },

    { question: 'Who was Harry\'s first friend at Hogwarts?', correctAnswer: 'Ron Weasley' },

    { question: 'What magical creature does Harry first encounter in "The Sorcerer\'s Stone" ?', correctAnswer: 'Fluffy the Three-Headed Dog' },

    { question: 'What is the name of Harry\'s godfather?', correctAnswer: 'Sirius Black' },

    { question: 'What is Harry\'s Patronus?', correctAnswer: 'A stag' },

    { question: 'What Quidditch position does Harry play?', correctAnswer: 'Seeker' },

    { question: 'What is the name of Harry\'s wand?', correctAnswer: 'The Holly and Phoenix Feather Wand' },

    { question: 'How does Harry first learn he is a wizard?', correctAnswer: 'Hagrid visits him on his birthday' }

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
