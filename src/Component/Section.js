import React, { Component } from 'react'
import Project from './Project/Project'
import Tasks from './Task/Tasks'
import { Route } from 'react-router-dom'

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/" exact component={Project} />
                <Route path="/task" component={Tasks} />
            </React.Fragment>
        )
    }
}
