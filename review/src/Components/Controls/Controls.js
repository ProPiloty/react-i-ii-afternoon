import React, {Component} from 'react';

import './Controls.css'

class Controls extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
            <div className="Controls">
                <button onClick={this.props.prev}>Previous</button>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </div>
                <button onClick={this.props.next}>Next</button>
            </div>
        )
    }
}

export default Controls;