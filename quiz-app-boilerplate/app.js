/**
 * Example store structure
 */
'use strict';
//MY ANSWER KEY
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How do you create an alert box?',
      answers: [
        'msgBox(“Correct!”)',
        'alertBox(“Correct!”)',
        'alert(“Correct!”)',
        'msg.write(“Correct!’)'
      ],
      correctAnswer: 'alert(“Correct!”)'
    },
    {
      question: 'How do you call a function in Javascript?',
      answers: [
        'call.myFunction()',
        'myFunction()',
        'call myFunction()',
        'callFunction=myFunction()'
      ],
      correctAnswer: 'myFunction()'
    },
    {
      question: 'Inside what element do we place JavaScript?',
      answers: [
        '<scripting>',
        '<js>',
        '<javascript>',
        '<script>'
      ],
      correctAnswer: '<script>'
    },
    {
      question: 'How do you write an IF statement?',
      answers: [
        'if i = 7',
        'if (i == 7)',
        'if i ==7 then',
        'if i = 7 then'
      ],
      correctAnswer: 'if (i == 7)'
    },
    {
      question: 'How do you create a function?',
      answers: [
        'function: myFunction()',
        'function = myFunction()',
        'function myFunction()',
        'myFunction <= function'
      ],
      correctAnswer: 'function myFunction()'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
function render() {
  let question = store.questions[store.questionNumber];
  let formFormat =
    `<form>
      <h3>How do you create an alert box?</h3>
      <button type="button" class="blockbutton">Block Button</button>
      <button type="button" class="blockbutton">Block Button</button>
      <button type="button" class="blockbutton">Block Button</button>
      <button type="button" class="blockbutton">Block Button</button>
      <input type="submit" value="submit">
    </form>`

    return  formFormat;
}

function showStartPage() {
  let startPage =
    `<h2> Start my quiz here.</h2>
<button type="button" class="start-btn">Start</button>
`;
$('main').html(startPage);
}

$("main").on("click", ".start-btn", function () {
  let page = render();
  $("main").html(page);
  //$(".question").show();
  //$(".intropage").hide();

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






