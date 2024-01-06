const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions= questions.sort(() =>Math.random()- .5)
    currentQuestionIndex= 0;

    questionContainerElement.classList.remove('hide')

    setNextQuestion()


}


function setNextQuestion(){
    resetState()
    
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach( button => {
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
        question:'What is 6*4?',
        answers:[
            {text:'28', correct:false},
            {text:'24', correct:true},
            {text:'27', correct:false},
            {text:'26', correct:false}
        ]
    },
    {
        question:'What is 9*4?',
        answers:[
            {text:'36', correct:true},
            {text:'28', correct:false},
            {text:'38', correct:false},
            {text:'26', correct:false}
        ]
    },
    {
        question:'What is 7*8?',
        answers:[
            {text:'59', correct:false},
            {text:'58', correct:false},
            {text:'56', correct:true},
            {text:'54', correct:false}
        ]
    },
    {
        question:'What is 9*8?',
        answers:[
            {text:'89', correct:false},
            {text:'72', correct:true},
            {text:'74', correct:false},
            {text:'84', correct:false}
        ]
    },
    {
        question:'What is 6*9?',
        answers:[
            {text:'36', correct:false},
            {text:'22', correct:false},
            {text:'54', correct:true},
            {text:'29', correct:false}
        ]
    },
    {
        question:'What is 7*9?',
        answers:[
            {text:'62', correct:false},
            {text:'22', correct:false},
            {text:'63', correct:true},
            {text:'45', correct:false}
        ]
    },
    {
        question:'What is 9*5?',
        answers:[
            {text:'47', correct:false},
            {text:'38', correct:false},
            {text:'49', correct:false},
            {text:'45', correct:true}
        ]
    },
    {
        question:'What is 9*12?',
        answers:[
            {text:'108', correct:true},
            {text:'115', correct:false},
            {text:'106', correct:false},
            {text:'118', correct:false}
        ]
    },
    {
        question:'What is 9*15?',
        answers:[
            {text:'136', correct:false},
            {text:'128', correct:false},
            {text:'135', correct:true},
            {text:'149', correct:false}
        ]
    }

]
    
