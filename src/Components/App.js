import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import SearchForm from './SearchForm' 
import SearchResults from './SearchResults'
import About from './About'
import axios from 'axios';

const NEWS_API = `https://newsapi.org/v2/everything?apiKey=0f934fdb8888409689c62800a41196d4`


class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      headline: [],
      inputValue: '',
      showSearchResult: false,    
    }
  }

  fetchNewsData = async (url, params) => {
      let stringURL
      params ? stringURL = url + '&q=' + params : stringURL = url
      const response = await axios(stringURL)
      this.setState({
        headline: response.data
      })
  }

  componentDidMount() {
    this.fetchNewsData(NEWS_API, `q=''`)

  }

  handleChange = (event) => {
    event.preventDefault()
    const keyWord = event.target.searchBar.value
    this.fetchNewsData(NEWS_API, keyWord)
    this.setState({ 
      showSearchResult: true
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav className="nav">
          <h1 className="app-name">ArticleSmart</h1>
            <ul>
              <li className="nav-link"><Link className="nav-item" to="/home">Home</Link></li>
              <li className="nav-link"><Link className="nav-item" to="/archives">Archives</Link></li>
              <li className="nav-link"><Link className="nav-item" to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route 
            path="/home" 
            render={() => <SearchForm 
              handleChange={this.handleChange} 
              headline={this.state.headline} 
              filterNewsData={this.filterNewsData} />}
              handleClick={this.handleClick} 
            />
          {
            this.state.showSearchResult === true ? <Route path="/home" render={() => <SearchResults 
              headline={this.state.headline} />} /> : null
          }
          <Route path="/about" component={About}/>
        </main>
      </div>
    );
  }
}

export default App;
