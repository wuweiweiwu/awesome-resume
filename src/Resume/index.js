import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
// import Footer from './Footer';

class Resume extends Component {
	render() {
		const { data } = this.props;

		return (
			<Container>
				<Header {...data.main} />
				<div style={{ display: 'flex' }}>
					<Main {...data.main} />
					<Sidebar data={data.sidebar} />
				</div>
				{/* <Footer links={DATA.footerLinks} /> */}
			</Container>
		);
	}
}

export default Resume;
