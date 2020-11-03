import React from "react";
import Form from "../../components/Form";
import FormQuestion from "../../components/FormQuestion";
import "./Module.scss";


function Module({questions, handleChange}){
    return (
        <Form
            extraClassnames="ModuleForm"
        >
            {questions.map((question, index) => {
                return (
                    <FormQuestion
                        index={index}
                        question={question}
                        handleChange={handleChange}
                    />
                )
            })}
        </Form>
    )
}

export default Module;
