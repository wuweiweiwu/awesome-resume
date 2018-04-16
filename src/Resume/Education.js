import React from 'react';
import SidebarHeading from './SidebarHeading';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
	margin: 0.4rem 0 0 0;
`;

const University = styled.div`
	text-align: left;
	font-weight: bold;
`;

const Duration = styled.div`
	text-align: left;
`;

const Education = ({ university, duration, degree }) => (
	<Wrapper>
		<SidebarHeading align="left">+ EDUCATION</SidebarHeading>
		<University>{university}</University>
		<div>{degree}</div>
		<Duration>{duration}</Duration>
	</Wrapper>
);

Education.propTypes = {
	university: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired
};

export default Education;
