import React from 'react';
import Companies from './Companies';
import MainHeading from './MainHeading';
import Project from './Project';
import Section from '../ui/Section';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Wrapper = styled.section`
	padding-right: 1.25rem;
`;

const Main = ({ firstName, lastName, program, companies, projects }) => (
	<Wrapper>
		<MainHeading title="+ Work Experience" />
		<Companies data={companies} />
		<MainHeading title="+ Projects" />
		{projects.map((project, key) => (
			<Section color="rgb(77, 100, 141)" key={key}>
				<Project
					name={project.name}
					tools={project.tools}
					achievements={project.achievements}
					link={project.link}
					key={key}
				/>
			</Section>
		))}
	</Wrapper>
);

Main.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	companies: PropTypes.arrayOf(PropTypes.object).isRequired,
	projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Main;
