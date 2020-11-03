import React from "react";
import { Tab as SemanticTab } from "semantic-ui-react";
import classNames from "classnames";

function Tab({children, extraClassNames, ...restProps}){
    const extraClassName = classNames("Header ", {
        [extraClassNames]: !!extraClassNames,
    });
    return (
        <SemanticTab className={extraClassName} {...restProps}>
            {children}
        </SemanticTab>
    )
}

export default Tab;
