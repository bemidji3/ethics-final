import React from "react";
import QuizOne from "../../views/QuizOne/QuizOne";
import "./Home.scss";

function Home() {
    return (
        <div className="MainHomeContent">
            <div className="ModuleContent">
                <QuizOne/>
            </div>
        </div>
    );
}

export default Home;
