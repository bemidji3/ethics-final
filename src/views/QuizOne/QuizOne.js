import React, {useEffect, useState} from "react";
import Module from "../../layouts/Module";
import Header from "../../components/Header";
import { initialValues, quizQuestions, calculateScore } from "./config";
import useForm from "../../hooks/useForm";
import "./QuizOne.scss";
import Button from "../../components/Button";


function QuizOne(){
    const [finalScore, setFinalScore] = useState("-");

    const handleSubmit = (data) => {
        console.log("data in top level at quiz 1: ", data);
        const calculatedScore = calculateScore(data);
        setFinalScore(calculatedScore.toString());

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
        <div className="QuizOne">
            <iframe
                className="IntroductionVideo"
                src="https://www.youtube.com/embed/FzELkUpJYNY"
                allowFullScreen
            />
            <Module
                questions={quizQuestions}
                handleChange={wrappedHandleChange}
                formData={formData}
            />
            <div className="QuizOneFooter">
                <Button
                    onClick={simpleSubmit}
                >
                    SUBMIT!
                </Button>
                <Header className="QuizOneScore" as="h4">Score: {finalScore}/{Object.keys(formData).length}</Header>
            </div>
        </div>
    );
}

export default QuizOne;
