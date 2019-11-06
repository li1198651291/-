import React, { Component } from 'react';
import '../style/Search.css';
import searchIcon from '../image/搜索.png';
import get from './fetchJsonp'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }
  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }
  submit() {
    let kind = this.props.kind;
    if (kind === '/book') {
      get(`https://api.douban.com/v2/book/search?q=%25${this.state.value}%25&count=20&apikey=0b2bdeda43b5688921839c8ecb20399b`)
        .then(data => this.props.submit(data.books))
    }
    if (kind === '/music') {
      get(`https://api.douban.com/v2/music/search?q=%25${this.state.value}%25&count=20&apikey=0b2bdeda43b5688921839c8ecb20399b`)
        .then(data => this.props.submit(data.musics))
    }
    if (kind === '/movie') {
      get(`https://api.douban.com/v2/movie/search?q=%25${this.state.value}%25&count=20&apikey=0b2bdeda43b5688921839c8ecb20399b`)
        .then(data => this.props.submit(data.subjects))
    }
  }
  getPlaceholder() {
    let kind = this.props.kind;
    if (kind === '/movie') {
      return '电影、影人、影院、电视剧'
    } else if (kind === '/book') {
      return '书名、作者、ISBN';
    } else if (kind === '/music') {
      return '唱片名、表演者、条码、ISBN';
    }
  }
  render() {
    return (
      <div className="inputBox">
        <img src={searchIcon} alt="" className="icon" />
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          placeholder={this.getPlaceholder()}
        />
        <button onClick={() => this.submit()}>搜索</button>
      </div>
    )
  }
}