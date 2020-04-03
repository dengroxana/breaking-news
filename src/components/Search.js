import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./Search.css"
import SearchIcon from "./search-icon.png"
import SearchResults from "./SearchResults";
import axios from "axios";
import SingleArticle from "./SingleArticle";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "", results: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getSearch = async () => {
    const response = await axios(
      `https://newsapi.org/v2/everything?q=${this.state.value}&apiKey=29faf22ca3d14f958eb0920d1c110549`
    );
    this.setState({ results: response.data.articles });
  };

  handleSubmit(event) {
    this.getSearch();
    this.props.history.push("/results");
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form>
          <input className="inputField" placeholder="Search Articles"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit" onClick={this.handleSubmit}><img className="searchIcon" src={SearchIcon} alt=""/></button>
        </form>

        <Route
          render={routerProps => (
            <SearchResults results={this.state.results} {...routerProps} />
          )}
          path="/results"
          exact
        />
        <Route
          render={routerProps => (
            <SingleArticle articles={this.state.results} {...routerProps} />
          )}
          path="/search/article/:publishedAt"
        />
      </>
    );
  }
}

export default withRouter(Search);
