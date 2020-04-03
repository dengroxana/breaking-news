import React from 'react';
import "./SingleArticle.css"

function SingleArticle(props) {
    return (
<div className="singleArticle">
        
      <div className="singleContainer">
      <p className="singleDes">{props.description}</p>
      <p>{props.content}</p>
      <a className="readLink" href={props.url} target={`_blank`}>Read More</a>
      </div>
      </div>
    )
}

export default SingleArticle