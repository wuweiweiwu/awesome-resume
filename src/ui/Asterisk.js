import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
	position: relative;
	top: -0.25rem;
	font-size: 20%;
`;

const Asterisk = () => <Wrapper>*</Wrapper>;

export default Asterisk;
