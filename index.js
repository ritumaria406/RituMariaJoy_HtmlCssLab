/**
 * Question class
 * data members
 * - text
 * - choices (array of string)
 * - answer
 */


 function Question( text, choices, answer)
 {
     this.text = text;
     this.choices = choices;
     this.answer = answer;
 }
 
 Question.prototype.isCorrectAnswer = function(choice) {
     return(this.answer === choice);  
 };
 
function Quiz(questions)
{
this.questions = questions;
this.score = 0;
this.questionIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function()
{
    return this.questions[this.questionIndex];
};

Quiz.prototype.checkOptionWithAnswer = function(answer )
{
    if(this.getCurrentQuestion().isCorrectAnswer(answer))
    {
        this.score++;
    }
    this.questionIndex ++;
}
Quiz.prototype.done = function()
{
    return this.questionIndex >= questions.length ;
}

function loadQuestions()
{
    if(quiz.done())
    {
        showScores();
        return;
    }
    const currentQuestion = quiz.getCurrentQuestion();

    const questionEl = document.getElementById('question');
    questionEl.textContent = currentQuestion.text;

    //loop through choices for the question and the choice element in the UI
    for (let i=0; i< currentQuestion.choices.length; i++)
    {
        const currentChoice = currentQuestion.choices[i];
        document.getElementById('choice' + i ).textContent = currentChoice;
        handleSelect('btn'+ i, currentChoice)
    }

    const currentNumber = document.getElementById('currentNumber');
    currentNumber.textContent = quiz.questionIndex + 1;

    const TotalNumber = document.getElementById('TotalNumber');
    TotalNumber.textContent = questions.length;
}

function handleSelect(id, choice)
{
    console.log(id,choice);

    document.getElementById(id).onclick = function()
        {
            quiz.checkOptionWithAnswer(choice);
            loadQuestions();
        };
 
}

function showScores()
{
    document.getElementById('quiz').innerHTML = `<h1>Result </h1>
    <h2 align="center">The Score is ${quiz.score} out of ${questions.length}</h2>
    <h2 align="center">Percentage of correct answers:- ${(quiz.score/questions.length)*100}%  </h2>`;
    
}
 const questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

const quiz = new Quiz( questions );
loadQuestions();
//console.log(quiz);