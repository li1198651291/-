import React, { Component } from 'react';
import '../style/List.css';
import { Link } from 'react-router-dom';


class MovieList extends Component {
  render() {
    let dataItem = this.props.dataItem
    let path = {
      pathname: `/movie/${dataItem.title}`,
      state: dataItem
    }
    return (
      <Link to={path}>
        <li>
          <img src={dataItem.images.small} alt=""></img>
          <div>
            <p className='title'>{`${dataItem.title} - ${dataItem.year}`}</p>
            <p className='genres'>
              {dataItem.genres ? dataItem.genres.map((item, index) => (
                <span key={index}>{item}</span>
              )) : ''}
            </p>
            <p className='casts'>
              {dataItem.casts ? dataItem.casts.map((item, index) => (
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

export default MovieList