import React from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import Header from "../Header";

function FormQuestion({ question, handleChange, index}){

    return (
        <div className="FormQuestion">
            <Header as="h5">Question #{index + 1 + " "}{question.text}</Header>
            <RadioButtonGroup
                index={index}
                values={question.potentialAnswers}
                onChange={handleChange}
            />
        </div>
    );
}

export default FormQuestion;
