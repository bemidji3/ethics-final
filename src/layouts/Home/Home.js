import React from "react";
import QuizOne from "../../views/QuizOne/QuizOne";
import Header from "../../components/Header";
import Tab from "../../components/Tab";
import TabPane from "../../components/TabPane";
import "./Home.scss";

function Home() {
    const panes = [
        {menuItem: "Egoism", render: () => <TabPane><QuizOne/></TabPane>}
    ];

    return (
        <div className="MainHomeContent">
            <Header as="h1">Welcome to our Quiz App (pre-alpha)</Header>
            <div className="ModuleContent">
                <Tab panes={panes} />
            </div>
        </div>
    );
}

export default Home;
