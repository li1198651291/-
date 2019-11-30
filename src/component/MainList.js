import React, { Component } from 'react'
import Search from './Search';
import MovieList from './MovieList';
import BookList from './BookList';
import MusicList from './MusicList';
import Footer from './Footer';
import ThemeContext from './ThemeContext';

export default class MainList extends Component {
  constructor() {
    super()
    this.myRef = React.createRef()
  }
  recordPos() {
    this.context.recordPos(this.myRef.current.scrollTop)
  }
  static contextType = ThemeContext
  componentDidMount() {
    let kind = this.props.match.path;
    var ul = this.myRef.current
    ul.scrollTop = this.context.position;
    
    this.myRef.current.onscroll = () => {
      if(this.context.searchValue === '') {
        return
      }
      if (ul.scrollHeight - ul.scrollTop - ul.clientHeight === 0) {
        var count = this.context.count + 20
        this.context.recordPos(ul.scrollTop)
        this.context.getCount(count)
        this.context.getData(kind)
        this.myRef.current.scrollTop = this.context.position;
      }
    }
  }
  componentDidUpdate() {
    this.myRef.current.scrollTop = this.context.position;
  }
  render() {
    let kind = this.props.match.path;
    var renderDate;
    let movie = this.context.movie;
    let book = this.context.book;
    let music = this.context.music;
    if (this.context.searchData.length !== 0) {
      renderDate = this.context.searchData
    } else {
      switch (kind) {
        case '/movie':
          renderDate = movie;
          break;
        case '/music':
          renderDate = music;
          break;
        case '/book':
          renderDate = book;
          break;
        default:
      }
    }
    return (
      <div>
        <Search kind={kind}></Search>
        <ul ref={this.myRef}>
          {
            renderDate ? renderDate.map((item, index) => {
              switch (kind) {
                case '/movie':
                  return <MovieList dataItem={item} key={index} recordPos={() => this.recordPos()}></MovieList>
                case '/music':
                  return <MusicList dataItem={item} key={index} recordPos={() => this.recordPos()}></MusicList>
                case '/book':
                  return <BookList dataItem={item} key={index} recordPos={() => this.recordPos()}></BookList>
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

