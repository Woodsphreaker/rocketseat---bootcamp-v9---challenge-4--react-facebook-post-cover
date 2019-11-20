import React from 'react'

import Comment from './Comment'

export default ({post}) => {
  const {id, author: {name, avatar}, date, content, comments} = post

  return (
    <div className="post">
      <div className="grid">
        <div className="avatar">
          <img src={avatar} alt=""/>
        </div>
        <div className="author">
          {name}
          <span className="date">{date.toLocaleDateString()}</span>
        </div>
      </div>

      <div className="content">
        {content}
      </div>

      <hr/>

      {
        comments.map((comment, i) => <Comment key={`comment-${i}`} comment={comment}/>)
      }

    </div>
  )
}
