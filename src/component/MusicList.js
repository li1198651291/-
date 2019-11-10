import React, { Component } from 'react';
import '../style/List.css';
import { Link } from 'react-router-dom';

class MusicList extends Component {
  render() {
    let dataItem = this.props.dataItem;
    let path = {
      pathname: `/music/${dataItem.title}`,
      state: dataItem
    }
    return (
      <Link to={path} onClick={this.props.recordPos}>
        <li>
          <img src={dataItem.image} alt=""></img>
          <div>
            <p className='title'>{`名称：${dataItem.title}`}</p>
            <p className='genres'>
              {dataItem.tags ? dataItem.tags.map((item, index) => (
                <span key={index}>{item.name}</span>
              )) : ''}
            </p>
            <p className='casts'>
              {dataItem.author ? dataItem.author.map((item, index) => (
                <span key={index}>{item.name}</span>
              )) : ''}
            </p>
            <p className="average">{`评分：${dataItem.rating.average}`}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default MusicList