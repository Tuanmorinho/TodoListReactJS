import React, { Component } from 'react'

export default class ListTaskChild extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-info">
                    <h2><span>{this.props.listTask.nameProject}</span>&ensp;-&ensp;<span>{this.props.listTask.nameTask}</span></h2>
                    <div className="status-task">Status:
                        <a className={this.props.listTask.status1}>TODO</a>
                        <a className={this.props.listTask.status2}>DOING</a>
                        <a className={this.props.listTask.status3}>DONE</a>
                    </div>
                </div>
                <div className="button">
                    <button className="edit-task">Edit</button>
                    <button className="destroy">Delete</button>
                </div>
            </div>
        )
    }
}
