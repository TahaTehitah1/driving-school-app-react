import { useContext, useEffect, useState } from "react";
import Question from "./Question";
import { QuizContext } from "../context/QuizProvider";

export default function Home() {
    const { questions } = useContext(QuizContext);
    const [number, setNumber] = useState(0);

    return (
        <main>
            {questions[number] !== null ? <Question question={questions[number]}></Question> : ""}
        </main>
    );
}
