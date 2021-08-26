import React, { Component } from 'react'
import Input from './Input'
import ListProject from './ListProject'

export default class Project extends Component {
    render() {
        return (
            <div className="listProject">
                <h1>Projects</h1>
                <Input />
                <ListProject />
            </div>
        )
    }
}
