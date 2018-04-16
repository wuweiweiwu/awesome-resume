import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Language from './Language';
import SidebarHeading from '../SidebarHeading';

const Wrapper = styled.section`
	margin: 0.2rem 0 0.6rem 0;
`;

const Languages = ({ data: languages }) => (
	<Wrapper>
		<SidebarHeading>+ LANGUAGES</SidebarHeading>
		<div>
			{languages.map((language, index) => (
				<Language
					name={language.name}
					proficiency={language.proficiency}
					key={index}
				/>
			))}
		</div>
	</Wrapper>
);

Languages.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Languages;
