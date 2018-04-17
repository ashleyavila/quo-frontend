import React, { Component } from 'react';
import Header from './Header';
import SelectionBox from './SelectionBox';
import './App.css';
import axios from 'axios';
import { withAlert } from "react-alert";
import SpotifyWebApi from 'spotify-web-api-js';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

const _ = require('lodash');
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(props) {
    super(props);
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
    this.fetchRedditInfo()
  }

  fetchRedditInfo() {
    axios.get('https://www.reddit.com' + this.state.selectedSub + '/.json')
    .then(res => {
      let threads = res.data.data.children
      let titles = threads.map(thread => thread.data.title)

      let regMatch = /^\w[\w+\s*]+[-]+[\w+\s*|.|']+\w/igm;
      this.setState({ titles: _.flatten((titles.map(title => title.match(regMatch)).filter(x => x))) })
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
    spotifyApi.createPlaylist(this.state.user_id, { name: this.state.selectedSub }, function (err, data) {
      if (!err) {
        let playlist_id = data.id

        // convert songs
        let track_uris = _this.state.titles.map(
          (x) => _this.getSpotifyUriFromName(x)
        );

        // add songs
        Promise.all(track_uris).then(function (uris) {
          spotifyApi.addTracksToPlaylist(_this.state.user_id, playlist_id, uris.filter(x => x));
        }).then(_this.props.alert.success("Playlist created!"));
      } else {
        _this.props.alert.error("Failed. Click sign in!")
      }
    });
  }

  async getSpotifyUriFromName(track) {
    var result = await spotifyApi.searchTracks(track)
    if (result.tracks.total !== 0) {
      return "spotify:track:" + result.tracks.items[0].id
    } else {
      return null;
    }
  }

  updateSubState(newSub) {
    this.setState({ selectedSub: newSub }, () => this.fetchRedditInfo())
  }

  render() {
    return (
      <div className="App">
        <Header 
          isLoggedOn={this.state.access_token !== undefined}
        />
        <Grid>
          <Row className='instructions'>
            <h4>Select a subreddit to see what users are currently recommending. Press 'Create Playlist' to generate a playlist in your Spotify.</h4>
          </Row>
          <Row className='selectbox'>
            <Col>
              <SelectionBox
                subTitle={this.state.selectedSub}
                updateTitle={this.updateSubState}
              />
            </Col>
          </Row>
          <ButtonToolbar>
            <Button className='playlist' bsSize='small' onClick={this.createPlaylistCallback} >
              Create Playlist
          </Button>
          </ButtonToolbar>
          <h2 className='recommendation'>What users recommend:</h2>
            {this.state.titles.map((title,i) => <p key={i}>{title}</p>)}
        </Grid>
      </div>
    );
  }
}

export default withAlert(App);