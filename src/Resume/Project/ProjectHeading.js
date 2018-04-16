import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 0.4rem;
`;

const Name = styled.div`
	font-size: 1rem;
	font-weight: bold;
	color: rgb(77, 100, 141);
`;

const Tools = styled.div`
	font-size: 0.75rem;
	color: rgba(77, 100, 141, 0.75);
`;

const ProjectHeading = ({ name, tools }) => (
	<Wrapper>
		<Name>{name}</Name>
		<Tools>{tools.join(', ')}</Tools>
	</Wrapper>
);

ProjectHeading.propTypes = {
	name: PropTypes.string.isRequired,
	tools: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProjectHeading;
