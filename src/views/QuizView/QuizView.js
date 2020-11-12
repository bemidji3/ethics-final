import React from "react";
import Segment from "../../components/Segment";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { quizLinks } from "./config";
import "./QuizView.scss";

function QuizView() {
    return (
        <Segment className="QuizView">
            <Header as="h1" >Quiz Module</Header>
            <Header as="h2">Please clink the link to evaluate your knowledge of the material</Header>
            {quizLinks.map(link => {
                return (
                    <Card
                        header={link.title}
                    >
                        <a target="_blank" href={link.url}>{link.title}</a>
                    </Card>
                )

            })}
        </Segment>
    )
}

export default QuizView;
