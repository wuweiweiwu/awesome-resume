import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ name }) => (
	<div style={style.main}>
		<div />
		<div>{name}</div>
	</div>
);

const style = {
	main: {
		display: 'flex',
		justifyContent: 'flex-start'
	}
};

Language.propTypes = {
	name: PropTypes.string.isRequired,
	proficiency: PropTypes.number.isRequired
};

export default Language;
