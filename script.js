// ========================================
// 50 QUIZ QUESTIONS
// ========================================

const questions = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used to style webpages?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },

    {
        question: "Which language makes webpages interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correct: 2
    },

    {
        question: "Which symbol selects an ID in CSS?",
        answers: [
            ".",
            "#",
            "*",
            "@"
        ],
        correct: 1
    },

    {
        question: "Which symbol selects a class in CSS?",
        answers: [
            "#",
            ".",
            "*",
            "%"
        ],
        correct: 1
    },

    {
        question: "Which HTML tag creates a paragraph?",
        answers: [
            "<p>",
            "<paragraph>",
            "<text>",
            "<para>"
        ],
        correct: 0
    },

    {
        question: "Which HTML tag creates a link?",
        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1
    },

    {
        question: "Which HTML tag displays an image?",
        answers: [
            "<picture>",
            "<image>",
            "<img>",
            "<src>"
        ],
        correct: 2
    },

    {
        question: "Which HTML tag creates the largest heading?",
        answers: [
            "<h6>",
            "<heading>",
            "<h1>",
            "<head>"
        ],
        correct: 2
    },

    {
        question: "Which CSS property changes text color?",
        answers: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        correct: 2
    },

    {
        question: "Which CSS property changes the background color?",
        answers: [
            "background-color",
            "bg-color",
            "color-background",
            "background"
        ],
        correct: 0
    },

    {
        question: "Which CSS property changes text size?",
        answers: [
            "text-size",
            "font-size",
            "size",
            "font-height"
        ],
        correct: 1
    },

    {
        question: "Which CSS property makes text bold?",
        answers: [
            "font-weight",
            "text-bold",
            "bold",
            "font-style"
        ],
        correct: 0
    },

    {
        question: "Which JavaScript keyword declares a variable?",
        answers: [
            "variable",
            "var",
            "let",
            "Both B and C"
        ],
        correct: 3
    },

    {
        question: "Which keyword creates a constant in JavaScript?",
        answers: [
            "constant",
            "const",
            "fixed",
            "static"
        ],
        correct: 1
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        answers: [
            "<!-- -->",
            "//",
            "##",
            "**"
        ],
        correct: 1
    },

    {
        question: "Which method prints something to the browser console?",
        answers: [
            "console.log()",
            "print()",
            "console.print()",
            "log.console()"
        ],
        correct: 0
    },

    {
        question: "Which method adds an item to the end of an array?",
        answers: [
            "add()",
            "push()",
            "append()",
            "insert()"
        ],
        correct: 1
    },

    {
        question: "Which method removes the last item from an array?",
        answers: [
            "remove()",
            "delete()",
            "pop()",
            "last()"
        ],
        correct: 2
    },

    {
        question: "Which operator means strict equality?",
        answers: [
            "=",
            "==",
            "===",
            "!="
        ],
        correct: 2
    },

    {
        question: "Which operator means NOT equal?",
        answers: [
            "!=",
            "=",
            "==",
            "=>"
        ],
        correct: 0
    },

    {
        question: "Which method converts JSON text into a JavaScript object?",
        answers: [
            "JSON.convert()",
            "JSON.parse()",
            "JSON.object()",
            "JSON.read()"
        ],
        correct: 1
    },

    {
        question: "Which method converts a JavaScript object into JSON text?",
        answers: [
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.text()",
            "JSON.parse()"
        ],
        correct: 0
    },

    {
        question: "Which object is used to interact with the webpage?",
        answers: [
            "WINDOW",
            "HTML",
            "DOM",
            "PAGE"
        ],
        correct: 2
    },

    {
        question: "What does DOM stand for?",
        answers: [
            "Document Object Model",
            "Data Object Method",
            "Digital Online Model",
            "Document Online Manager"
        ],
        correct: 0
    },

    {
        question: "Which method finds an HTML element by its ID?",
        answers: [
            "getElementById()",
            "findById()",
            "getId()",
            "selectId()"
        ],
        correct: 0
    },

    {
        question: "Which method creates a new HTML element?",
        answers: [
            "createElement()",
            "newElement()",
            "makeElement()",
            "createHTML()"
        ],
        correct: 0
    },

    {
        question: "Which event happens when a user clicks a button?",
        answers: [
            "hover",
            "change",
            "click",
            "press"
        ],
        correct: 2
    },

    {
        question: "Which event happens when a keyboard key is pressed?",
        answers: [
            "keyboard",
            "keydown",
            "key",
            "presskey"
        ],
        correct: 1
    },

    {
        question: "Which storage keeps data in the browser?",
        answers: [
            "localStorage",
            "browserStorage",
            "webStorageOnly",
            "pageStorage"
        ],
        correct: 0
    },

    {
        question: "Which command initializes a Git repository?",
        answers: [
            "git start",
            "git init",
            "git create",
            "git new"
        ],
        correct: 1
    },

    {
        question: "Which command stages files for Git?",
        answers: [
            "git stage .",
            "git add .",
            "git save .",
            "git upload ."
        ],
        correct: 1
    },

    {
        question: "Which command creates a Git commit?",
        answers: [
            "git save",
            "git commit",
            "git push",
            "git record"
        ],
        correct: 1
    },

    {
        question: "Which command uploads commits to GitHub?",
        answers: [
            "git upload",
            "git send",
            "git push",
            "git publish"
        ],
        correct: 2
    },

    {
        question: "Which command downloads changes from a remote repository?",
        answers: [
            "git download",
            "git pull",
            "git fetchall",
            "git receive"
        ],
        correct: 1
    },

    {
        question: "What is GitHub mainly used for?",
        answers: [
            "Video editing",
            "Code hosting and collaboration",
            "Photo editing",
            "Gaming"
        ],
        correct: 1
    },

    {
        question: "Which HTML attribute provides alternative text for an image?",
        answers: [
            "title",
            "alt",
            "text",
            "description"
        ],
        correct: 1
    },

    {
        question: "Which HTML element creates an unordered list?",
        answers: [
            "<ol>",
            "<list>",
            "<ul>",
            "<li>"
        ],
        correct: 2
    },

    {
        question: "Which HTML element represents a list item?",
        answers: [
            "<item>",
            "<li>",
            "<list-item>",
            "<ul-item>"
        ],
        correct: 1
    },

    {
        question: "Which CSS property controls space inside an element?",
        answers: [
            "margin",
            "padding",
            "spacing",
            "inside-space"
        ],
        correct: 1
    },

    {
        question: "Which CSS property controls space outside an element?",
        answers: [
            "padding",
            "margin",
            "outside",
            "border-space"
        ],
        correct: 1
    },

    {
        question: "Which CSS layout system is useful for one-dimensional layouts?",
        answers: [
            "Flexbox",
            "Floatbox",
            "PositionBox",
            "InlineBox"
        ],
        correct: 0
    },

    {
        question: "Which CSS layout system is useful for two-dimensional layouts?",
        answers: [
            "Flexbox",
            "Grid",
            "Float",
            "Inline"
        ],
        correct: 1
    },

    {
        question: "Which JavaScript structure stores multiple values?",
        answers: [
            "Array",
            "Number",
            "Boolean",
            "String"
        ],
        correct: 0
    },

    {
        question: "Which JavaScript value represents true or false?",
        answers: [
            "String",
            "Boolean",
            "Number",
            "Object"
        ],
        correct: 1
    },

    {
        question: "Which JavaScript value represents text?",
        answers: [
            "String",
            "Boolean",
            "Number",
            "Array"
        ],
        correct: 0
    },

    {
        question: "Which JavaScript function converts text into a number?",
        answers: [
            "Number()",
            "Text()",
            "ConvertNumber()",
            "ToNumberText()"
        ],
        correct: 0
    },

    {
        question: "Which keyword is used to define a function?",
        answers: [
            "function",
            "def",
            "func",
            "method"
        ],
        correct: 0
    },

    {
        question: "Which loop runs while a condition is true?",
        answers: [
            "while",
            "repeat",
            "loopWhile",
            "during"
        ],
        correct: 0
    },

    {
        question: "Which method runs a function for every array item?",
        answers: [
            "forEach()",
            "eachLoop()",
            "everyLoop()",
            "arrayLoop()"
        ],
        correct: 0
    },

    {
        question: "What does CSS stand for?",
        answers: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 1
    },

    {
        question: "What does JavaScript primarily add to webpages?",
        answers: [
            "Structure",
            "Styling",
            "Interactivity and behavior",
            "Images"
        ],
        correct: 2
    }

];


// ========================================
// HTML ELEMENTS
// ========================================

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextButton");

const questionNumber =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const timerElement =
    document.getElementById("timer");

const progressBar =
    document.getElementById("progressBar");

const quizElement =
    document.getElementById("quiz");

const resultElement =
    document.getElementById("result");

const finalScoreElement =
    document.getElementById("finalScore");

const percentageElement =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("resultMessage");

const restartButton =
    document.getElementById("restartButton");

const bestScoreElement =
    document.getElementById("bestScore");

const historyElement =
    document.getElementById("history");

const clearHistoryButton =
    document.getElementById("clearHistory");


// ========================================
// QUIZ VARIABLES
// ========================================

let currentQuestion = 0;

let score = 0;

let timeLeft = 30;

let timer;


// ========================================
// START
// ========================================

showQuestion();

showRecords();


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    clearInterval(timer);

    timeLeft = 30;

    updateTimer();

    startTimer();


    answersElement.innerHTML = "";


    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    scoreElement.textContent =
        `Score: ${score}`;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    question.answers.forEach(function(answer, index) {

        const button =
            document.createElement("button");


        button.textContent = answer;

        button.className =
            "answer-button";


        button.addEventListener(
            "click",
            function() {

                selectAnswer(index);

            }
        );


        answersElement.appendChild(button);

    });


    nextButton.style.display = "none";
}


// ========================================
// TIMER
// ========================================

function startTimer() {

    timer = setInterval(function() {

        timeLeft--;

        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timer);

            selectAnswer(-1);

        }

    }, 1000);
}


function updateTimer() {

    timerElement.textContent =
        `Time: ${timeLeft}`;

}


// ========================================
// SELECT ANSWER
// ========================================

function selectAnswer(selectedIndex) {

    clearInterval(timer);


    const question =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer-button");


    buttons.forEach(function(button) {

        button.disabled = true;

    });


    if (selectedIndex === question.correct) {

        buttons[selectedIndex]
            .classList.add("correct");

        score++;

        scoreElement.textContent =
            `Score: ${score}`;

    } else {

        if (selectedIndex >= 0) {

            buttons[selectedIndex]
                .classList.add("wrong");

        }

        buttons[question.correct]
            .classList.add("correct");

    }


    nextButton.style.display = "block";
}


// ========================================
// NEXT QUESTION
// ========================================

nextButton.addEventListener(
    "click",
    function() {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            finishQuiz();

        }

    }
);


// ========================================
// FINISH QUIZ
// ========================================

function finishQuiz() {

    clearInterval(timer);


    quizElement.classList.add("hidden");

    resultElement.classList.remove("hidden");


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    finalScoreElement.textContent =
        `Score: ${score} / ${questions.length}`;


    percentageElement.textContent =
        `Percentage: ${percentage}%`;


    if (percentage >= 80) {

        resultMessage.textContent =
            "Excellent! 🏆";

    } else if (percentage >= 60) {

        resultMessage.textContent =
            "Good job! 👍";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "You passed! Keep practicing. 💪";

    } else {

        resultMessage.textContent =
            "Keep practicing and try again! 📚";

    }


    saveRecord(percentage);

    showRecords();
}


// ========================================
// RESTART
// ========================================

restartButton.addEventListener(
    "click",
    function() {

        currentQuestion = 0;

        score = 0;

        resultElement.classList.add("hidden");

        quizElement.classList.remove("hidden");

        showQuestion();

    }
);


// ========================================
// SAVE RECORD
// ========================================

function saveRecord(percentage) {

    let records =
        JSON.parse(
            localStorage.getItem("quizRecords")
        ) || [];


    const record = {

        score: score,

        total: questions.length,

        percentage: percentage,

        date: new Date().toLocaleString()

    };


    records.push(record);


    localStorage.setItem(
        "quizRecords",
        JSON.stringify(records)
    );

}


// ========================================
// DISPLAY RECORDS
// ========================================

function showRecords() {

    let records =
        JSON.parse(
            localStorage.getItem("quizRecords")
        ) || [];


    historyElement.innerHTML = "";


    if (records.length === 0) {

        bestScoreElement.textContent =
            "Best Score: 0%";

        historyElement.innerHTML =
            "<p>No quiz records yet.</p>";

        return;

    }


    const best =
        Math.max(
            ...records.map(
                record => record.percentage
            )
        );


    bestScoreElement.textContent =
        `Best Score: ${best}%`;


    records
        .slice()
        .reverse()
        .forEach(function(record) {

            const item =
                document.createElement("div");


            item.className =
                "history-item";


            item.innerHTML = `
                <span>
                    ${record.score}/${record.total}
                    (${record.percentage}%)
                </span>

                <span>
                    ${record.date}
                </span>
            `;


            historyElement.appendChild(item);

        });

}


// ========================================
// CLEAR RECORDS
// ========================================

clearHistoryButton.addEventListener(
    "click",
    function() {

        const confirmClear =
            confirm(
                "Are you sure you want to delete all quiz records?"
            );


        if (confirmClear) {

            localStorage.removeItem(
                "quizRecords"
            );

            showRecords();

        }

    }
);
