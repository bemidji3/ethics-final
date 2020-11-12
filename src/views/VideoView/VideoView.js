import React from "react";
import Segment from "../../components/Segment";
import LectureVideo from "../../components/LectureVideo";
import {videos} from "./config";
import "./VideoView.scss";

function VideoView() {
    return (
        <Segment className="VideoView">
            {videos && videos.map(video => {
                return (
                    <LectureVideo
                        title={video.title}
                        src={video.source}
                    />
                )
            })}
        </Segment>
    )
}

export default VideoView;
