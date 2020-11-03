import React from "react";
import classNames from "classnames";
import { Radio as SemanticRadio } from "semantic-ui-react";
import "./RadioButton.scss";

export default function Radio({
    extraClassNames,
    onChange,
    value,
    index,
    ...restProps}) {

    const handleChange = (data) => {
        console.log("data ", data, " in radio button");
        onChange && onChange(index, data);
    };

    const radioClassNames = classNames("RadioButton ", {
        [extraClassNames]: !!extraClassNames,
    });

    return (
        <SemanticRadio
            className={radioClassNames}
            value={value}
            onChange={(_, {value} ) => {handleChange(value)}}
            {...restProps}
        />
    )
};

