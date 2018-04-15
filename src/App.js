import React, { Component } from 'react';
import Header from './Header';
import SelectionBox from './SelectionBox';
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
      titles: [],
      loggedIn: token ? true : false,
      selectedSub: "/r/Music"
    }

    // Setters
    this.updateSubState = this.updateSubState.bind(this);
  }

  // use for data fetching
  componentDidMount() {
    axios.get('https://www.reddit.com' + this.state.selectedSub + '/.json')
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

  updateSubState(newSub) {
    this.setState({selectedSub: newSub})
  }

  render() {
    debugger
    let titles = this.state.titles.map(title => <p>{title}</p>)
    return (
      <div className="App">
        <Header />
        <a href='http://localhost:8888/login' > Login to Spotify </a>
        <h1>{ this.state.loggedIn === true ? "logged in" : "not logged in" }</h1>
        <a href='http://localhost:8888/playlists'> Get playlists </a>
        <SelectionBox 
          subTitle={this.state.selectedSub} 
          updateTitle={this.updateSubState}
        />
        {titles}
      </div>
    );
  }
}

export default App;
