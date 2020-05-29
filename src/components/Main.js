import React, { Component } from "react";

import "./Main.css";


import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    };
    
  }

  render() {
  
    return (
      <div className="mainPage">
        {this.props.articles.map((i, idx) => (
          <div className="articleContainer" key={idx}>
            <Link to={`/article/${i.publishedAt}`} key={i.id}>
              <h4 className="mainTitle" >{i.title}</h4>
            </Link>
            <img src={i.urlToImage} alt="" className="thumbnail"/>
          </div>
        ))}
  
      </div>
    );
  }
}

export default Main;
