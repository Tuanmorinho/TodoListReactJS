import React, { Component } from 'react'

export default class ListProjectChild extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-info">
                    <h2>{this.props.listProject.name}</h2>
                    <div className="status-task">Tasks:&ensp;<span>{this.props.listProject.todolist.length}</span></div>
                </div>
            </div>
        )
    }
}
