import React from "react";
import { Form as SemanticForm } from "semantic-ui-react";
import "semantic-ui-css/components/form.css";

function Form(props) {
    return <SemanticForm {...props}>{props.children}</SemanticForm>;
}

export default Form;