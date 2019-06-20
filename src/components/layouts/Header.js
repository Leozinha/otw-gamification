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
      <div className="navbar background d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <div className="col">
            <Link to="/"><img style={imgSizeLogo} src={Logo} alt="" /></Link>
          </div>
          <div className="col">
            <h6 className="font-weight-normal">{this.props.title}</h6>
          </div>
          <div className="col text-right p-0">
            <img name="trophy" onClick={this.activeIcon} style={imgSizeTrophy} src={Trophy} alt="" />
          </div>
          <div className="col">
            <img style={imgSizeUser} src={User} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

const imgSizeLogo = {
  width: '50px'
}

const imgSizeTrophy = {
  width: '30px'
}

const imgSizeUser = {
  width: '46px'
}


// const imgHeader = {

// }



export default Header;
