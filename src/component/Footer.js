import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movie from '../image/电影.png';
import book from '../image/我的图书.png';
import music from '../image/音乐.png';
import movie1 from '../image/电影蓝.png';
import book1 from '../image/我的图书 (1).png';
import music1 from '../image/音乐 (1).png';
import ThemeContext from './ThemeContext';

const TABS = [
  {
    name: '图书',
    link: '/book',
    icon: book,
    iconActive: book1
  },
  {
    name: '电影',
    link: '/movie',
    icon: movie,
    iconActive: movie1
  },
  {
    name: '音乐',
    link: '/music',
    icon: music,
    iconActive: music1
  },
]
export default class Footer extends Component {
  static contextType = ThemeContext
  render() {
    let kind = this.props.kind;
    return (
      <footer className="footer">
        {
          TABS.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              style={{ color: kind === item.link ? '#1296db' : 'black' }}
              onClick={() => {
                this.context.submit([])
                this.context.recordPos(0)
                this.context.getValue('')
                this.context.getCount(20)
              }}
            >
              <img src={kind === item.link ? item.iconActive : item.icon} alt="" />
              {item.name}
            </Link>
          ))
        }
      </footer>
    )
  }
}
