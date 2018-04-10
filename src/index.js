import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import Resume from './Resume';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));
registerServiceWorker();
