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
import Search from './assets/content/search.png';
import Tick from './assets/content/tick.png';
import Point from './assets/content/point.png';

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
          <div>
            <button className="plus"><img src={Plus} /></button>
            <button className="search"><img src={Search} /></button>
            <button className="bell"><img src={Bell} /></button>
          </div>
          <div className="note">
            <p className="backgroundtext">TODAY</p>
            <p className="note-text">TODAY</p>
            <p className="note-number">6 Tasks</p>
            <table  className="note-list">
              <tr>
                <td className="note-list-icon"><button className="nonebutton"><img src={Tick} /></button></td>
                <td className="note-list-border">
                  <button className="note-list-border-red">Hight</button>
                </td>
                <td className="note-list-text">Cook Eggs Don T Boil</td>
                <td className="note-list-clock">
                  {/*这个地方 试了很多方法，都没做到图片和文字居中对齐，僵住了*/}
                  <button className="nonebutton">
                  {/*这里时钟和字体颜色，逻辑不太明确，是少于1小时为红色？*/}
                    <img src={Clock} />
                    <button className="nonebutton">Due in 30 min</button>
                  </button>
                </td>
                <td className="note-list-icon">
                  <button className="nonebutton">
                  <img src={Point} />
                  </button>
                </td>
              </tr>
            </table>
            <table  className="note-list">
              <tr>
                <td className="note-list-icon"><button className="nonebutton"><img src={Tick} /></button></td>
                <td className="note-list-text">Thrill Friends And Family With A Make It Yourself Pizza Party</td>
                <td className="note-list-clock">
                  <button className="nonebutton">
                    <img src={Clock} />
                    <button className="nonebutton">Due in 2 hours</button>
                  </button>
                </td>
                <td className="note-list-icon">
                  <button className="nonebutton">
                  <img src={Point} />
                  </button>
                </td>
              </tr>
            </table>     
            <table  className="note-list">
              <tr>
                <td className="note-list-icon"><button className="nonebutton"><img src={Tick} /></button></td>
                <td className="note-list-border">
                  <button className="note-list-border-grey">Medium</button>
                </td>
                <td className="note-list-border">
                  <button className="note-list-border-blue">Cook</button>
                </td>                
                <td className="note-list-text">Smarter Food Choices 101 Tips For Busy Women</td>
                <td className="note-list-clock">
                  <button className="nonebutton">
                    <img src={Clock} />
                    <button className="nonebutton">Due in 9 hours</button>
                  </button>
                </td>
                <td className="note-list-icon">
                  <button className="nonebutton">
                  <img src={Point} />
                  </button>
                </td>
              </tr>
            </table>        
          </div>
				</div>
			</div>
		);
	}
}




ReactDOM.render(
	<App />,
	document.getElementById('root')
);
