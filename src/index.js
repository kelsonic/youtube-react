import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import API_KEY from './secret.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  // Use _.debounce to send api call only once every 300ms
  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
};

// Take the component and put it into the page
ReactDOM.render(<App />, document.querySelector('#app'));