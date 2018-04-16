import React from 'react';
import Link from '../ui/Link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
	padding: 16px 0 1px 0;
	font-size: 1.6rem;
	height: 6rem;
`;

const Heading = styled.h1`
	color: rgb(21, 44, 85);
	display: block;
	font-size: 3.4rem;
	margin: 0px;
`;

const Program = styled.span`
	font-size: 1.2rem;
	display: block;
	margin-left: 5px;
	margin-top: -6px;
	color: rgb(77, 100, 141);
`;

const Span = styled.span`
	display: inline-block;
`;

const Header = ({ firstName, lastName, program, website }) => {
	const { nickname, term } = program;

	return (
		<Wrapper>
			<Heading>
				<Span>{firstName.toUpperCase()}</Span>
				<Span>&nbsp;</Span>
				<Span>{lastName.toUpperCase()}</Span>
			</Heading>
			<Program>
				{term} {nickname} |{' '}
				<Link to={website.link} style={{ padding: 0 }}>
					{website.name}
				</Link>
			</Program>
		</Wrapper>
	);
};

Header.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	program: PropTypes.object.isRequired
};

export default Header;
