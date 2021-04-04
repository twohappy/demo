import React, { useState } from 'react';
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

function Notebook() {
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
          <Item />
        </div>
      </div>
    </div>
  );
}

function Item() {
  {/*
      1. 按照上次提交，数据是放到父组件 Notebook 里面的，然后通过 props 传给 item的
      2. 改用 hook，我又把这个数据放会到 Item 里面了
      3. 如果要抽到 Notebook，这个怎么写？我写了好几种都是报错。没太明白。
      4. 其实我有点懵逼，我这样写，就全部变成 function 了，在外部 const mapItem 这个数组，
          然后 Item 函数依然是可以 map 到 mapItem 的，那为啥要用 hook 这么写？
          这个地方是不是为了方便后续的处理？ 比如说，lable 是可以点击的，如果 hook 的方式，可以用 setMapItem 定义一个做后续处理。
          但是如果 const 到函数外部，则无法处理？
      5. 这里有一个warning的，就是缺少 key ，我特别去处理了，key={item.id}, 依然报错，这里也没想明白。
      6. 我这里用了 var ，我去搜了一下 var let const 的区别，暂时决定用 var 定义，不知道合不合适。
  */}
  var [mapItem] = useState(
    [
      {
        lable: [{
                  text: "Hight",
                  color: "red",
                }],
        text: "Cook Eggs Don T Boil",
        clockactive: true,
        clocktext: "Due in 30 min",
      },
      {
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
      }
    ]);

  return (
    <div>
    {mapItem.map((item) => (
      <div className="note-list" key={item.id}>
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


ReactDOM.render(
  <Notebook />,
  document.getElementById('root')
);