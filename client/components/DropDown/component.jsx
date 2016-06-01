import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import './style.css';

export default class DropDownImplementation extends React.Component {

    render() {
        return (
            <DropdownButton bsStyle="default" title="Friend me please!" id="0000">
                <MenuItem>G+</MenuItem>
                <MenuItem>Facebook</MenuItem>
                <MenuItem>MySpace</MenuItem>
                <MenuItem>Friendster</MenuItem>
            </DropdownButton>
        );
    }
}