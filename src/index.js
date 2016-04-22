import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar'

const YOU_TUBE_API_KEY = AIzaSyBGYV6zZJ5-uiUARDS9byRmm3tUXEL0toM;

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
