import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';
const YOU_TUBE_API_KEY = 'AIzaSyBGYV6zZJ5-uiUARDS9byRmm3tUXEL0toM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    YTSearch({ key: YOU_TUBE_API_KEY, term: 'barcelona city' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };
};

ReactDOM.render(
  <App />, document.querySelector('.container'));
