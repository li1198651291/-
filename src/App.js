import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import get from './component/fetchJsonp';
import MovieDetail from './component/MovieDetail';
import BookDetail from './component/BookDetail';
import MusicDetail from './component/MusicDetail';
import MainList from './component/MainList';
import Search from './component/Search';
import BookList from './component/BookList';
import Footer from './component/Footer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movie: '',
      book: '',
      music: ''
    }
  }
  componentDidMount() {
    get('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b')
      .then(data => this.setState({ movie: data.subjects }))
    get('https://api.douban.com/v2/music/search?q=b&count=20')
      .then(data => this.setState({ music: data.musics }))
    get('https://api.douban.com/v2/book/search?q=a&count=20&apikey=0b2bdeda43b5688921839c8ecb20399b')
      .then(data => this.setState({ book: data.books }))
      console.log(1)
  }
  bookSubmit(data) {
    this.setState({
      book: data
    })
  }
  render() {
    let { movie, book, music} = this.state;
    console.log(this.state.book)
    return (
      <Router>
        <div className="app">
          <Route path='/' exact render={() => (
            <Link to='/movie' className='start'>点击开始</Link>
          )}></Route>
          <Route path='/movie' exact render={(routerProps) => <MainList routerProps={routerProps} initData={movie}></MainList>}></Route>
          <Route path='/music' exact render={(routerProps) => <MainList routerProps={routerProps} initData={music}></MainList>}></Route>
          {/* <Route path='/book' exact render={(routerProps) => <MainList routerProps={routerProps} initData={book}></MainList>}></Route> */}
          <Route path='/book' exact render={() => (
            <div>
            <Search kind='/book' submit={(data) => this.bookSubmit(data)}></Search>
            <ul>
              {
                book ? book.map((item, index) => (
                  <BookList dataItem={item} key={index}></BookList>
                )) : 'loading'
              }
            </ul>
            <Footer kind='/book'></Footer>
          </div>
          )}></Route>
          <Route path='/movie/:title' exact component={MovieDetail}></Route>
          <Route path='/book/:title' component={BookDetail}></Route>
          <Route path='/music/:title' component={MusicDetail}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
