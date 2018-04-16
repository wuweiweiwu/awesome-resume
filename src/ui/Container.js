import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// page heigth and width
const width = 1000;
const height = 11 / 8.5 * width;

const Wrapper = styled.div`
	width: ${width}px;
	height: ${height}px;
	margin: 0 auto;
	font-family: 'Open Sans', sans-serif;
	display: flex;
	justify-content: flex-start;
	flex-flow: column;
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

Container.propTypes = {
	children: PropTypes.node.isRequired
};

export default Container;
