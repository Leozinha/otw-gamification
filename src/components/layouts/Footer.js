import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LogoFooter from '../../imgs/layout/menu-logo.png'
// import LogoFooterActive from '../../imgs/layout/menu-logo-active.png'
import Search from '../../imgs/layout/search.png'
import Create from '../../imgs/layout/trip.png'
// import CreateActive from '../../imgs/layout/trip-active.png'
import Message from '../../imgs/layout/message.png'
import Activity from '../../imgs/layout/activity.png'
// import ActivityActive from '../../imgs/layout/activity-active.png'


class Footer extends Component {
  
  render() {

  

    return (
      <div className="navbar background align-items-center justify-content-center text-center white shadow mt-auto">
        <div className="container p-0">
          <div className="col">
            {/* <Link to="/"> */}
            <img className="icons-36" onClick={this.activeIcon} src={LogoFooter} alt="" />
            {/* </Link> */}
          </div>
          <div className="col">
            {/* <Link to="/"> */}
            <img className="icons-24" src={Search} alt="" />
            {/* </Link> */}
          </div>
          <div className="col">
            {/* <Link to="/"> */}
            <img className="icons-24" src={Create} alt="" />
            {/* </Link> */}
          </div>
          <div className="col">
            {/* <Link to="/"> */}
            <img className="icons-24" src={Message} alt="" />
            {/* </Link> */}
          </div>
          <div className="col">
            <Link to="/atividade">
            <img className="icons-24" src={Activity} alt="" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

//TODO propTypes

export default Footer
