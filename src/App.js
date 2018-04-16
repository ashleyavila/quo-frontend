import React, { Component } from 'react';
import Header from './Header';
import SelectionBox from './SelectionBox';
import './App.css';
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-js';
const _ = require('lodash');
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();

    this.state = {
      titles: [],
      access_token: params.access_token,
      user_id: params.user_id,
      selectedSub: "/r/Music",
    }

    if (this.state.access_token) {
      spotifyApi.setAccessToken(this.state.access_token);
    }

    // Setters
    this.updateSubState = this.updateSubState.bind(this);

    // Buttons
    this.createPlaylistCallback = this.createPlaylistCallback.bind(this);
  }

  // use for data fetching
  componentDidMount() {
    axios.get('https://www.reddit.com' + this.state.selectedSub + '/.json')
      .then(res => {
        let threads = res.data.data.children
        let titles = threads.map(thread => thread.data.title)
        
        let regMatch = /^\w[\w+\s*]+[-]+[\w+\s*|.|']+\w/igm;
        this.setState({titles: _.flatten((titles.map(title => title.match(regMatch)).filter(x=>x)))})
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

  createPlaylistCallback() {
    let _this = this;
    // create playlist
    spotifyApi.createPlaylist(this.state.user_id, {name: this.state.selectedSub}, function(err, data) {
      if(!err) 
      {
        let playlist_id = data.id

        // convert songs
        let track_uris = _this.state.titles.map(
          (x) => _this.getSpotifyUriFromName(x)
        );

        // add songs
        Promise.all(track_uris).then(function(uris) {
          spotifyApi.addTracksToPlaylist(_this.state.user_id, playlist_id, uris.filter(x=>x));
        }).then(() => alert("DONE"));
      }
    });
  }

  async getSpotifyUriFromName(track) {
    var result = await spotifyApi.searchTracks(track)
    if(result.tracks.total !== 0) {
      return "spotify:track:" + result.tracks.items[0].id
    } else {
      return null;
    }
  }

  updateSubState(newSub) {
    this.setState({selectedSub: newSub}, () => this.componentDidMount())
  }

  render() {
    return (
      <div className="App">
        <Header />
        <a href='http://localhost:8888/login' > Login to Spotify </a>
        <button onClick={this.createPlaylistCallback}>Create playlist</button>
        <SelectionBox 
          subTitle={this.state.selectedSub} 
          updateTitle={this.updateSubState}
        />
        {this.state.titles.map(title => <p>{title}</p>)}
      </div>
    );
  }
}

export default App;
