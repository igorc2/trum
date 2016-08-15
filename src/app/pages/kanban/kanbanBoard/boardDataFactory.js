/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('BlurAdmin.pages.kanban').service('BoardDataFactory', function () {

     this.sprint = {
            "name": "Sprint Board",
            "numberOfColumns": 7,
            "columns": [
                {"name": "TO DO"},
                {"name": "DEV DOING"},
                {"name": "DEV DONE"},
                {"name": "DEV IMPEDED"},
                {"name": "TO DO TEST"},
                {"name": "ERROR"},
                {"name": "DONE"}

            ],
            "backlogs": [
                {"title": "Come up with a POC for new Project",
                    "details": "backlog id 1",
                    "phases": [
                        {"name": "TO DO",
                            "id": 1,
                            "cards": [

                                {"title": "Get new resource for new Project",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "DEV DOING",
                            "id": 2,
                            "cards": [
                                {"title": "Explore new IDE for Development",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new resource for new Project",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "DEV DONE",
                            "id": 3,
                            "cards": [
                                {"title": "Explore new IDE for Development",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new resource for new Project",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "DEV IMPEDED",
                            "id": 4,
                            "cards": [
                                {"title": "Explore new IDE for Development",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new resource for new Project",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "TO DO TEST",
                            "id": 5,
                            "cards": [
                                {"title": "Explore new IDE for Development",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new resource for new Project",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "ERROR",
                            "id": 6,
                            "cards": [
                                {"title": "Develop ui for tracker module",
                                    "details": "Testing Card Details",
                                    "status": "In progress"},
                                {"title": "Develop backend for plan module",
                                    "details": "Testing Card Details",
                                    "status": "In progress"},
                                {"title": "Test user module",
                                    "details": "Testing Card Details",
                                    "status": "In progress"}
                            ]},
                        {"name": "DONE",
                            "cards": [
                                {"title": "End to End Testing for user group module",
                                    "details": "Testing Card Details",
                                    "status": "Done"},
                                {"title": "CI for user module",
                                    "details": "Testing Card Details",
                                    "status": "Done"}
                            ]}
                    ]
                },
                {
                    "title": "Design new framework for reporting module",
                    "details": "backlog id 2",
                    "phases": [
                        {"name": "Not started",
                            "cards": [
                                {"title": "Explore new Framework",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new Testing License",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "Not started",
                            "cards": [
                                {"title": "Explore new Framework",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new Testing License",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "Not started",
                            "cards": [
                                {"title": "Explore new Framework",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new Testing License",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "Not started",
                            "cards": [
                                {"title": "Explore new Framework",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new Testing License",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "Not started",
                            "cards": [
                                {"title": "Explore new Framework",
                                    "details": "Testing Card Details",
                                    "status": "Not started"},
                                {"title": "Get new Testing License",
                                    "details": "Testing Card Details",
                                    "status": "Not started"}
                            ]
                        },
                        {"name": "In progress",
                            "cards": [
                                {"title": "Develop ui using Angular",
                                    "details": "Testing Card Details",
                                    "status": "In progress"},
                                {"title": "Develop backend with NodeJS",
                                    "details": "Testing Card Details",
                                    "status": "In progress"}
                            ]},
                        {"name": "Done",
                            "cards": [
                                {"title": "Explore High charts",
                                    "details": "Testing Card Details",
                                    "status": "Done"}
                            ]}
                    ]
                }
            ]
        };

    return this;

});
