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
  constructor(props) {
    super(props);
    this.state = {
      mapItem: [{
        id: 1,
        lable: [{
                  text: "Hight",
                  color: "red",
                }],
        text: "Cook Eggs Don T Boil",
        clockactive: true,
        clocktext: "Due in 30 min",
      },
      {
        id: 2,
        lable: [{
                  text: "Medium",
                  color: "grey"
                },
                {
                  text: "Cook",
                  color: "blue",
                }],
        text: "Smarter Food Choices 101 Tips For Busy Women",
        clockactive: false,
        clocktext: "Due in 9 hours",
      }]
    };
  }

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
            <Item mapItem={this.state.mapItem} />
          </div>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <div>
      {this.props.mapItem.map((item) => (
        <div className="note-list">
          <div className="note-list-icon">
            <img src={Tick} />
          </div>
            {item.lable.map((item) =>
              <div className="note-list-border">
                {/* 这个地方，要根据返回的 lable.color 更改 classname，后续再改 */}
                <button className={"note-list-border-red"}>
                  <div className="note-list-text">
                    {item.text}
                  </div>
                </button>
              </div>
            )}
            <div className="note-list-text">
              {item.text}
            </div>
          <div className="note-list-clock">
            {/* 这个地方 clock 需要判断逻辑 */}
            <img src={Clock} />
            <div className="note-list-clocktime">
              {item.clocktext}
            </div>
          </div>
          <div className="note-list-icon">
            <img src={Point} />
          </div>
        </div>
      ))}
      </div>
    );
  }
}


ReactDOM.render(
  <Notebook />,
  document.getElementById('root')
);