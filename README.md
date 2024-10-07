# SenecaTechTask
A React quiz application

Thank you for considering me for this position, I have really enjoyed creating this project.
I have used the styling from the provides figma file to inform my deisgn choices.

### Creation
I have created a full question with four answer pairs. The app is fed the question and the pairs of answers together. The answers are paired together as an object, both with the 'correct' property, one with the value of true, the other false.

The answers are loaded in a tracked using the variable 'selectedOptions'. At first, no options are selected, so every pair has a value of 'null'. When the question first is displayed, I didn't want to show the slider because I didn't want the student to think that 'answer a' was already selected for every question pair. So when the student first interacts with an question pair, that is when 'selectedOptions' is updated and when the slider appears.

When a student selects an option, 'countCorrectAnswers' compare all of their answers against the 'correct' property for each answer and returns 'correctCount'. A switch statement is used to make updates based on the number of correct answers, including changing the background colour, the status text, and locking the answers.

### Considerations
I considered making the background increase in 'greenness' as a student got closer to completing the question. I would have also included a small set of checkmarks as a clearer indicator to colour blind students. However, this would make it easier for a student to focus on 'making the colour greener' or 'making more checkmarks appear' instead of thinking about the question. This made me wonder, why include the changing background colour at all? I would be interested to discuss this in my review.

I did not have time to attempt the extension tasks, though I have placed the question object inside of a larger array which would allow many questions to be asked without any major changes to the code.
