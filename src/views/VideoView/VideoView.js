import React from "react";
import Segment from "../../components/Segment";

function VideoView() {
    return (
        <Segment className="VideoView">
            <iframe
                className="IntroductionVideo"
                src="https://www.youtube.com/embed/FzELkUpJYNY"
                allowFullScreen
            />
        </Segment>
    )
}

export default VideoView;
