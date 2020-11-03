import React, { useState } from "react";
import FormField from "../FormField";
import RadioButton from "../RadioButton";
import "./RadioButtonGroup.scss";
import { capitalize } from "lodash";

function RadioButtonGroup({values, onChange, index }) {
    const [groupValue, setGroupValue] = useState(null);
    const handleChange = (index, value) => {
        if(onChange){
            onChange(index, value)
        };
        setGroupValue(value);
    };

    console.log("values in RadioButtonGroup ", values);

    return (
        <div className="RadioButtonGroup">
            {values &&
            values.map(val => (
                <FormField>
                    <RadioButton
                        radio
                        label={capitalize(val.label)}
                        value={val.value}
                        checked={groupValue === val.value}
                        onChange={handleChange}
                        index={index}
                    />
                </FormField>
            ))}
        </div>
    );
}

export default RadioButtonGroup;
