import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Main.css"




class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

render() {    
  return (
    <div className="mainPage">
      {this.props.results.map((i, idx) => (
        <div className="articleContainer" key={idx}>
          <Link to={`/search/article/${i.publishedAt}`} key={i.id} exact>
            <h4 className="mainTitle">{i.title}</h4>
          </Link>
          <img src={i.urlToImage} alt="" className="thumbnail"/>
        </div>
      ))}
      
    </div>
  );
}
}
export default SearchResults;
