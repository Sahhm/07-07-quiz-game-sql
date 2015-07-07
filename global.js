/**
 * Created by Samuel Stephen & Patrick Carlton on 7/7/15.
 */



var questionArray = [
                {   question: "What are you?",
                    choices: ["(a) human", "(b) robot", "(c) unicorn", "(d) chicken"],
                    rightAnswer: "a"
                },

                {   question: "Where is OCS?",
                    choices: ["(a) Omaha", "(b) Elmwood", "(c) Nehawka", "(d) Lincoln"],
                    rightAnswer: "a"
                },

                {   question: "What's the right answer?",
                    choices: ["(a) this one", "(b) not this one", "(c) not this one", "(d) not this one"],
                    rightAnswer: "a"
                },

                {   question: "Pick something.",
                    choices: ["(a) Stop picking a", "(b) I'm bored", "(c) yup", "(d) Chicken-Wang"],
                    rightAnswer: "a"
                }   ];

var idQuestion = document.getElementById("question");

idQuestion.innerText = questionArray[0].question;

var idChoices = document.getElementById("choices");

idChoices.innerText = questionArray[0].choices.join(", ");


