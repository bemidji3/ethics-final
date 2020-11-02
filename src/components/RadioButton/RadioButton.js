import React from "react";
import classNames from "classnames";
import { Radio as SemanticRadio } from "semantic-ui-react";

export default function Radio({
    extraClassNames,
    onChange,
    ...restProps}) {

    const handleChange = (event, data) => {
        onChange && onChange(event, data);
    };

    const radioClassNames = classNames("RadioButton ", {
        [extraClassNames]: !!extraClassNames,
    });

    return (
        <SemanticRadio
            className={radioClassNames}
            onChange={handleChange}
            {...restProps}
        />
    )
};

