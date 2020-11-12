import React from "react";
import Header from "../Header";
import "./LectureVideo.scss";

function LectureVideo({src, title}) {
    return (
        <div className="LectureVideo">
            <iframe
                className="Video"
                src={src}
                allowFullScreen
            />
            <Header as="h3">{title}</Header>
        </div>
    )
}

export default LectureVideo;
