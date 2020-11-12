import imageOneOne from "../../images/case-1-1.jpg";
import imageOneTwo from "../../images/case-1-2.jpg";
import imageTwoOne from "../../images/case-2-1.jpg";
import imageTwoTwo from "../../images/case-2-2.jpg";
import imageThreeOne from "../../images/case-3-1.jpg";
import imageThreeTwo from "../../images/case-3-2.jpg";
import imageFourOne from "../../images/case-4-1.jpg";
import imageFourTwo from "../../images/case-4-2.jpg";
import imageFiveOne from "../../images/case-5-1.jpg";
import imageFiveTwo from "../../images/case-5-2.jpg";
import imageSixOne from "../../images/case-6-1.jpg";
import imageSixTwo from "../../images/case-6-2.jpg";
import imageSevenOne from "../../images/case-7-1.jpg";
import imageSevenTwo from "../../images/case-7-2.jpg";
import imageEightOne from "../../images/case-8-1.jpg";
import imageEightTwo from "../../images/case-8-2.jpg";
import imageNineOne from "../../images/case-9-1.jpg";
import imageNineTwo from "../../images/case-9-2.jpg";
import imageTenOne from "../../images/case-10-1.jpg";
import imageTenTwo from "../../images/case-10-2.jpg";

import {forOwn} from "lodash";

export const moralMachineQuestions = [
    {
        imageOne: {
            source: imageOneOne,
            label: "Crash into roadblock, kill male driver",
        },
        imageTwo: {
            source: imageOneTwo,
            label: "Move to hit bikers illegally in line, kill 2 bikers",
        },
        potentialAnswers: [
            {
                label: "Scenario 1",
                value: {
                    saveMoreLives: 1,
                    protectPassengers: -1,
                    upHoldTheLaw: -1,
                    avoidIntervention: 1,
                    genderPreference: -1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: 0,
                },
            },
            {
                label: "Scenario 2",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: 1,
                    upHoldTheLaw: 1,
                    avoidIntervention: -1,
                    genderPreference: 1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: 0,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageTwoOne,
            label: "Continue straight, kill old rich woman",
        },
        imageTwo: {
            source: imageTwoTwo,
            label: "Swerve left, hit poor mom and 2 kids in stroller",
        },
        potentialAnswers: [
            {
                label: "Scenario 3",
                value: {
                    saveMoreLives: 1,
                    protectPassengers: -1,
                    upHoldTheLaw: 0,
                    avoidIntervention: 1,
                    genderPreference: 1,
                    speciesPreference: 0,
                    socialValuePreference: -1,
                    agePreference: -1,
                }
            },
            {
                label: "Scenario 4",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: 1,
                    upHoldTheLaw: 0,
                    avoidIntervention: -1,
                    genderPreference: -1,
                    speciesPreference: 0,
                    socialValuePreference: 1,
                    agePreference: 1,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageThreeOne,
            label: "Continue straight, kill boy scouts, robber, male driver",
        },
        imageTwo: {
            source: imageThreeTwo,
            label: "Swerve left, kill girl scouts, Barack Obama",
        },
        potentialAnswers: [
            {
                label: "Scenario 5",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: -1,
                    upHoldTheLaw: 1,
                    avoidIntervention: 1,
                    genderPreference: -1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: -1,
                }
            },
            {
                label: "Scenario 6",
                value: {
                    saveMoreLives: 1,
                    protectPassengers: 1,
                    upHoldTheLaw: -1,
                    avoidIntervention: -1,
                    genderPreference: 1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: 1,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageFourOne,
            label: "Continue straight, kill male driver and dog",
        },
        imageTwo: {
            source: imageFourTwo,
            label: "Swerve left, slaughter 10 young girls",
        },
        potentialAnswers: [
            {
                label: "Scenario 7",
                value: {
                    saveMoreLives: 1,
                    protectPassengers: -1,
                    upHoldTheLaw: 1,
                    avoidIntervention: 1,
                    genderPreference: -1,
                    speciesPreference: -1,
                    socialValuePreference: 0,
                    agePreference: 1,
                }
            },
            {
                label: "Scenario 8",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: 1,
                    upHoldTheLaw: -1,
                    avoidIntervention: -1,
                    genderPreference: 1,
                    speciesPreference: 1,
                    socialValuePreference: 0,
                    agePreference: -1,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageFiveOne,
            label: "Swerve right, kill 3 old men, 2 robbers",
        },
        imageTwo: {
            source: imageFiveTwo,
            label: "Swerve left, kill 2 younger women and a soldier",
        },
        potentialAnswers: [
            {
                label: "Scenario 9",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: 0,
                    upHoldTheLaw: 1,
                    avoidIntervention: 0,
                    genderPreference: -1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: -1,
                }
            },
            {
                label: "Scenario 10",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: 0,
                    upHoldTheLaw: 1,
                    avoidIntervention: 0,
                    genderPreference: -1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: 1,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageSixOne,
            label: "Don't move, kill old male driver, 2 dogs, and 2 young male passengers",
        },
        imageTwo: {
            source: imageSixTwo,
            label: "Swerve left, kill 6 old rich women",
        },
        potentialAnswers: [
            {
                label: "Scenario 11",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: -1,
                    upHoldTheLaw: 0,
                    avoidIntervention: 1,
                    genderPreference: -1,
                    speciesPreference: 1,
                    socialValuePreference: 1,
                    agePreference: 1,
                }
            },
            {
                label: "Scenario 12",
                value: {
                    saveMoreLives: 1,
                    protectPassengers: 1,
                    upHoldTheLaw: 0,
                    avoidIntervention: -1,
                    genderPreference: 1,
                    speciesPreference: -1,
                    socialValuePreference: -1,
                    agePreference: -1,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageSevenTwo,
            label: "Hit roadblock, kill 20 kids in bus",
        },
        imageTwo: {
            source: imageSevenOne,
            label: "Swerve left, kill 1000 dogs",
        },
        potentialAnswers: [
            {
                label: "Scenario 13",
                value: {
                    saveMoreLives: 0,
                    protectPassengers: -1,
                    upHoldTheLaw: 0,
                    avoidIntervention: 1,
                    genderPreference: 0,
                    speciesPreference: -1,
                    socialValuePreference: 0,
                    agePreference: 0,
                }
            },
            {
                label: "Scenario 14",
                value: {
                    saveMoreLives: 0,
                    protectPassengers: 1,
                    upHoldTheLaw: 0,
                    avoidIntervention: -1,
                    genderPreference: 0,
                    speciesPreference: 1,
                    socialValuePreference: 0,
                    agePreference: 0,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageEightTwo,
            label: "Swerve from wrong lane and hit 5 rich young men, kill 5 rich male pass",
        },
        imageTwo: {
            source: imageEightOne,
            label: "Continue (illegally), kill 10 poor old women",
        },
        potentialAnswers: [
            {
                label: "Scenario 15",
                value: {
                    saveMoreLives: 0,
                    protectPassengers: -1,
                    upHoldTheLaw: 1,
                    avoidIntervention: -1,
                    genderPreference: -1,
                    speciesPreference: 0,
                    socialValuePreference: -1,
                    agePreference: 1,
                }
            },
            {
                label: "Scenario 16",
                value: {
                    saveMoreLives: 0,
                    protectPassengers: 1,
                    upHoldTheLaw: -1,
                    avoidIntervention: 1,
                    genderPreference: 1,
                    speciesPreference: 0,
                    socialValuePreference: 1,
                    agePreference: -1,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageNineTwo,
            label: "Swerve left, kill 2 dogs and 2 young girl passengers",
        },
        imageTwo: {
            source: imageNineOne,
            label: "Continue, kill 3 old men, 2 robbers",
        },
        potentialAnswers: [
            {
                label: "Scenario 17",
                value: {
                    saveMoreLives: 1,
                    protectPassengers: -1,
                    upHoldTheLaw: -1,
                    avoidIntervention: -1,
                    genderPreference: 1,
                    speciesPreference: 1,
                    socialValuePreference: 0,
                    agePreference: 1,
                }
            },
            {
                label: "Scenario 18",
                value: {
                    saveMoreLives: -1,
                    protectPassengers: 1,
                    upHoldTheLaw: 1,
                    avoidIntervention: 1,
                    genderPreference: -1,
                    speciesPreference: -1,
                    socialValuePreference: 0,
                    agePreference: -1,
                }
            }
        ]
    },
    {
        imageOne: {
            source: imageTenOne,
            label: "Swerve right, hit little boy",
        },
        imageTwo: {
            source: imageTenTwo,
            label: "Swerve left, hit little girl",
        },
        potentialAnswers: [
            {
                label: "Scenario 19",
                value: {
                    saveMoreLives: 0,
                    protectPassengers: 0,
                    upHoldTheLaw: 0,
                    avoidIntervention: 0,
                    genderPreference: -1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: 0,
                }
            },
            {
                label: "Scenario 20",
                value: {
                    saveMoreLives: 0,
                    protectPassengers: 0,
                    upHoldTheLaw: 0,
                    avoidIntervention: 0,
                    genderPreference: 1,
                    speciesPreference: 0,
                    socialValuePreference: 0,
                    agePreference: 0,
                }
            }
        ]
    }
];

export const initialValues = {
    formData: {
        question0: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
    }
};

export const calculateFinalScore = (data) => {
    let results = {
        saveMoreLives: 0,
        protectPassengers: 0,
        upHoldTheLaw: 0,
        avoidIntervention: 0,
        genderPreference: 0,
        speciesPreference: 0,
        socialValuePreference: 0,
        agePreference: 0,
    };

    forOwn(data, (value) => {
        forOwn(value, (value, key) => {
            results[key] += value;
        })
    });

    return results;
};