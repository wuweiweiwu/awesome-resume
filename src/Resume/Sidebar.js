import React from 'react';
import Languages from './Languages';
import SidebarList from './SidebarList';
import ContactLinks from './ContactLinks';
import Education from './Education';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
	flex: 1 0 auto;
	width: 30%;
	background-color: rgba(118, 136, 169, 0.125);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 1.2rem 1.2rem 1.2rem;
	color: rgb(21, 44, 85);
`;

const Sidebar = ({ data }) => (
	<Wrapper>
		<div>
			<ContactLinks data={data.links} />
			<Education
				university={data.education.university}
				degree={data.education.degree}
				duration={data.education.duration}
			/>
			<Languages data={data.languages} />
			<SidebarList title="+ FRAMEWORKS" items={data.libraries} />
			<SidebarList title="+ DATABASES" items={data.databases} />
			<SidebarList title="+ TOOLS" items={data.tools} />
			<SidebarList
				title="+ INTERESTS"
				items={data.interests}
				separator={'<br/>'}
			/>
		</div>
	</Wrapper>
);

Sidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default Sidebar;
