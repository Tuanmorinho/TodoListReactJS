import React, { Component } from 'react'
import Input from './Input'
import ListTask from './ListTask'

export default class Tasks extends Component {
    render() {
        return (
            <div className="listProject">
                <h1>Tasks</h1>
                <Input />
                <ListTask />
            </div>
        )
    }
}
