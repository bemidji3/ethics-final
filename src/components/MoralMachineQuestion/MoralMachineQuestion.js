import React from "react";
import Image from "../Image";
import RadioButtonGroup from "../RadioButtonGroup";
import "./MoralMachineQuestion.scss";

function MoralMachineQuestion({imageOne, imageTwo, handleChange, index, questionAnswers}) {
    return (
        <div className="MoralMachineQuestion">
            <div className="MoralMachineImages">
                <Image className="ImageOne" src={imageOne.source} label={imageOne.label}/>
                <Image labelClassnames="SecondImage" className="ImageTwo" src={imageTwo.source} label={imageTwo.label}/>
            </div>
            <RadioButtonGroup
                index={index}
                values={questionAnswers}
                onChange={handleChange}
            />
        </div>
    )
}

export default MoralMachineQuestion;
