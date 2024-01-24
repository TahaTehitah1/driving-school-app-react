import { createContext, useEffect, useState } from "react";

// First step : Creating the context
const QuizContext = createContext();

const QuizProvider = ({children}) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/questions")
            .then(res => res.json())
            .then(data => {
                console.log("Fetching questions ...");
                setQuestions(data);
            })
            .catch(err => {
                console.log("Erreur : " + err);
            })
    }, []);

    return (
        <QuizContext.Provider value={{questions}}>
            {children}
        </QuizContext.Provider>
    );
}

export {QuizContext, QuizProvider};