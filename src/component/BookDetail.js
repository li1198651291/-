import React, { Component } from 'react';
import '../style/detail.css';

export default class BookDetail extends Component {
  render() {
    let { match, history, location } = this.props;
    let data = location.state;
    return (
      <div className="detail">
        <header>
          <button onClick={() => history.goBack()}>{'<'}</button>
          <p>{match.params.title}</p>
        </header>
        <main>
          <div className="primary">
            <img src={data.images.small} alt="" />
            <div>
              <p>名称：{match.params.title}</p>
              <p>作者：{data.author ? data.author.map((item) => item) : ''}</p>
              <p>出版社：{data.publisher}</p>
              <p>日期：{data.pubdate}</p>
              <p>评分：{data.rating.average}</p>
              <p>价钱：{data.price}</p>
              <p>
                {data.tags ? data.tags.map((item, index) => (
                  <span className="tags" key={index}>{item.name}</span>
                )) : ''}
              </p>
            </div>
          </div>
          <div className="catalog">
            <p>目录</p>
            <p>{data.catalog}</p>
          </div>
          <div className="summary">
            <p>简介</p>
            <p>{data.summary}</p>
          </div>
        </main>
      </div>
    )
  }
}
