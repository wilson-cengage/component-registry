import React from 'react';

import './style.css';

export default class Email extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "implementation": null
        }
    }

    componentDidMount() {
        System.import('./component').then(implementation => {
            this.setState({
                "implementation": implementation.default
            });
        });
    }

    render() {
        let implementationContent = null;
        if (this.state.implementation != null) {
            implementationContent = <this.state.implementation/>;
        }
        return ( <div>
            {implementationContent}
        </div>);
    }
}