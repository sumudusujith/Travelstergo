const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButtton = e.target
    const correct = selectedButtton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the currency used in Sri Lanka?',
        answers: [
            {text: 'Rupees' , correct: true},
            {text: 'U.S. dollar' , correct: false},
            {text: 'Renminbi' , correct: false},
            {text: 'Japanese yen' , correct:false}
        ]
    },
    {
        question: 'What is the capital of Sri Lanka?',
        answers: [
            {text: 'Colombo, Sri Jayawardenepura Kotte' , correct: true},
            {text: 'Kandy' , correct: false},
            {text: 'Mathara', correct: false},
            {text: 'Kaluthara', correct: false}
        ]
    },
    {
        question: 'What is the main language in Sri Lanka?',
        answers: [
            {text: 'Tamil' , correct: false},
            {text: 'English' , correct: false},
            {text: 'Hindi' , correct: false},
            {text: 'Sinhala' , correct:true}
        ]
    },
    {
        question: 'what is the country code of Sri Lanka?',
        answers: [
            {text: '+1' , correct: false},
            {text: '+94' , correct: true}
        ]
    },
    {
        question: 'what is the main airport in sri lanka?',
        answers: [
            {text: 'Bandaranaike International Airport' , correct: true},
            {text: 'Hartsfield–Jackson Atlanta International Airport' , correct: false},
            {text: 'Beijing Capital International Airport', correct: false},
            {text: 'Sydney International Airport', correct: false}
        ]
    },
    {
        question: 'what is the economic city in sri lanka?',
        answers: [
            {text: 'Mathara' , correct: false},
            {text: 'Galle' , correct: false},
            {text: 'Kaluthra' , correct: false},
            {text: 'Kandy' , correct:true}
        ]
    },
    {
        question: 'What is the tallest waterfall in Sri Lanka?',
        answers: [
            {text: 'Bambarakanda Falls' , correct: true},
            {text: 'Ramboda Falls' , correct: false}
        ]
    },
    {
        question: 'Who is the current president of Sri Lanka?',
        answers: [
            {text: 'Gotabaya Rajapaksa' , correct: true},
            {text: 'Mahinda Rajapaksha' , correct: false},
            {text: 'Sajith Premadasa', correct: false},
            {text: 'Maithripala Sirisena', correct: false}
        ]
    },
    {
        question: 'What is the main religion in Sri Lanka?',
        answers: [
            {text: 'Christianity' , correct: false},
            {text: 'Islam' , correct: false},
            {text: 'Hinduism' , correct: false},
            {text: 'Theravada Buddhism' , correct:true}
        ]
    },
    {
        question: 'what is the main port of Sri Lanka?',
        answers: [
            {text: 'port of Hambanthota' , correct: false},
            {text: 'Port of Colombo' , correct: true}
        ]
    }
]