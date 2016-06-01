import ReactDOM from 'react-dom';
import React from 'react';

import DropDown from 'components/DropDown';
import Carousel from 'components/Carousel';
import Email from 'components/Email';

import 'index.html';

ReactDOM.render(
    <DropDown/>,
    document.getElementById('root')
);

ReactDOM.render(
    <Carousel/>,
    document.getElementById('root2')
);

ReactDOM.render(
    <Email/>,
    document.getElementById('root3')
);
