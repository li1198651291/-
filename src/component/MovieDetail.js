import React, { Component } from 'react';
import '../style/detail.css';

export default class MovieDetail extends Component {
  render() {
    let { match, history, location } = this.props;
    let data = location.state;
    return(
      <div className="detail">
        <header>
          <button onClick={() => history.goBack()}>{'<'}</button>
          <p>{match.params.title}</p>
        </header>
        <main>
          <img src={data.images.medium} alt=""/>
          <div className="intro">
            <p>简介</p>
            <p>
              <span>名称：{data.title}</span>
              {data.genres ? data.genres.map((item,index) => (
                <span className="genres" key={index}>{item}</span>
              )) : ''}
            </p>
            <p>上映时间：{data.year}</p>
            <p>导演：{data.directors ? data.directors.map((item) => item.name) : ''}</p>
            <p>{data.original_title}</p>
          </div>
          <div className="casts">
            <p>演员</p>
            <div className="image">
              {data.casts ? data.casts.map((item,index) => (
                <img className="castsImg" key={index} src={item.avatars.small} alt=""></img>
              )) : ''}
            </div>
          </div>
        </main>
      </div>
    )
  }
}
