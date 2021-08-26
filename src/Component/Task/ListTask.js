import React, { Component } from 'react'
import ListTaskChild from './ListTaskChild'

export default class ListTask extends Component {
    constructor() {
        super();
        this.state = {
            listTask: [
                {
                    "nameProject": "ReactJS",
                    "nameTask": "React JSX",
                    "status1": "status-task1 status-task1--disable",
                    "status2": "status-task2 status-task2--disable",
                    "status3": "status-task3",
                },
                {
                    "nameProject": "ReactJS",
                    "nameTask": "React.Component",
                    "status1": "status-task1 status-task1--disable",
                    "status2": "status-task2",
                    "status3": "status-task3 status-task3--disable",
                },
                {
                    "nameProject": "ReactJS",
                    "nameTask": "Props",
                    "status1": "status-task1",
                    "status2": "status-task2 status-task2--disable",
                    "status3": "status-task3 status-task3--disable",
                },
                {
                    "nameProject": "ReactJS",
                    "nameTask": "State",
                    "status1": "status-task1",
                    "status2": "status-task2 status-task2--disable",
                    "status3": "status-task3 status-task3--disable",
                }
            ]
        }
    }
    render() {
        return (
            <div className="all">
                <div className="cards">
                    {
                        this.state.listTask.map((value, index) => {
                            return (
                                <ListTaskChild key={index} listTask={value} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
