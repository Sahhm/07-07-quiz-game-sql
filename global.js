/**
 * Created by Samuel Stephen & Patrick Carlton on 7/7/15.
 */



var question1 = {   question: "What are you?",
                    possibleAnswers: "(a) human, (b) robot, (c) unicorn, (d) chicken",
                    rightAnswer: "a"
                };

var question2 = {   question: "Where is OCS?",
                    possibleAnswers: "(a) Omaha, (b) Elmwood, (c) Nehawka, (d) Lincoln",
                    rightAnswer: "a"
                };

var question3 = {   question: "What's the right answer?",
                    possibleAnswers: "(a) this one, (b) not this one, (c) not this one, (d) not this one",
                    rightAnswer: "a"
                };

var question4 = {   question: "Pick something.",
                    possibleAnswers: "(a) Stop picking a, (b) I'm bored, (c) yup, (d) Chicken-Wang",
                    rightAnswer: "a"
                };

var idQuestion = document.getElementById("question");

idQuestion.innerText = question1.question;
