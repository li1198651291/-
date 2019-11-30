import React, { Component } from 'react';
import '../style/Search.css';
import searchIcon from '../image/搜索.png';
import ThemeContext from './ThemeContext';


export default class Search extends Component {
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
  static contextType = ThemeContext

  render() {
    let kind = this.props.kind
    return (
      <div className="inputBox">
        <img src={searchIcon} alt="" className="icon" />
        <input
          type="text"
          value={this.context.searchValue}
          onChange={(e) => {
            this.context.getValue(e.target.value)
            this.context.getCount(20)
          }}
          placeholder={this.getPlaceholder()}
        />
        <button onClick={() => {
          this.context.getData(kind)
          this.context.recordPos(0)
        }
      }>搜索</button>
      </div>
    )
  }
}