import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const Language = ({ name }) => (
	<Wrapper>
		<div />
		<div>
			{name}
			{/* {proficiency} */}
		</div>
	</Wrapper>
);

Language.propTypes = {
	name: PropTypes.string.isRequired
	// proficiency: PropTypes.string.isRequired
};

export default Language;
