export const quizQuestions = [
    {
        text: "What is jack's name?",
        potentialAnswers: [
            { label: "Sean", value: "sean"},
            { label: "Dennis", value: "dennis"},
            { label: "Joe", value: "joe"},
            { label: "Jack", value: "jack"},
        ]
    }
];

export const initialValues = {
    formData: {
        question0: "",
    }
};

const quizAnswers = {
    question0: "jack",
};

export const calculateScore = (userAnswers) => {
    let returnScore = 0;

    Object.keys(userAnswers).map(key => {
        const answer = userAnswers[key];
        if(quizAnswers[key] === answer){
            returnScore++;
        }
    });

    return returnScore;
}