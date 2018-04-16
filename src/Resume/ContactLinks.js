import React from 'react';
import ContactLink from './ContactLink';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarHeading from './SidebarHeading';

const Wrapper = styled.section`
	margin-bottom: 0.2rem;
`;

// const Heading = styled.h1`
// 	text-align: left;
// 	border-bottom: 1px solid rgb(21, 44, 85)
// 	padding:.25rem;
// 	margin-bottom: .6rem;
// `;

const ContactLinks = ({ data: links }) => (
	<Wrapper>
		<SidebarHeading>+ CONTACT</SidebarHeading>
		{links.map((link, key) => (
			<ContactLink
				display={link.display}
				faClass={link.faClass}
				key={key}
				link={link.link}
				name={link.name}
			/>
		))}
	</Wrapper>
);

ContactLinks.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ContactLinks;
