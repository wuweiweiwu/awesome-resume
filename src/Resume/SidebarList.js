import React from 'react';
import SidebarHeading from './SidebarHeading';
import PropTypes from 'prop-types';

const SidebarList = ({ items, title, separator }) => (
	<section style={style.main}>
		<SidebarHeading> {title} </SidebarHeading>
		<div style={style.list}>
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

const style = {
	main: {
		margin: '0.4rem 0'
	},
	list: {
		breakWord: 'normal',
		textAlign: 'left'
		// textJustify: 'inter-word',
	}
};

SidebarList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SidebarList;
