import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
	margin-top: -0.8rem;
	margin-bottom: -0.4rem;
	padding: 0.025rem 1.2rem;
`;

const Section = ({ color, children }) => <Wrapper>{children}</Wrapper>;

Section.propTypes = {
	color: PropTypes.string.isRequired,
	children: PropTypes.node
};

export default Section;
