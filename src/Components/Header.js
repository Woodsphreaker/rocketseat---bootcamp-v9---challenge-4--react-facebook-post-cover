import React from 'react'

import FacebookLogo from '../assets/Facebook-logo.png'
import UserIcon from '../assets/user-icon.png'

export default () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="company-logo">
          <img src={FacebookLogo} alt=""/>
        </div>
        <div className="user-profile">
          <span className="name">Meu pefil</span>
          <span className="icon">
            <img src={UserIcon} alt=""/>
          </span>
        </div>
      </div>
    </div>
  )
}