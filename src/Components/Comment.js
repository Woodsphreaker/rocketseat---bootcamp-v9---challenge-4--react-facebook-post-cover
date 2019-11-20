import React from 'react'

export default Comment = ({comment}) => {

  const {id, author: {name, avatar}, content} = comment
  return (
    <>
      <div className="comment">
        <div className="avatar">
          <img src={avatar} alt=""/>
        </div>
        <div className="content">
          <span>{name}</span> {content}
        </div>
      </div>
    </>
  )
}