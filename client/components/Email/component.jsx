import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';

import './style.css';

export default class EmailImplementation extends React.Component {

    render() {
        return (
            <FormControl type="email" placeholder="Enter email" />
        );
    }
}