import React, { Fragment, useState, useEffect } from "react";
import FormField from "../FormField";
import RadioButton from "../RadioButton";
import { capitalize } from "lodash";

function RadioButtonGroup({values, defaultValue, name, }) {
    const [groupValue, setGroupValue] = useState(null);
    const handleChange = (e, { value }) => setGroupValue(value);

    useEffect(() => {
        setGroupValue(defaultValue);
    }, [defaultValue]);

    return (
        <Fragment>
            {values &&
            values.map(val => (
                <FormField>
                    <RadioButton
                        radio
                        label={capitalize(val)}
                        name={name}
                        value={val}
                        checked={groupValue === val}
                        onChange={handleChange}
                    />
                </FormField>
            ))}
        </Fragment>
    );
}

export default RadioButtonGroup;
