import React, { Component } from "react";
import "./SingleArticle.css"


class SingleArticle extends Component {
  constructor(props){
      super(props)
      
      this.state = {
articles: "" 
      }
    }
      componentDidMount() {
        const articleId = this.props.match.params.publishedAt
        const articles = this.props.articles.find(article => article.publishedAt === articleId)
        this.setState({
            articles: articles
        })
      }
     
  
  render() {
      return(
      <div className="singleArticle">
        <div className="singleHeader">
      {this.state.articles && <h1 className="singleTitle">{this.state.articles.title}</h1>}</div>
      <div className="singleContainer">
      <p className="singleDes">{this.state.articles.description}</p>
      <img src={this.state.articles.urlToImage} alt="" className="singleImg"/>
      <p>{this.state.articles.content}</p>
      <a className="readLink" href={this.state.articles.url} target={`_blank`}>Read More</a>
      </div>
      </div>
      )
  }
}

export default SingleArticle;
