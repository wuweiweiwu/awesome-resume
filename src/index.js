import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import Resume from './Resume';
import { DATA } from './YOUR_DATA';
import registerServiceWorker from './registerServiceWorker';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

window.addEventListener('keydown', e => {
	console.log(e.which);
	// ENTERKEY
	if (e.which === 13) {
		domtoimage
			.toBlob(document.getElementById('root'))
			.then(blob => FileSaver.saveAs(blob, 'RESUME.png'));
	}
});

ReactDOM.render(<Resume data={DATA} />, document.getElementById('root'));
registerServiceWorker();
