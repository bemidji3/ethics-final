import React from "react";
import Form from "../../components/Form";
import MoralMachineQuestion from "../../components/MoralMachineQuestion";
import "./Module.scss";


function Module({questions, handleChange}){
    return (
        <Form
            extraClassnames="ModuleForm"
        >
            {questions.map((question, index) => {
                return (
                    <MoralMachineQuestion
                        imageOne={question.imageOne}
                        imageTwo={question.imageTwo}
                        handleChange={handleChange}
                        questionAnswers={question.potentialAnswers}
                        index={index}
                    />
                )
            })}
        </Form>
    )
}

export default Module;
