import React, { Component } from 'react'
import { project, task, todolist } from "./Img"
import { Link } from 'react-router-dom'

export default class MenuNav extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="links">
                    <Link to="/" className="link">
                        <img src={project} alt="" />
                        <h2>Project</h2>
                    </Link>
                    <Link to="/task" className="link">
                        <img src={task} alt="" />
                        <h2>Task</h2>
                    </Link>
                </div>
                <div className="pro">
                    <h2>TodoList App</h2>
                    <img src={todolist} alt="" />
                </div>
            </div>
        )
    }
}
