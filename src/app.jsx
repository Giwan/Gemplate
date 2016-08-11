/*
 * Gemplate
 * November 2015
 * Author: Giwan Persaud
 */

import style from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery'
import Main from './component/Main/Main.jsx'


if (!global.Intl) {
    require.ensure([
        'core-js',
        'intl',
        'intl/locale-data/jsonp/en.js'
    ], function (require) {
        require('core-js');
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        ReactDOM.render(<Main />, document.getElementById('app-container'));
    });
} else {
    ReactDOM.render(<Main />, document.getElementById('app-container'));
}
