import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

// eslint-disable-next-line react/prefer-stateless-function
class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    // console.log('This is cool just did mount');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album) => 
      <AlbumDetails key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList;
