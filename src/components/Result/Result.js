import React from "react";
import Header from "../Header";
import "./Result.scss";

function Result({title, range, score, leftLabel, rightLabel}){

    let rangeString = "";
    for(let i = range[0]; i < range[1]; i++){
        rangeString = (i === score) ? rangeString.concat("X") : rangeString.concat(String.fromCharCode(0x2212));
    }


    return (
        <div className="ResultContainer">
            <p className="LeftLabel">{leftLabel}</p>
            <div className="ResultRange">
                <Header as="h2">{title}</Header>
                <p className="ResultRange">{rangeString}</p>
            </div>
            <p className="RightLabel">{rightLabel}</p>
        </div>
    )
}

export default Result;
