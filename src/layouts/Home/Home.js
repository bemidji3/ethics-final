import React from "react";
import MoralMachine from "../../views/MoralMachine/MoralMachine";
import Header from "../../components/Header";
import Tab from "../../components/Tab";
import TabPane from "../../components/TabPane";
import VideoView from "../../views/VideoView";
import QuizView from "../../views/QuizView";
import "./Home.scss";

function Home() {
    const panes = [
        {menuItem: "Moral Machine", render: () => <TabPane><MoralMachine /></TabPane>},
        {menuItem: "Learn", render: () => <TabPane><VideoView /></TabPane>},
        {menuItem: "Quiz", render: () => <TabPane><QuizView/></TabPane>}
    ];

    return (
        <div className="MainHomeContent">
            <Header as="h1">Welcome to our Moral Machine Quiz</Header>
            <div className="ModuleContent">
                <Tab panes={panes} />
            </div>
        </div>
    );
}

export default Home;
