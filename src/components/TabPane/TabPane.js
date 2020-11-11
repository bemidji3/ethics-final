import React from "react";
import { Tab as SemanticTab } from "semantic-ui-react";
import "semantic-ui-css/components/tab.css";
import classNames from "classnames";

function TabPane({children, extraClassNames, ...restProps}){
    const extraClassName = classNames("TabPane ", {
        [extraClassNames]: !!extraClassNames,
    });
    return (
        <SemanticTab.Pane className={extraClassName} {...restProps}>
            {children}
        </SemanticTab.Pane>
    )
}

export default TabPane;