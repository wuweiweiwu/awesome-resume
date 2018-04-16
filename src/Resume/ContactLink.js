import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Link from '../ui/Link';

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 4px;
`;

const Icon = styled.i`
	display: inline-block;
	font-size: 1.6rem;
	line-height: 1.6rem;
	width: 1.6rem;
	height: 1.6rem;
	text-align: center;
	vertical-align: center;
	color: rgba(77, 100, 141, 1);
`;

const ContactLink = ({ display, link, faClass, name }) => (
	<Wrapper>
		<Icon className={faClass} />
		<Link to={link}>{display}</Link>
	</Wrapper>
);

ContactLink.propTypes = {
	display: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	faClass: PropTypes.string.isRequired
};

export default ContactLink;
