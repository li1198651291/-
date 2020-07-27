import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import get from './component/fetchJsonp';
import MovieDetail from './component/MovieDetail';
import BookDetail from './component/BookDetail';
import MusicDetail from './component/MusicDetail';
import MainList from './component/MainList';
import ThemeContext from './component/ThemeContext'


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
    get('movie', '大', this.state.count)
      .then(data => {
        this.setState({ movie: data.result })
        console.log(data)
      });
    get('music', '大', this.state.count)
      .then(data => {
        this.setState({ music: data.result })
        console.log(data)
      });
    get('book', '大', this.state.count)
      .then(data => {
        this.setState({ book: data.result })
        console.log(data)
      });
  }
  getData(kind) {
    if (kind === '/book') {
      get('book', this.state.searchValue, this.state.count)
        .then(data => this.submit(data.result))
    }
    if (kind === '/music') {
      get('book', this.state.searchValue, this.state.count)
        .then(data => this.submit(data.result))
    }
    if (kind === '/movie') {
      get('book', this.state.searchValue, this.state.count)
        .then(data => this.submit(data.result))
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
  render() {
    return (
      <ThemeContext.Provider value={{
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
      }}>
        <div className="app">
          <Router>
            <Switch>
              <Route path='/' exact render={() => (
                <Link to='/movie' className='start'>点击开始</Link>
              )}></Route>
              <Route path='/movie' exact component={MainList}></Route>
              <Route path='/music' exact component={MainList}></Route>
              <Route path='/book' exact component={MainList}></Route>
              <Route path='/movie/:title' component={MovieDetail}></Route>
              <Route path='/book/:title' component={BookDetail}></Route>
              <Route path='/music/:title' component={MusicDetail}></Route>
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider >
    );
  }
}

export default App;
