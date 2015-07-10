/**
 * Created by Sam Morgan on 7/9/15.
 */

var count = 0;

var answerArray = [
  {rightAnswer: "a"},
  {rightAnswer: "b"},
  {rightAnswer: "c"},
  {rightAnswer: "d"}
];

var attempts = 0

var score = 0

                

                
                
var idAnswer = document.getElementById("answer");



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
    if (answer_text == answerArray[count].rightAnswer) {
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
        attempts = attempts +1;
        score = score +1;
    } else {
        document.getElementById("question_result").innerText = "Wrong!";
        attempts = attempts + 1;
    }
}

function process_answer_submission() {
    var user_answer = given_answer();
    update_question_result(is_correct_answer(user_answer));
    idAnswer.value = "";
}


function show_next() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
  idAnswer.value = "";
      
                
  if (count <=2){
    var idQuestion = document.getElementById("q"+count);
    idQuestion.className = "question hide";
    count = count + 1;
    idQuestion = document.getElementById("q"+count);
    idQuestion.className = "question";
    idAnswer.value = "";
  } else if (count ==3){
  var totalScore = (score/attempts)*100;
  alert("You're total score was " + totalScore + "%. You answered " + score + " questions correct in " + attempts + " tries.");
  }
}