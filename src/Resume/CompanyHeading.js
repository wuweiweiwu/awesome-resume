import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.75rem;
`;

const Heading = styled.div`
	font-size: 1.25rem;
	font-weight: bold;
	color: rgba(77, 100, 141, 1);
	padding: 0.25rem;
`;

const JobTitle = styled.div`
	display: inline-block;
	font-size: 1rem;
	color: rgba(78, 78, 78, 1);
	padding: 0.25rem;
	font-weight: 300;
`;

const Location = styled.div`
	font-size: 0.9rem;
	color: rgba(77, 100, 141, 0.75);
	padding: 0.25rem;
`;

const CompanyHeading = ({ style, company, title, date, location }) => (
	<Wrapper>
		<Heading>
			{company}
			<JobTitle>{title}</JobTitle>
		</Heading>
		<Location>{date + ' | ' + location}</Location>
	</Wrapper>
);

CompanyHeading.propTypes = {
	style: PropTypes.object.isRequired,
	company: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default CompanyHeading;
