import React, {useEffect, useState} from "react";
import Module from "../../layouts/Module";
import Header from "../../components/Header";
import { initialValues, quizQuestions, calculateScore } from "./config";
import useForm from "../../hooks/useForm";


function QuizOne(){
    const [finalScore, setFinalScore] = useState(0);

    const handleSubmit = (data) => {
        console.log("data in top level at quiz 1: ", data);
        alert("submit!");
        const calculatedScore = calculateScore(data);
        setFinalScore(calculatedScore);

    };

    const {
        formData,
        handleChange,
        simpleSubmit
    } = useForm(initialValues, handleSubmit);

    const wrappedHandleChange = (index, data) => {
        console.log("index at QuizOne level ", index, " data ... ", data);
        handleChange(`question${index}`, data);
    };

    useEffect(() => {
        console.log("formdata ", formData);
    }, [formData]);

    return (
        <div>
            <Module
                questions={quizQuestions}
                handleSubmit={simpleSubmit}
                handleChange={wrappedHandleChange}
                formData={formData}
            />
            <Header as="h4">Score: {finalScore}</Header>
        </div>
    );
}

export default QuizOne;
