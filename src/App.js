import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
import SingleArticle from "./components/SingleArticle";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount = async () => {
    const response = await axios(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=29faf22ca3d14f958eb0920d1c110549`
    );
    this.setState({ articles: response.data.articles });
  };

  render() {
    return (
      <div className="parent">
        <Header />
        <Weather />
        <Search />
        <Route
          render={(routerProps) => (
            <Main articles={this.state.articles} {...routerProps} />
          )}
          path="/"
          exact
        />
        <Route
          render={(routerProps) => (
            <SingleArticle articles={this.state.articles} {...routerProps} />
          )}
          path="/article/:publishedAt"
          exact
        />

        <Footer />
      </div>
    );
  }
}

export default App;
