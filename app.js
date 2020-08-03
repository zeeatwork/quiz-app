'use strict';
//MY ANSWER KEY
const store = {
  // 5 or more questions are required
  questions: [
    {
      name: 'How do you create an alert box?',
      answers: [
        'msgBox(“Correct!”)',
        'alertBox(“Correct!”)',
        'alert(“Correct!”)',
        'msg.write(“Correct!’)'
      ],
      correctAnswer: 'alert(“Correct!”)',
      description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'How do you call a function in Javascript?',
      answers: [
        'call.myFunction()',
        'myFunction()',
        'call myFunction()',
        'callFunction=myFunction()'
      ],
      correctAnswer: 'myFunction()',
      description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Inside what element do we place JavaScript?',
      answers: [
        '&lt;scripting&gt;',
        '&lt;js&gt;',
        '&lt;javascript&gt;',
        '&lt;script&gt;'
      ],
      correctAnswer: '&lt;script&gt;',
      description: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'How do you write an IF statement?',
      answers: [
        'if i = 7',
        'if (i == 7)',
        'if i ==7 then',
        'if i = 7 then'
      ],
      correctAnswer: 'if (i == 7)',
      description: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'How do you create a function?',
      answers: [
        'function: myFunction()',
        'function = myFunction()',
        'function myFunction()',
        'myFunction <= function'
      ],
      correctAnswer: 'function myFunction()',
      description: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  selectedAnswer: ""
};
function render() {

let formFormat = "";
  let question = store.questions[store.questionNumber];
  console.log(question);
  let currentQuestionNum = store.questionNumber + 1;
  
  let numCorrect = store.score;
  let numWrong = store.questionNumber - store.score;
  
  // alert(currentQuestionNum);
  
  if(currentQuestionNum == 6){
  formFormat =
    `<h1>Summary</h1>
    <p>Correct: ${numCorrect}</p> 
    <p>Incorrect: ${numWrong}</p>
    <button type="button" class="restart-test">Restart the Test</button>`
  }else{
  
  
  formFormat =
    `<form class="question">
      <h3>${question.name}</h3>
      <button type="button" class="blockbutton">${question.answers[0]}</button>
      <button type="button" class="blockbutton">${question.answers[1]}</button>
      <button type="button" class="blockbutton">${question.answers[2]}</button>
      <button type="button" class="blockbutton">${question.answers[3]}</button>
      <div style="text-align: center;">
      <input id="answerSubmit" type="submit" value="submit">
      </div>
    </form>
    <footer>
        <p>Question ${currentQuestionNum} OUT OF 5</p>
        <p>Correct: ${numCorrect} Incorrect: ${numWrong}</p>
      </footer>`;
      }

  $("#main-container").html(formFormat);

  $('.blockbutton').each(function(index, blockB) {
    if ($(blockB).html() == question.correctAnswer) {
      $(blockB).addClass('correct-ans');
    }
  });

  $('.restart-test').click(function(){
    console.log('test restart');
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    store.selectedAnswer = "";
    showStartPage();
  });
}

function showStartPage() {
  let startPage =
    `<header>
      <h1>JavaScript Quiz</h1>
    </header>
    <section class="container">
      <section id="main-container" class="text-center">
        <h2> Start my quiz here.</h2>
        <button type="button" class="start-btn">Start</button>
      </section>
      <section id="description-container" class="d-none text-center">
        <p id="description-text"></p>
        <button type="button" class="next-btn d-inline-block">Go To Next Question</button>
        <button type="button" class="summary-btn d-inline-block">Go To Summary</button>
      </section>
    </section>
`;
  $('main').html(startPage);

  $('.next-btn, .summary-btn').click(function() {
    console.log('test');
    $('#description-container').hide();
    //alert("YAY");
    store.questionNumber = store.questionNumber + 1;
    render();
  });
}

$("main").on("click", ".start-btn", function () {
  render();
})

$("main").on("click", ".blockbutton", function (event) {

// alert(this);

$(".blockbutton").removeClass('ans-clicked');
$(this).removeClass('ans-clicked').addClass('ans-clicked');
$("#answerSubmit").css("display","inline-block");


// alert("button works: " + $(event.target).html());

  console.log($(event.target).html());
  store.selectedAnswer = $(event.target).html();
  
  
  
})

$("main").on("submit", ".question", function (event) {
  console.log('test submit');

  event.preventDefault();
  
  let question = store.questions[store.questionNumber];
  
  console.log(store.selectedAnswer, question.correctAnswer);
  
  if (store.selectedAnswer == question.correctAnswer) {
    store.score = store.score + 1;
    //alert("YAY");
    store.questionNumber = store.questionNumber + 1;
    render();
  } else {
    //alert("Nope!");
    $('#answerSubmit').hide();
    $(".blockbutton").removeClass('ans-clicked btn-wrong').addClass('btn-wrong disabled');
    $('.correct-ans').removeClass('btn-correct').addClass('btn-correct');
    $('#description-text').text(question.description);
    $('#description-container').hide().show();

    if ((store.questions.length-1) == store.questionNumber) {
      $('.next-btn').hide();
      $('.summary-btn').hide().show();
    } else {
      $('.summary-btn').hide();
      $('.next-btn').hide().show();
    }
  }
})


$(showStartPage)


/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


