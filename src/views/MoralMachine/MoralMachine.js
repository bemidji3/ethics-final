import React, {useEffect, useState} from "react";
import Module from "../../layouts/Module";
import Header from "../../components/Header";
import { initialValues, moralMachineQuestions, calculateFinalScore } from "./config";
import useForm from "../../hooks/useForm";
import "./MoralMachine.scss";
import Button from "../../components/Button";
import Segment from "../../components/Segment";
import {some} from "lodash";
import ResultsView from "../ResultsView";


function MoralMachine(){
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState({});


    const handleSubmit = (data) => {
        const finalScoreObject = calculateFinalScore(data);
        console.log("final score object ", finalScoreObject);
        setShowResults(true);
        setResults(finalScoreObject);
        resetForm();
    };

    const handleReset = () => {
        resetForm();
        window.location.reload(false);
    };

    const {
        formData,
        handleChange,
        simpleSubmit,
        resetForm,
    } = useForm(initialValues, handleSubmit);

    const wrappedHandleChange = (index, data) => {
        handleChange(`question${index}`, data);
    };


    useEffect(() => {
        if(!some(formData, (value) => { return value === "" })){
            setButtonEnabled(true);
        }
    }, [formData]);

    return (
        <Segment className="MoralMachine">
            <Header as="h2" className="MoralMachineHeader">Moral Machine Questions</Header>
            <Module
                questions={moralMachineQuestions}
                handleChange={wrappedHandleChange}
                formData={formData}
            />
            {showResults && (
                <ResultsView
                    resultsObject={results}
                />
            )}
            <div className="MoralMachineFooter">
                <Button
                    className="SubmitButton"
                    primary
                    onClick={simpleSubmit}
                    disabled={!buttonEnabled}
                >
                    SUBMIT!
                </Button>
                <Button
                    className="ResetButton"
                    secondary
                    onClick={handleReset}
                >
                    RESET!
                </Button>
            </div>
        </Segment>
    );
}

export default MoralMachine;
