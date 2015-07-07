# 07-07-quiz-game-v2

<h1>Version 2</h1>

<p>This version of the project will abandon the use of alerts/prompts and instead use HTML elements. You'll use Javascript to read/interact with those HTML elements (a.k.a. the "DOM").</p>

<p>This is comparable to when we went from the command-line to the Web. Much of your logic will remain the same, but your UX will change.</p>

<p>Make a brand new project folder for this, and start from scratch. Copy over code from the first version <em>as needed</em>.</p>

<p>You might find going through <a href="http://teamtreehouse.com/library/interactive-web-pages-with-javascript">http://teamtreehouse.com/library/interactive-web-pages-with-javascript</a> (Just the "JavaScript and the DOM" and "Selecting Elements and Adding Events with JavaScript" sections) helpful. Maybe just going through a particular video in a section when needed will be enough, or maybe watching the entire thing first will be best.</p>

<hr>

<p>The following tasks should be done in order.</p>

<h2>Part 1</h2>

<ol>
<li>Make an <strong>index.html</strong> file. Build the following HTML structure:

<ul>
<li>
<code>div#quiz</code> (This means make a <code>div</code> and give it an <code>id</code> of <code>quiz</code>.)

<ul>
<li>
<code>div#question</code>

<ul>
<li>Empty for now. We'll use JavaScript to put question text into this.</li>
</ul>
</li>
<li>
<code>div#choices</code>

<ul>
<li>Empty for now. We'll use JavaScript to put question text into this.</li>
</ul>
</li>
<li>
<code>input[type=text]#answer</code> (This means make an <code>input</code> tag with attribute <code>type=text</code> and an <code>id</code> of <code>answer</code>.</li>
<li>
<code>button#submitter</code> (This means make a <code>button</code> tag with an <code>id</code> of <code>submitter</code>.)</li>
</ul>
</li>
<li>
<code>div#question_result</code>

<ul>
<li>Empty for now. We'll use JavaScript to put each question's result into this.</li>
</ul>
</li>
<li>
<code>button#next</code>

<ul>
<li>This will eventually be the button that the user clicks after they see that a question was correct/wrong. It will load up the next question.</li>
</ul>
</li>
<li>
<code>div#total_result</code>

<ul>
<li>Empty for now. We'll use JavaScript to put the quiz's final result into this.</li>
</ul>
</li>
</ul>
</li>
<li>Add a <strong>global.js</strong> file.

<ul>
<li>Copy over your collection of questions. Don't copy anything else - especially not the alerts/prompts.</li>
</ul>
</li>
<li>Using Javascript, add the first question's content to <code>div#question</code>. So when you load the page, the first question's content should already be there.</li>
<li>Do the same thing for the question's choices (into <code>div#choices</code>).</li>
</ol>

<p>Okay so now you have a non-functional quiz game, but at least it's showing the user the first question and choices. And there is a field for the user to enter their answer (and a button to submit it), but that doesn't actually <em>do</em> anything yet. So let's fix that. (After this, we'll worry about going through multiple questions – for now, we'll deal with the first question alone.)</p>

<h2>Part 2</h2>

<ol>
<li>Write a function called <code>given_answer</code> which returns the text that's currently typed into the <code>#answer</code> field. You can test this by running <code>given_answer()</code> in the Javascript console built into your web browser.

<ul>
<li>Now you, more or less, have <code>prompt</code> functionality. The user can type something in, and you can retrieve its value.</li>
</ul>
</li>
<li>Write a function called <code>is_correct_answer</code>, which takes one argument (called <code>answer_text</code>). This function checks if the given argument matches the text of the correct answer. It should return <code>true</code> or <code>false</code>.

<ul>
<li>Later, we will use the <code>given_answer()</code> method to define the value of this function's <code>answer_text</code> argument.</li>
<li>You'll need a way to indicate what the correct answer is. You might accomplish this a few different ways. One way is to just hard-code it in for now. Like I said before, we're only concerned with the first question for now, so it's okay that this code won't work as it is for multiple questions.</li>
<li>Again, you can test this code in the console.</li>
</ul>
</li>
<li>Write a function called <code>update_question_result</code>, which takes one argument (named <code>correct</code>). When the argument is <code>true</code>, the function sets the content of <code>#question_result</code> to <code>"Success!"</code>. Otherwise, the function sets the content of <code>#question_result</code> to <code>"Wrong!"</code>.

<ul>
<li>You can test this out in console too.</li>
</ul>
</li>
</ol>

<p>Now we have the various pieces of functionality that would be needed to make this question and its answering interactive. But it's <em>not</em> interactive yet. We're doing everything manually in the console. Let's have these functions run on their own when the user submits their answer.</p>

<h2>Part 3</h2>

<ol>
<li>Write a function called <code>process_answer_submission</code>. It should look something like this:</li>
</ol>

<div class="highlight highlight-javascript"><pre><span class="pl-k">function</span> <span class="pl-en">process_answer_submission</span>(){
  <span class="pl-k">var</span> user_answer <span class="pl-k">=</span> given_answer();
  update_question_result(is_correct_answer(user_answer));
}</pre></div>

<ol>
<li>Now we want that function to run whenever <code>button#submitter</code> is clicked. You might need to do some research to figure this out. Hint: What you're trying to do here is attach an "event handler" to the button. The "event" is "click". So you're trying to define how the button <em>handles</em> being <em>clicked</em>. Specifically, you're trying to say that the behavior of the button, when it's clicked, should be as described in the <code>process_answer_submission</code> function.</li>
</ol>

<hr>

<p>You should now have a minimally functional quiz game, using Javascript and the DOM. Here are some things left:</p>

<ul>
<li>After a question is submitted, when the user clicks the <code>#next</code> button:

<ul>
<li>Clear the <code>#answer</code> field.</li>
<li>Clear <code>#question_result</code>.</li>
<li>Set the text of <code>#question</code> to the next question's text.</li>
<li>Set the text of <code>#choices</code> to the next question's choices.</li>
</ul>
</li>
<li>After all of the questions have been answered, update <code>#total_result</code>.

<ul>
<li>(E.g. "You answered 7 of 10 questions correctly, good for 70.0%")</li>
</ul>
</li>
</ul>

<p>Hint: It will be helpful to have a global variable that tracks the current question.</p>

<p>Some of this might be too difficult to do yourself. I expect all of you to get through Part 1, and for most of you to get through Part 2. We'll review all of this in the morning.</p>
      </div>