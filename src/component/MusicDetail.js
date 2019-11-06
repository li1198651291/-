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
          <div className="primary">
            <img src={data.image} alt="" />
            <div>
              <p>名称：{match.params.title}</p>
              <p>作者：{data.author ? data.author.map(item => item.name) : ''}</p>
              <p>发布商：{data.attrs.publisher ? data.attrs.publisher.map(item => item) : ''}</p>
              <p>发布时间：{data.attrs.pubdate ? data.attrs.pubdate.map(item => item) : ''}</p>
              <p>评分：{data.rating.average}</p>
              <p>
                {data.tags ? data.tags.map((item, index) => (
                  <span className="tags" key={index}>{item.name}</span>
                )) : ''}
              </p>
            </div>
          </div>
          <div className="catalog">
            <p>专辑</p>
            <p>{data.attrs.tracks ? data.attrs.tracks.map(item => item) : ''}</p>
          </div>
          <div className="summary">
            <p>简介</p>
            <p>{data.summary ? data.summary : ''}</p>
          </div>
        </main>
      </div>
    )
  }
}