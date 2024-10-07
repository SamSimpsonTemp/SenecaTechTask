import React from 'react';
import ToggleQuiz from './ToggleQuiz.tsx';

// Define types for the question and option structures
interface Option { text: string; correct: boolean;}

interface Question { question: string; options: Option[][];}

const questions: Question[] = [
  {
    question: "What are the parts of an animal cell?",
    options: [
      [
        { text: "Nucleus", correct: true },
        { text: "Cell wall", correct: false }
      ],
      [
        { text: "Mitochondria", correct: true },
        { text: "Chloroplast", correct: false }
      ],
      [
        { text: "Cytoplasm", correct: false },
        { text: "Vacuole", correct: true }
      ],
      [
        { text: "Ribosome", correct: true },
        { text: "Cell membrane", correct: false }
      ]
    ]
  }
];

const App: React.FC = () => {
  return (
    <div>
      <ToggleQuiz questions={questions} />
    </div>
  );
};

export default App;