import React from "react";
import MoralMachine from "../../views/MoralMachine/MoralMachine";
import Header from "../../components/Header";
import Tab from "../../components/Tab";
import TabPane from "../../components/TabPane";
import VideoView from "../../views/VideoView";
import "./Home.scss";

function Home() {
    const panes = [
        {menuItem: "Introduction", render: () => <TabPane><MoralMachine /></TabPane>},
        {menuItem: "Coming soon...", render: () => <TabPane><VideoView /></TabPane>}
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
