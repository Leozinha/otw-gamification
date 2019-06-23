import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../imgs/layout/logo.png'
import Trophy from '../../imgs/layout/trophy.png'
import TrophyActive from '../../imgs/layout/trophy-active.png'
import User from '../../imgs/layout/user.png'
import UserActive from '../../imgs/layout/user-active.png'
import Tabs from '../functions/Tabs';

class Header extends Component {

  state = {
    trophyURL: Trophy,
    trophyActiveURL: TrophyActive,
    user: User,
    userActive: UserActive,

  }

  notActive = () => {

    this.setState({ trophyURL: Trophy });
    this.setState({ user: User });

  }

  activeTrophy(e) {

    this.setState({
      trophyURL: TrophyActive,
      user: User
    });

    e.stopPropagation();


  }

  activeProfile(e) {
    this.setState({
      user: UserActive,
      trophyURL: Trophy
    });

    e.stopPropagation();

  }


  // TabsDisplay(props) {

  //   let { tabDisplay } = this.props;
  
  //   return (
  //     <div id="tab" ref={props.tabDisplay} style={tabDisplay} className="navbar background d-flex align-items-center justify-content-center text-center white">
  //   <div className="container p-0">
  //     <div id="menu-pedido" /*ref={div => this.myElementColor = div} onClick={this.handleClickPedido.bind(this)}*/ className="col p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">pedidos</div>
  //     <div id="menu-viagem" /*ref={div => this.myElementColorViagem = div} onClick={this.handleClickViagem.bind(this)}*/ className="col p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">viagens</div>
  //   </div>
  // </div>
  //   );
  // }


  render() {
    const Trophy = this.state.trophyURL;
    const User = this.state.user;

    let { title, tabDisplay } = this.props;

    return (
      <React.Fragment>
        <div onClick={this.notActive} className="navbar background align-items-center justify-content-center text-center white shadow bring-to-front">
          <div className="container p-0">
            <div className="col p-0">
              <Link to="/"><img className="icons-36" src={Logo} alt="" /></Link>
            </div>
            <div className="col-6">
              <h6 className="font-weight-normal mb-0">{title}</h6>
            </div>
            <div className="col text-right p-0">

              <img className="icons-24" onClick={(e) => this.activeTrophy(e)} src={Trophy} alt="" />

            </div>
            <div className="col pl-3 p-0">
              <img onClick={(e) => this.activeProfile(e)} className="icons-48" src={User} alt="" />
            </div>
          </div>

        </div>
        
        <Tabs tabDisplay={tabDisplay}></Tabs>

      </React.Fragment>
    )
  }
}

//TODO propTypes

export default Header;
