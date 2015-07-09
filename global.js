/**
 * Created by Sam Morgan on 7/9/15.
 */

var count = 0

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

                idQuestion.innerText = questionArray[count].question;

                var idChoices = document.getElementById("choices");

                idChoices.innerText = questionArray[count].choices.join(", ");


function show_next() {
                
  if (count <=2){
    count = count + 1
  
    idQuestion.innerText = questionArray[count].question;
    idChoices.innerText = questionArray[count].choices.join(", ");
  }
}
// Part 2

/* Function given_answer
 *
 * Return text currently typed into the div#answer field
 *
 * Test by running function in browser console
 */
function given_answer() {
    return document.getElementById("answer").value

}


/*
 * Function is_correct_answer, which takes one argument (called answer_text).
 *
 * This function checks if the given argument matches the text of the correct answer. It should return true or false.
 */

function is_correct_answer(answer_text) {
    if (answer_text == questionArray[0].rightAnswer) {
        return true;
    } else {
        return false;
    }
}




/*  Write a function called update_question_result,
 *
 *  which takes one argument (named correct).
 *
 *  When the argument is true, the function sets the content of #question_result to "Success!".
 *  Otherwise, the function sets the content of #question_result to "Wrong!".
 */
function update_question_result(correct) {
    if (correct == true) {
        document.getElementById("question_result").innerText = "Success!";
    } else {
        document.getElementById("question_result").innerText = "Wrong!";
    }
}

function process_answer_submission() {
    var user_answer = given_answer();
    update_question_result(is_correct_answer(user_answer));
}


