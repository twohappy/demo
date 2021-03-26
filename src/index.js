import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './assets/sidebar/note.png';
import Folder from './assets/sidebar/folder.png';
import Upcoming from './assets/sidebar/upcoming.png';
import Avatar from './assets/sidebar/avatar.png';
import Timeline from './assets/sidebar/timeline.png';
import Plus from './assets/content/plusicon.png';
import Clock from './assets/content/clock.png';
import Bell from './assets/content/bell.png';

class App extends React.Component {
	render() {
		return (
			<div className="column">
				<div className="column-sidebar">
					 <ul className='nav-list'>
							<li><img src={Upcoming} /></li>
							<li><img src={Folder} /></li>
							<li><img src={Timeline} /></li>
							<li><img src={Note} /></li>
						</ul>
					<p className="nav-avatar"><img src={Avatar} /></p>
					</div>
				<div className="column-content">
					<p className="plus"><img src={Plus} /></p>

				</div>
			</div>
		);
	}
}



ReactDOM.render(
	<App />,
	document.getElementById('root')
);
