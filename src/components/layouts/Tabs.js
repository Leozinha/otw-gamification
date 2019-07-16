import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const titleOne = "#9A9B9C";
const titleTwo = "#9A9B9C";
const titleOneActive = "#1220DC";
const titleTwoActive = "#1220DC";

export class Tabs extends Component {

  state = {
    titleOne: titleOneActive,
    titleTwo: titleTwo
  }

  oneColor(e) {
    // e.preventDefault();
    e.stopPropagation();
    this.setState({
      titleOne: titleOneActive,
      titleTwo: titleTwo
    });

    // e.nativeEvent.stopImmediatePropagation();
  }

  twoColor(e) {
    // e.preventDefault();
    e.stopPropagation();
    this.setState({
      titleOne: titleOne,
      titleTwo: titleTwoActive
    });

    // e.nativeEvent.stopImmediatePropagation();
  }

  render() {

    let { textOne,textTwo,tabDisplay } = this.props;

    let { titleOne, titleTwo } = this.state;

    return (

      <React.Fragment>

        <div id="tab" style={tabDisplay} className="navbar background align-items-center justify-content-center text-center white">
          <div className="container p-0">
            <div id="menu-pedido" className="pedido col p-2 primary-gray text-uppercase pointer font-weight-bold" >

              <span onClick={(e) => this.oneColor(e)}>
                <Link style={{ color: `${titleOne}`, textDecoration:'none' }} className="tab" to={`/${textOne}`} >
                  {textOne}
                </Link>
              </span>

            </div>
            <div id="menu-viagem" className="viagem col p-2 primary-gray text-uppercase pointer font-weight-bold" >

              <span onClick={(e) => this.twoColor(e)}>
                <Link style={{ color: `${titleTwo}`, textDecoration:'none' }} to={`/${textTwo}`}>
                  {textTwo}
                </Link>
              </span>

            </div>
          </div>
        </div>

      </React.Fragment>

    )
  }
}

export default Tabs
