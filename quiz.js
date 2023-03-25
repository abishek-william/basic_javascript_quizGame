const data = [
    {
        id: 1,
        question: "Which is the capital of india ?",
        answers: [
            {answer: 'Kerala' , isCorrect: false},
            {answer: 'Tamilnadu' , isCorrect: false},
            {answer: 'Gujarat' , isCorrect: false},
            {answer: 'New Delhi' , isCorrect: true},
        ]
    }
    ,
    {
        id: 2,
        question: "Which state is known as Gods Own Country ?",
        answers: [
            {answer: 'Kerala' , isCorrect: true},
            {answer: 'Tamilnadu' , isCorrect: false},
            {answer: 'Gujarat' , isCorrect: false},
            {answer: 'New Delhi' , isCorrect: false}
        ]
    }
    ,
    {
        id: 3,
        question: "Which is the capital of kerala ?",
        answers: [
            {answer: 'Trivandrum' , isCorrect: true},
            {answer: 'Alapuzha' , isCorrect: false},
            {answer: 'Kannur' , isCorrect: false},
            {answer: 'Kozhikode' , isCorrect: false}
        ]
    }
    ,
    {
        id: 4,
        question: "Who is the cheif minister of kerala ?",
        answers: [
            {answer: 'Mr.Pinarai Vijayan' , isCorrect: true},
            {answer: 'Shri.Umman Chandi' , isCorrect: false},
            {answer: 'Mr.Ramesh Chennithala' , isCorrect: false},
            {answer: 'Mr.Karunakaran' , isCorrect: false}
        ]
    }
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    selectedAnswer;
    showQuestion(qIndex);
}

play.addEventListener('click' , () => {
    resultScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    playAgain();
})

const showResult = () => {
    resultScreen.style.display = 'block';
    gameScreen.style.display = 'none';

    resultScreen.querySelector(
        '.correct'
    ).textContent = `Correct Answers: ${correctCount}`;

    resultScreen.querySelector(
        '.wrong'
    ).textContent = `Wrong Answers: ${wrongCount}`;

    resultScreen.querySelector(
        '.score'
    ).textContent = `Score: ${(correctCount - wrongCount) * 10}`;
}

const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item , index) => 
        `
        <div class="answer">
            <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div>
        `
        ).join('');

        selectAnswer();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll('input').forEach( (el) => {
        el.addEventListener( 'click' , (e) => {
            selectedAnswer = e.target.value;
        })
    })
};

const submitAnswer = () => {
    submit.addEventListener( 'click' , () => {
        if(selectedAnswer !== null){
            selectedAnswer === 'true' ? correctCount++ : wrongCount++ ;
            qIndex++ ; 
            showQuestion(qIndex);
        }
        else{
            alert("Select a answer!!!!")
        }
    })
}

showQuestion(qIndex);
submitAnswer();

