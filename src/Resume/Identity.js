import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
	margin-bottom: 1.5rem;
`;

const Header = styled.h1`
	display: block;
	font-size: 1.8rem;
`;

const SubHeader = styled.h2`
	font-size: 1.4rem;
`;

const Span = styled.span`
	display: inline-block;
`;

const Identity = ({ firstName, lastName, program }) => {
	const { nickname, term } = program;
	return (
		<Wrapper>
			<Header>
				<Span>{firstName.toUpperCase()}</Span>
				<Span>&nbsp;</Span>
				<Span>{lastName.toUpperCase()}</Span>
			</Header>
			<SubHeader>
				{term} {nickname}
			</SubHeader>
		</Wrapper>
	);
};

Identity.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	program: PropTypes.object.isRequired
};

export default Identity;
