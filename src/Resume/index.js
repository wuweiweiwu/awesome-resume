import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
	render() {
		return (
			<Container>
				<Header {...DATA.main} />
				<div style={{ display: 'flex' }}>
					<Main {...DATA.main} />
					<Sidebar data={DATA.sidebar} />
				</div>
				{/* <Footer links={DATA.footerLinks} /> */}
			</Container>
		);
	}
}

const DATA = {
	sidebar: {
		education: {
			university: 'University of Minnesota',
			duration: 'Aug 2014 - Dec 2017',
			degree: 'B.S. Computer Science, Cum Laude'
		},
		languages: [
			{
				name: 'JavaScript'
				// proficiency: 0.8
			},
			{
				name: 'Python'
				// proficiency: 0.7
			},
			{
				name: 'HTML/CSS'
				// proficiency: 0.4
			},
			{
				name: 'Rust'
				// proficiency: 0.6
			},
			{
				name: 'Bash'
				// proficiency: 0.5
			}
		],
		databases: ['MongoDB', 'DynamoDB', 'MySQL'],
		libraries: [
			'React',
			'AngularJS',
			'Flow',
			'Redux',
			'MobX',
			'Cerebral',
			'Express',
			'Koa',
			'jQuery',
			'Sass/Less'
		],
		tools: [
			'AWS (S3, Lambda, EC2)',
			'Git',
			'Bower',
			'npm',
			'Webpack',
			'Babel',
			'Gulp',
			'Grunt',
			'Docker'
		],
		interests: [
			'I <b>contribute</b> to open source projects',
			'I <b>dominate</b> in bouldering, running, and Overwatch',
			'I <b>love</b> yogurt, gravy, traveling, and learning',
			'I <b>hate</b> when my earphones gets caught on the doorknob'
		],
		links: [
			{
				name: 'Email',
				faClass: 'fa fa-envelope',
				display: 'hello@weiweiwu.me',
				link: 'mailto:hello@weiweiwu.me'
			},

			{
				name: 'Twitter',
				faClass: 'fa fa-twitter',
				display: 'twitter.com/wuweiweiwu',
				link: 'https://twitter.com/wuweiweiwu'
			}
		]
	},
	footerLinks: [
		{
			name: 'Website',
			faClass: 'fa fa-fire',
			display: 'https://weiweiwu.me',
			link: 'https://weiweiwu.me'
		},
		// {
		//   name: 'Blog',
		//   faClass: 'fa fa-book',
		//   display: 'blog.clementhoang.net',
		//   link: 'http://blog.clementhoang.net',
		// },
		{
			name: 'GitHub',
			faClass: 'fa fa-github',
			display: 'github.com/wuweiweiwu',
			link: 'https://github.com/wuweiweiwu'
		},
		{
			name: 'Linkedin',
			faClass: 'fa fa-linkedin',
			display: 'linkedin.com/in/hungweiwu',
			link: 'https://www.linkedin.com/in/hungweiwu'
		}
	],
	main: {
		firstName: 'Hung-Wei',
		lastName: 'Wu',
		program: {
			term: '',
			nickname: 'Software Engineer',
			name: 'Software Engineer'
		},
		website: {
			name: 'https://weiweiwu.me',
			link: 'https://weiweiwu.me'
		},
		companies: [
			{
				name: 'Lilitofu',
				title: 'Frontend Web Developer Intern',
				color: 'rgb(77, 100, 141)',
				date: 'Winter 2017',
				location: 'San Francisco, CA',
				achievements: [
					'Tasked with revamping the user story page to decrease UI friction',
					'Realized concepts designed in <a href="https://zeplin.io/">zeplin.io</a> using <b>React</b>, <b>Redux</b>, and <b>Sass</b>',
					'Ported state managment in legacy components to <b>Redux</b>'
				]
			},
			{
				name: 'Amazon',
				title: 'Software Engineer Intern',
				color: 'rgb(77, 100, 141)',
				date: 'Summer 2017',
				location: 'Irvine, CA',
				achievements: [
					'Decreased operational burden on the Amazon Digital Goods Discovery team by creating a web app that client teams could use for service on-boarding',
					'Full stack development using <b>React</b>, <b>Express</b>, <b>Typescript</b>, <b>webpack</b>, <b>AWS SDK</b>, <b>S3</b>, <b>DynamoDB</b>, and <b>gulp</b>',
					'All code was reviewed, perfected, and pushed to production'
				]
			},
			{
				name: 'UnitedHealth Group',
				title: 'Software Engineer Intern',
				color: 'rgb(77, 100, 141)',
				date: 'Summer 2016',
				location: 'Minneapolis, MN',
				achievements: [
					'Wrote datalate ingestion tests in <b>Bash</b> that verified patient data in <b>HBase</b> and <b>Hive</b> tables',
					'Currently have 21 test cases incorporated into testing protocol',
					'Cut testing time by <b>80%</b> by automating tests that were previously done manually.'
				]
			},
			{
				name: 'Distributed Systems Lab',
				color: 'rgb(77, 100, 141)',
				title: 'Student Researcher',
				date: 'Fall 2015',
				location: 'Minneapolis, MN',
				achievements: [
					'Worked on <b>Beehive</b> – A Parallel Programming System for Graph Problems',
					'Experimented with <b>Java Externalization</b>, <b>Java Serialization</b>, <b>Gson</b>, <b>Jackson</b>, <b>Boon</b> as ways to effectively serialize graph data',
					'Implementations with <b>gRPC</b>, <b>Apache Thrift</b>, and <b>Apache Avro</b> to decrease network communication cost bottlenecks',
					'NSF Award 1319333'
				]
			}
		],
		projects: [
			{
				name: (
					<a href="https://github.com/wuweiweiwu/qwop-thesis/blob/master/thesis.pdf">
						Deep QWOP Learning (Honor Thesis)
					</a>
				),
				tools: [],
				achievements: [
					'Explored using <b>Deep Q Learning</b> to play the popular and frustrating flash game <b>QWOP</b>',
					'Used <b>OpenCV</b>, and <b>Keras</b> to implement an agent that was incentivized to travel as far as possible',
					'Agent <b>"successfully"</b> to use the scooting strategy to travel 100m',
					'Under the supervision of <b><a href="https://en.wikipedia.org/wiki/Maria_L._Gini">Maria Gini</a></b> and <b>James Parker</b>'
				]
			},
			{
				name: 'Open Source Projects that I Maintain',
				tools: [],
				achievements: [
					'<b><a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a></b> - React components for efficiently rendering large lists and tabular data - <b>10k stars</b>',
					'<b><a href="https://github.com/fritz-c/react-sortable-tree">react-sortable-tree</a></b> - Drag-and-drop sortable component for nested data and hierarchies - <b>1.7k stars</b>',
					'<b><a href="https://github.com/fritz-c/react-image-lightbox">react-image-lightbox</a></b> - React lightbox component - <b>377 stars</b>'
				]
			},
			{
				name: 'Some Open Source Contributions',
				tools: [],
				achievements: [
					'<b><a href="https://github.com/storybooks/storybook">storybook</a></b> - <b>background</b> and <b>a11y</b> addons',
					'<b><a href="https://github.com/CompuIves/codesandbox-client">codesandbox.io</a></b> - implemented static file upload and management',
					'<b><a href="https://github.com/nodejs/node">Node.js</a></b> - implemented <b>ECDH.convertKey</b> to convert between different key formats. Released in <b>v9.9.0</b>'
				]
			}
		]
	}
};

export default Resume;
