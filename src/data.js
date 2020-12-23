'use strict';

/* Program Data
  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
    your handlers will query the DOM each time they need to make a change
  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/


// this is example data for the starter demo
//  delete this data when you begin and use the own quiz data instead

/**
 * data that is saved and used between user interactions
 * @property {string} separator - the full user artwork
 * @property {string[]} lines - all the lines that have been entered
 */
export const data = {
  separator: '|',
  lines: [],
};

// here's a suggestion for your game's state, see if this works for your team
//  there are many ways to represent your game as data!
/**
 *
 */
const quizData = {
  quiz: {
    // how many questions has the user answered?
    //  you can calculate this value by iterating through the questions
    //  is selected === -1?
    answered: 0,
    // how many correct answers has the user submitted?
    //  you can calculate this value by iterating through the questions
    //  is selected === correct?
    correct: 0,
  },
  // the questions in the quiz
  questions: [
    {
      text: "How do you declare a JavaScript variable?",
      answers: {
        a: 'var carName',
        b: 'v carName',
        c: 'variable carName',
      },
       correctAnswer: 'a',
       resource: [
        {
          text: 'www.w3schools.com',
          href: 'https://www.w3schools.com/quiztest/result.asp',
        },
      ],
    },

    {
        text: 'How do you write "Hello World" in an alert box?',
        answers: {
           a: 'msgBox ("Hello World")',
           b: 'alertBox ("Hello World")',
           c: 'alert ("Hello World")',
        },
        correctAnswer: 'a',
       resource: [
        {
          text: 'www.w3schools.com',
          href: 'https://www.w3schools.com/quiztest/result.asp',
        },
      ],
    },
    
    {
      text: 'Which of the following is not a reserved word in JavaScript?',  
      answers: {
            a: 'interface',
            b: 'program',
            c: 'throws',
          },
       correctAnswer: 'b',
       resource: [
        {
          text: 'javascript.info',
          href: 'https://mathiasbynens.be/notes/javascript-identifiers',
        },
      ],
    },

  {
      text: 'What is it called when we make a mistake in the script?',
    answer: {
       a: 'Error',
       b: 'Bug',
       c: 'Mistake',
      },
       correctAnswer: 'b',
       resource: [
        {
          text: 'javascript.info',
          href: 'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette',
        },
      ],
  },

{
  text: 'Which of the following is the definition for debugging?',
  answer: {
     a: 'Finding bugs',
     b: 'Fixing bugs',
     c: 'Both Finding & Fixing bugs',
      },
   correctAnswer: 'c',
   resource: [
    {
      text: 'javascript.info',
      href: 'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette',
    },
      ],
 
     },
     {
      text: 'The "function" and " var" are known as?',
      answer: {
      a: 'Keywords',
      b: 'Data types',
      c: 'Declaration statements',
        },
     correctAnswer: 'c',
      resource: [
    {
      text: 'javascript.info',
      href: 'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette',
    },
      ],
  },

{
  text: 'Which of the following is the definition for debugging?',
  answer: {
     a: 'Finding bugs',
     b: 'Fixing bugs',
     c: 'Both Finding & Fixing bugs',
  
      },
   correctAnswer: 'c',
   resource: [
    {
      text: 'javascript.info',
      href: 'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette',
    },
      ],
 
     },
     {
      text: 'The "function" and " var" are known as?',
      answer: {
      a: 'Keywords',
      b: 'Data types',
      c: 'Declaration statements',
     
        },
       correctAnswer: 'c',
       resource: [
        {
          text: 'javascript.info',
          href: 'https://www.javatpoint.com/javascript-mcq',
        },
      ],
     
     },
     {
          text: 'Where is the error icon option available?',
          answer: {
            a: 'Tools',
            b: 'Help',
            c: 'File',
              },
           correctAnswer: 'a',
           resource: [
        {
          text: 'javascript.info',
          href: 'https://www.sanfoundry.com/javascript-mcqs-forms-debugging/#google_vignette',
        },
       ],
         
      },
      {
        text: 'In JavaScript the x===y statement implies that?',
        answer: {
          a: 'Both x and y are equal in value, type and reference address as well',
          b: 'Both are x and y are equal in value only',
          c: 'Both are equal in the value and data type'
            },
         correctAnswer: 'c',
         resource: [
      {
        text: 'javascript.info',
        href: 'https://www.javatpoint.com/javascript-mcq',
      },
     ],
    },
  ],
};


