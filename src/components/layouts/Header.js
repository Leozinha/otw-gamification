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

  activeHome = (e) => {

    console.log("not")
    this.setState({ trophyURL: Trophy });

  }

  activeTrophy = (e) => {
    let TrophyActiveState = this.state.trophyActiveURL;


    console.log("active")
    this.setState({ trophyURL: TrophyActiveState });

  }

  render() {
    const Trophy = this.state.trophyURL;
    let { title } = this.props;

    return (
      <div className="navbar background d-flex align-items-center justify-content-center text-center white shadow">
        <div className="container p-0">
          <div className="col p-0">
            <Link to="/"><img onClick={this.activeHome} className="icons-36" src={Logo} alt="" /></Link>
          </div>
          <div className="col-6">
            <h6 className="font-weight-normal mb-0">{title}</h6>
          </div>
          <div className="col text-right p-0">

            <img className="icons-24" onClick={this.activeTrophy} src={Trophy} alt="" />

          </div>
          <div className="col pl-3 p-0">
            <img className="icons-48" src={User} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

//TODO propTypes

export default Header;
