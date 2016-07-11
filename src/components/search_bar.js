import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ""};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
  render() {
    return (
      <div>
        <h1>Search YouTube Videos Rapidly</h1>
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={e => this.onInputChange(e.target.value)} 
          />
        </div>
      </div>
    );
  }

};

export default SearchBar;