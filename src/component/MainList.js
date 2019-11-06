import React, { Component } from 'react'
import Search from './Search';
import MovieList from './MovieList';
import BookList from './BookList';
import MusicList from './MusicList';
import Footer from './Footer';

export default class MainList extends Component {
  constructor() {
    super()
    this.state = {
      data: ''
    }
  }
  submit(data) {
    this.setState({
      data: data
    })
  }
  render() {
    let data = this.state.data;
    let kind = this.props.routerProps.match.path;
    let initData = this.props.initData;
    let renderData = data ? data : initData;
    console.log(this.state.data)
    return (
      <div>
        <Search kind={kind} submit={(data) => this.submit(data)}></Search>
        <ul>
          {
            renderData ? renderData.map((item, index) => {
              switch (kind) {
                case '/movie':
                  return <MovieList dataItem={item} key={index}></MovieList>
                case '/music':
                  return <MusicList dataItem={item} key={index}></MusicList>
                case '/book':
                  return <BookList dataItem={item} key={index}></BookList>
                default:
                  return ''
              }
            }) : 'loading'
          }
        </ul>
        <Footer kind={kind}></Footer>
      </div>
    )
  }
}

