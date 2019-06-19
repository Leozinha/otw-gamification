import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../imgs/layout/logo.png'
import Trophy from '../../imgs/layout/trophy.png'
import TrophyActive from '../../imgs/layout/trophy-active.png'
import User from '../../imgs/layout/user.png'

class Header extends Component {

  state = {
    trophyURL: Trophy,
    trophyActiveURL: TrophyActive
  }

  activeIcon = (e) => { 
    const TrophyState = this.state.trophyURL;
    const TrophyActive = this.state.trophyActiveURL;

    if (TrophyState !== Trophy) {
      this.setState({ trophyURL: Trophy });
    } else {
      this.setState({ trophyURL: TrophyActive });
    }
  
  }

  render() {
    const Trophy = this.state.trophyURL;

    return (
      <div className="background d-flex align-items-center justify-content-center">
        <div className="col">
          <Link to="/"><img style={imgSizeLogo} src={Logo} alt=""/></Link>
        </div>
        <div className="col text-left">
          <h5>{this.props.title}</h5>
        </div>
        <div className="col text-right">
          <img name="trophy" onClick={this.activeIcon} style={imgSizeTrophy} src={Trophy} alt=""/>
        </div>
        <div className="col">
          <img style={imgSizeUser} src={User} alt=""/>
        </div>
      </div>
    )
  }
}

const imgSizeLogo = {
   width:'50px'
}

const imgSizeTrophy = {
  width:'32px'
}

const imgSizeUser = {
  width:'48px'
}


// const imgHeader = {
 
// }
 


export default Header;
