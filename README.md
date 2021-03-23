# Coding Quiz by Benjamin Wilson ✨

## Description 😊

I had a lot of fun learning and testing my ability with this coding quiz, i started using bootstrap which made my CSS file a lot smaller, in my past projects I would spend most of my time positioning and styling. I'm glad I found bootstrap because I could spend more time figuring out how to construct a one page quiz with different sections.

> EXAMPLE: Here is an example of what the website looks like
> ![SCREENSHOT](https://user-images.githubusercontent.com/77607177/112074579-bb7b3280-8bca-11eb-8a35-b3c723916653.png)

## HOW TO PLAY 💥

- First begin by selecting the "click to start" button as seen below, following this the quiz will commence.

![SCREENSHOT](https://user-images.githubusercontent.com/77607177/112074743-114fda80-8bcb-11eb-84dc-a7486ae2973d.PNG)

- A question with four options will appear select one which you feel is most appropirate to answer the question correctly.

- The next question will appear and you will repeat the previous step until your time is up or you have answered all ten questions. after every question text will display prompting you if you have correctly or incorrectly answered the question.

- Once an end game condition is meet (no time remaining or completed all questions) your final results will be displayed with how fast you did the quiz and what you scored out of ten. Following this you are able to submit your initials to be placed on the leaderboard.

## REPOSITORY 📁

I have ensure I have given extenstive comments, allowing me or future developers to understand what problems I was facing in that current commit, what I completed and created, also future tasks I needed to work on to make the application functional

What I have been doing to keep my repo clean and up to date:

- I have constantly used git add, commit and push to ensure all changes have been updated to the github repo
- Added extensive comments describing changes and what they could possibly mean for the client or developer
- Created a high quality read me file using different methods to convey and display info

## CODE 🖥️

> NOTE: This is not how the original HTML doc is layed out so don't expect indentation to be perfect

```HTML
<!-- FINAL SCORE SECTION -->
<section id="finalScoreSection" class="pl-5 pt-5 justifycontent-center font-weight-bold" style="display: none;">
    <div class="col-2"></div>
        <div class="col-8 text-left">
            <h2 class="font-weight-bold pt-2 pb-3 m-2">You completed the quiz in <span id="finalScoreTime"></span> seconds! with a score of <span id="finalScorePoints"></span> out of 10 💫</h2>
            <form>
                <p class="pt-2 pb-3 m-2">Enter your initials to be placed on the Leaderboard: <input id="initialInput" class="form-control pt-2 pb-3 mt-2" type="text">
                    <button type="submit" id="submitInitialBtn" class="btn btn-success mt-3">Submit</button>
                </p>
            </form>
        </div>
    <div class="col-2"></div>
</section>
```

> EXAMPLE: This example shows my HTML using bootstrap to position and style elements and me using a variety of ids for me to link my elements in JS

```Javascript
var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver()
            }
        }
    },1000);
```

> EXAMPLE: This is my timer function which counts down, while also checking if the game has finished due to the user completing all the questions

## LINKS 🔗

[REPOSITARY](https://github.com/MarketingPlus/coding-quiz)

[WEBSITE](https://marketingplus.github.io/coding-quiz/)
