import React from "react";
import Result from "../../components/Result";
import {rangeObjects} from "./config";
import "./ResultsView.scss"

function ResultsView({resultsObject}) {
    return (
        <div className="ResultsView">
            {Object.keys(resultsObject).map(key => {
                const result = resultsObject[key];
                const rangeObject = rangeObjects[key];
                return (
                    <Result leftLabel={rangeObject.rangeLabels[0]} rightLabel={rangeObject.rangeLabels[1]} title={rangeObject.title} range={rangeObject.range} score={result}/>
                )
            })}
        </div>
    )
}

export default ResultsView;
