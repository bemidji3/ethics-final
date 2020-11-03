import React from "react";
import { Tab as SemanticTab } from "semantic-ui-react";
import classNames from "classnames";

function TabPane({children, extraClassNames, ...restProps}){
    const extraClassName = classNames("Header ", {
        [extraClassNames]: !!extraClassNames,
    });
    return (
        <SemanticTab.Pane className={extraClassName} {...restProps}>
            {children}
        </SemanticTab.Pane>
    )
}

export default TabPane;