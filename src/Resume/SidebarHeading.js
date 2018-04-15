import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h1`
	padding: 0.25rem 0;
	border-bottom: 1px solid #152c55;
	margin-bottom: 0.6rem;
	text-align: left;
`;

const SidebarHeading = ({ children }) => <Header>{children}</Header>;

SidebarHeading.propTypes = {
	children: PropTypes.node
};

export default SidebarHeading;
