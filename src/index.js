import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import Resume from './Resume';
import { DATA } from './YOUR_DATA';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resume data={DATA} />, document.getElementById('root'));
registerServiceWorker();
