import React from 'react';

function Header({ title }){
  return (
    <nav>
      <div className="nav-wrapper darken-2 header-component">
        <a href="#!" className="brand-logo">{title}</a>
      </div>
    </nav>
  )
}

export default Header;
