import ReactDOM from 'react-dom';
import React from 'react';

import ComponentRegistry from 'app/ComponentRegistry';

import 'index.html';


const componentRegistry = new ComponentRegistry();

componentRegistry.load('component3-package1', 'Carousel', (Component) => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    )
});
