import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movie from '../image/电影.png';
import book from '../image/我的图书.png';
import music from '../image/音乐.png';
import movie1 from '../image/电影蓝.png';
import book1 from '../image/我的图书 (1).png';
import music1 from '../image/音乐 (1).png';
import PropTypes from 'prop-types';


export default class Footer extends Component {
  static contextTypes = {
    submit: PropTypes.func,
    recordPos: PropTypes.func,
    getValue: PropTypes.func,
  }
  render() {
    let kind = this.props.kind;
    return (
      <footer className="footer">
        <Link
          to="/movie"
          style={{ color: kind === '/movie' ? '#1296db' : 'black' }}
          onClick={() => {
            this.context.submit([])
            this.context.recordPos(0)
            this.context.getValue('')
          }}
        >
          <img src={kind === '/movie' ? movie1 : movie} alt="" />
          电影
        </Link>
        <Link
          to="/book"
          style={{ color: kind === '/book' ? '#1296db' : 'black' }}
          onClick={() => {
            this.context.submit([])
            this.context.recordPos(0)
            this.context.getValue('')
          }}
        >
          <img src={kind === '/book' ? book1 : book} alt="" />
          图书
        </Link>
        <Link
          to="/music"
          style={{ color: kind === '/music' ? '#1296db' : 'black' }}
          onClick={() => {
            this.context.submit([])
            this.context.recordPos(0)
            this.context.getValue('')
          }}
        >
          <img src={kind === '/music' ? music1 : music} alt="" />
          音乐
        </Link>
      </footer>
    )
  }
}
