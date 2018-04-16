import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h1`
	margin-bottom: 0.6rem;
	color: rgba(21, 44, 85, 1);
	padding: 0.25rem;
	border-bottom: 1px solid rgba(21, 44, 85, 1);
	font-weight: 300;
`;

const MainHeading = ({ title }) => <Header>{title.toUpperCase()}</Header>;

MainHeading.propTypes = {
	title: PropTypes.string.isRequired
};

export default MainHeading;
