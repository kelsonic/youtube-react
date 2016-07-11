import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';



const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take the component and put it into the page
ReactDOM.render(<App />, document.querySelector('#app'));