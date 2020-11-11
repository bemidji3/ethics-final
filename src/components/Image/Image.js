import React from "react";
import { Image as SemanticImage } from "semantic-ui-react";
import Header from "../Header";
import classNames from "classnames";
import "semantic-ui-css/components/image.css";
import "./Image.scss";

function Image({ className, labelClassnames, label, children, ...restProps }) {
    const extraClassName = classNames("Image ", {
        [className]: !!className,
    });

    const labelClassNames = classNames("ImageWithHeader ImageLabel ", {
        [labelClassnames]: !!labelClassnames,
    });

    return (
        <div className="ImageWithHeader">
            <SemanticImage className={extraClassName} {...restProps}>
                {children}
            </SemanticImage>
            <Header className={labelClassNames} as="h5">{label}</Header>
        </div>
    );
}

export default Image;