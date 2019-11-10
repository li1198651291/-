import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import get from './component/fetchJsonp';
import MovieDetail from './component/MovieDetail';
import BookDetail from './component/BookDetail';
import MusicDetail from './component/MusicDetail';
import MainList from './component/MainList';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movie: [],
      book: [],
      music: [],
      searchData: [],
      searchValue: '',
      count: 20,
      position: 0,
    }
  }
  componentDidMount() {
    get('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b')
      .then(data => this.setState({ movie: data.subjects }))
    get('https://api.douban.com/v2/music/search?q=b&count=20&apikey=0b2bdeda43b5688921839c8ecb20399b')
      .then(data => this.setState({ music: data.musics }))
    get('https://api.douban.com/v2/book/search?q=a&count=20&apikey=0b2bdeda43b5688921839c8ecb20399b')
      .then(data => this.setState({ book: data.books }))
  }
  getData(kind) {
    if (kind === '/book') {
      get(`https://api.douban.com/v2/book/search?q=%25${this.state.searchValue}%25&count=${this.state.count}&apikey=0b2bdeda43b5688921839c8ecb20399b`)
        .then(data => this.submit(data.books))
    }
    if (kind === '/music') {
      get(`https://api.douban.com/v2/music/search?q=%25${this.state.searchValue}%25&count=${this.state.count}&apikey=0b2bdeda43b5688921839c8ecb20399b`)
        .then(data => this.submit(data.musics))
    }
    if (kind === '/movie') {
      get(`https://api.douban.com/v2/movie/search?q=%25${this.state.searchValue}%25&count=${this.state.count}&apikey=0b2bdeda43b5688921839c8ecb20399b`)
        .then(data => this.submit(data.subjects))
    }
    // this.recordPos(0)
  }
  getValue(value) {
    this.setState({
      searchValue: value
    })
  }
  submit(data) {
    this.setState({
      searchData: data
    })
  }
  recordPos(data) {
    this.setState({
      position: data
    })
  }
  getCount(count) {
    this.setState({
      count: count
    })
  }
  static childContextTypes = {
    movie: PropTypes.array,
    book: PropTypes.array,
    music: PropTypes.array,
    searchData: PropTypes.array,
    searchValue: PropTypes.string,
    position: PropTypes.number,
    count: PropTypes.number,
    submit: PropTypes.func,
    recordPos: PropTypes.func,
    getValue: PropTypes.func,
    getCount: PropTypes.func,
    getData: PropTypes.func
  }
  getChildContext() {
    return {
      movie: this.state.movie,
      book: this.state.book,
      music: this.state.music,
      searchData: this.state.searchData,
      position: this.state.position,
      searchValue: this.state.searchValue,
      count: this.state.count,
      submit: (data) => this.submit(data),
      recordPos: (data) => this.recordPos(data),
      getData: (count) => this.getData(count),
      getValue: (value) => this.getValue(value),
      getCount: (count) => this.getCount(count)
    }
  }
  render() {
    console.log(this.state.searchData)
    return (
      <Router>
        <div className="app">
          <Route path='/' exact render={() => (
            <Link to='/movie' className='start'>点击开始</Link>
          )}></Route>
          <Route path='/movie' exact component={MainList}></Route>
          <Route path='/music' exact component={MainList}></Route>
          <Route path='/book' exact component={MainList}></Route>
          <Route path='/movie/:title' component={MovieDetail}></Route>
          <Route path='/book/:title' component={BookDetail}></Route>
          <Route path='/music/:title' component={MusicDetail}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
