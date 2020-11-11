import React from "react";
import { Tab as SemanticTab } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/tab.css";

function Tab({children, extraClassNames, ...restProps}){
    const extraClassName = classNames("Tab ", {
        [extraClassNames]: !!extraClassNames,
    });
    return (
        <SemanticTab className={extraClassName} {...restProps}>
            {children}
        </SemanticTab>
    )
}

export default Tab;
