import React, { Component } from 'react';
import Header from './Header';
import SelectionBox from './SelectionBox';
import $ from 'jquery';
import './App.css';
import axios from 'axios'

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      // state thing you want to set
      titles: [],
      loggedIn: token ? true : false
    }
  }

  // var sub = 'Music'
  // var str = 'https://www.reddit.com/r/' + sub + '/.json'

  // use for data fetching
  componentDidMount = () => {
    axios.get('https://www.reddit.com/r/frenchelectro/.json')
      .then(res => {
        let threads = res.data.data.children
        let titles = threads.map(thread => thread.data.title)
        this.setState({titles})
      })
      .catch(err => {
        console.log(err)
      })
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    debugger
    let titles = this.state.titles.map(title => <p>{title}</p>)
    return (
      <div className="App">
        <Header />
        <a href='http://localhost:8888/login' > Login to Spotify </a>
        <h1>{ this.state.loggedIn == true ? "logged in" : "not logged in" }</h1>
        <a href='http://localhost:8888/playlists'> Get playlists </a>
        <SelectionBox />
        {titles}
      </div>
    );
  }
}

export default App;
