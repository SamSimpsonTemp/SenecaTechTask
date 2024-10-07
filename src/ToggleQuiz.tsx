import React, { useState, useEffect } from "react";
import './ToggleQuiz.css';

interface Option { text: string; correct: boolean;}

interface Question { question: string; options: Option[][];}

interface ToggleQuizProps { questions: Question[];}

const ToggleQuiz: React.FC<ToggleQuizProps> = ({ questions }) => {
  
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    questions[0].options.map(() => -1)
  );
  
  const [locked, setLocked] = useState(false);

  const handleToggle = (pairIndex: number, optionIndex: number) => {
    const slider = document.getElementsByClassName('toggle-slider')[pairIndex] as HTMLElement;
    slider.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';

    if (locked) return;

    // Update the selected option for the specific pair
    setSelectedOptions(prevSelectedOptions => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[pairIndex] = optionIndex;
      return newSelectedOptions;
    });
  };

  // Effect to check if all answers are correct and lock the quiz
  useEffect(() => {

    const countCorrectAnswers = (questions: Question[], selectedOptions: number[]) => {
      return questions[0].options.reduce((correctCount, pair, i) => {
        return correctCount + (pair[selectedOptions[i]]?.correct ? 1 : 0);
      }, 0);
    };

    const correctCount = countCorrectAnswers(questions, selectedOptions);

    const container = document.getElementsByClassName('quiz-container')[0] as HTMLElement;
    const status = document.getElementsByClassName('status')[0] as HTMLElement;

    switch (correctCount) {
      case 1:
        container.style.background = 'linear-gradient(#F6B868, #EE6B2D)';
        break;
      case 2:
        container.style.background = 'linear-gradient(#F1B496, #EA806A)';
        break;
      case 3:
        container.style.background = 'linear-gradient(#F1B496, #EA806A)';
        break;
      case 4:
        container.style.background = 'linear-gradient(#76E0C2, #59CADA)';
        status.textContent = "The answer is correct!";
        setLocked(true);
        break;
      default:
        container.style.background = 'linear-gradient(#F6B868, #EE6B2D)';
    }
  }, [selectedOptions, questions]);

  return (
    <div className="quiz-container">
      <h2>{questions[0].question}</h2>

      <div className="toggle-wrapper">
        {questions[0].options.map((pair, pairIndex) => (
          <div key={pairIndex} className="toggle-pair">
            <div
              className="toggle-slider"
              style={{ transform: `translateX(${selectedOptions[pairIndex] === 1 ? 100 : 0}%)` }}
            ></div>

            <div
              className={`toggle-option left ${selectedOptions[pairIndex] === 0 ? "selected" : ""}`}
              onClick={() => handleToggle(pairIndex, 0)}
            >
              {pair[0].text}
            </div>
            <div
              className={`toggle-option right ${selectedOptions[pairIndex] === 1 ? "selected" : ""}`}
              onClick={() => handleToggle(pairIndex, 1)}
            >
              {pair[1].text}
            </div>
          </div>
        ))}
      </div>

      <div className="status">The answer is incorrect</div>
    </div>
  );
};

export default ToggleQuiz;
