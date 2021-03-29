import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './assets/sidebar/note.png';
import Folder from './assets/sidebar/folder.png';
import Upcoming from './assets/sidebar/upcoming.png';
import Avatar from './assets/sidebar/avatar.png';
import timeline from './assets/sidebar/timeline.png';
import Plus from './assets/content/plusicon.png';
import Clock from './assets/content/clock.png';
import Bell from './assets/content/bell.png';
import Search from './assets/content/search.png';
import Tick from './assets/content/tick.png';
import Point from './assets/content/point.png';

class Notebook extends React.Component {
	render() {
		return (
			<div className="column">
				<div className="column-sidebar">
					 <div className='sidebar-nav'>
							<div className="sidebar-nav-icon"><img src={Upcoming} /></div>
							<div className="sidebar-nav-icon"><img src={Folder} /></div>
							<div className="sidebar-nav-icon"><img src={timeline} /></div>
							<div className="sidebar-nav-icon"><img src={Note} /></div>
							<div className="sidebar-nav-avatar"><img src={Avatar} /></div>
						</div>
					</div>
				<div className="column-content">
					<div className="content-nav">
							<div className="content-nav-plus"><img src={Plus} /></div>
							<div className="content-nav-icon"><img src={Search} /></div>
							<div className="content-nav-icon"><img src={Bell} /></div>
					</div>
					<div className="note">
						<p className="backgroundtext">TODAY</p>
						<p className="note-text">TODAY</p>
						<p className="note-number">6 Tasks</p>
 						<div className="note-list">
							<div className="note-list-icon">
								<img src={Tick} />
							</div>
							<div className="note-list-border">
								<button className="note-list-border-red">Hight</button>
							</div>
							<div className="note-list-text">Cook Eggs Don T Boil</div>
							<div className="note-list-clock">
								<img src={Clock} />
								<div className="note-list-clocktime">Due in 30 min</div>
							</div>
							<div className="note-list-icon">
								<img src={Point} />
							</div>
						</div>
						<div className="note-list">
							<div className="note-list-icon">
								<img src={Tick} />
							</div>
							<div className="note-list-text">Thrill Friends And Family With A Make It Yourself Pizza Party</div>
							<div className="note-list-clock">
								<img src={Clock} />
								<div className="note-list-clocktime">Due in 2 hours</div>
							</div>
							<div className="note-list-icon">
								<img src={Point} />
							</div>
						</div>
 						<div className="note-list">
							<div className="note-list-icon">
								<img src={Tick} />
							</div>
							<div className="note-list-border">
								<button className="note-list-border-grey">Medium</button>
							</div>
							<div className="note-list-border">
								<button className="note-list-border-blue">Cook</button>
							</div>
							<div className="note-list-text">Smart Food Choices 101 Tips For Busy Women</div>
							<div className="note-list-clock">
								<img src={Clock} />
								<div className="note-list-clocktime">Due in 9 hours</div>
							</div>
							<div className="note-list-icon">
								<img src={Point} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


ReactDOM.render(
	<Notebook />,
	document.getElementById('root')
);