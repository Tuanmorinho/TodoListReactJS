import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuNav from './MenuNav'
import Section from './Section'

export default class Main extends Component {
    render() {
        return (
            <section className="glass">
                <Router>
                    <MenuNav />
                    <Section />
                </Router>
            </section>
        )
    }
}
