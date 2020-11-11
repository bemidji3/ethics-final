import React, {useEffect} from "react";
import Module from "../../layouts/Module";
import Header from "../../components/Header";
import { initialValues, moralMachineQuestions } from "./config";
import useForm from "../../hooks/useForm";
import "./MoralMachine.scss";
import Button from "../../components/Button";
import Segment from "../../components/Segment";
import {some, values, isEmpty } from "lodash";


function MoralMachine(){

    const handleSubmit = (data) => {
        console.log("data in top level at quiz 1: ", data);
    };

    const {
        formData,
        handleChange,
        simpleSubmit
    } = useForm(initialValues, handleSubmit);

    const wrappedHandleChange = (index, data) => {
        console.log("index at MoralMachine level ", index, " data ... ", data);
        handleChange(`question${index}`, data);
    };

    const invalidInput = () => {
        return some(formData, isEmpty)
    };

    useEffect(() => {
        console.log("formdata ", formData);
        invalidInput();
    }, [formData]);

    return (
        <Segment className="MoralMachine">
            <Header as="h2" className="MoralMachineHeader">Moral Machine Questions</Header>
            <Module
                questions={moralMachineQuestions}
                handleChange={wrappedHandleChange}
                formData={formData}
            />
            <div className="MoralMachineFooter">
                <Button
                    className="SubmitButton"
                    primary
                    onClick={simpleSubmit}
                    disabled={invalidInput()}
                >
                    SUBMIT!
                </Button>
            </div>
        </Segment>
    );
}

export default MoralMachine;
