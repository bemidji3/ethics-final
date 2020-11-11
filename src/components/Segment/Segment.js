import React from "react";
import { Segment as SemanticSegment } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/segment.css";

function Segment({ className, children, ...restProps }) {
    const extraClassName = classNames("Segment ", {
        [className]: !!className,
    });
    return (
        <SemanticSegment className={extraClassName} {...restProps}>
            {children}
        </SemanticSegment>
    );
}

export default Segment;
