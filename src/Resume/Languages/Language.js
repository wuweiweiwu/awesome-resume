import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ name }) => (
	<div style={style.main}>
		<div />
		<div>
			{name}
			{/* {proficiency} */}
		</div>
	</div>
);

const style = {
	main: {
		display: 'flex',
		justifyContent: 'flex-start'
	}
};

Language.propTypes = {
	name: PropTypes.string.isRequired
	// proficiency: PropTypes.string.isRequired
};

export default Language;
