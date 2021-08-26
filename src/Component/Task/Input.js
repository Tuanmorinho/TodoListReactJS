import React, { Component } from 'react'
import ComboBox from 'react-responsive-combo-box'
import "react-responsive-combo-box/dist/index.css"

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            dataComboBox: [
                'ReactJS',
                'React Native',
                'Redux',
                'VueJS'
            ]
        }
    }
    render() {
        return (
            <div className="status">
                <ComboBox
                    className='dropdown'
                    options={this.state.dataComboBox}
                    placeholder="Choose project"
                    defaultIndex={4}
                    optionsListMaxHeight={200}
                    style={{
                        maxHeight: "35px",
                        maxWidth: "25%"
                    }}
                    inputStyles={{
                        width: "80%"
                    }}
                    renderOptions={(options) => (
                        <div style={{
                            fontFamily: 'Arial, Helvetica, sans-serif',
                            fontWeight: '600',
                            fontSize: '13px',
                            color: '#767576',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem'
                        }}>{options}</div>
                    )}
                    enableAutocomplete
                />

                <input type="text" placeholder="New task" />
                <button className="add" type="button">Add task</button>
            </div>
        )
    }
}
