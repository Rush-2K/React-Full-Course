import { useState, useCallback } from "react"

import QUESTIONS from '../question.js';
import Question from "./Question.jsx";
import quizCompleteImg from '../assets/quiz-complete.png'


export default function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAsnwer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAsnwer]
        });

    }, [])

    const handleSkipAnswer = useCallback(() => {handleSelectAnswer(null)}, [handleSelectAnswer])

    if(quizIsComplete){
        return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz is completed</h2>
        </div>
        )
    }

    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
        
    )
}

