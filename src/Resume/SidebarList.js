import React from 'react';
import styled from 'styled-components';
import SidebarHeading from './SidebarHeading';
import PropTypes from 'prop-types';

const SidebarList = ({ items, title, separator }) => (
	<section>
		<SidebarHeading> {title} </SidebarHeading>
		<div>
			{items.map((item, key) => (
				<span
					key={key}
					dangerouslySetInnerHTML={{
						__html: item + createSeparator(key, items, separator)
					}}
				/>
			))}
		</div>
	</section>
);

function createSeparator(index, array, separator = ', ') {
	if (index < array.length - 1) {
		return separator;
	}

	return '';
}

SidebarList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SidebarList;
