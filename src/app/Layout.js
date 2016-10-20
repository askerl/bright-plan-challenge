import React from 'react';

import Nav from './Nav';

let title = "Bright Plan LLC";

class Layout extends React.Component{
  render(){
    return(
      <div id="wrapper">
        <Nav title={title}/>
        <div id="page-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
