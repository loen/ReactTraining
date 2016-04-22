import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list';
const YOU_TUBE_API_KEY = 'AIzaSyBGYV6zZJ5-uiUARDS9byRmm3tUXEL0toM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({ key: YOU_TUBE_API_KEY, term: 'barcelona' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };
};

ReactDOM.render(
  <App />, document.querySelector('.container'));
