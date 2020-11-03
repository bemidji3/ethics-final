import React from "react";
import Form from "../../components/Form";
import FormQuestion from "../../components/FormQuestion";
import Button from "../../components/Button";
import "./Module.scss";


function Module({questions, handleSubmit, handleChange}){
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
            <Button
                onClick={handleSubmit}
            >
                SUBMIT!
            </Button>
        </Form>
    )
}

export default Module;
