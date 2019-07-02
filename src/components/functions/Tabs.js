import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

const titleOne = "#9A9B9C";
const titleTwo = "#9A9B9C";
const titleOneActive = "#1220DC";
const titleTwoActive = "#1220DC";

export class Tabs extends Component {

  state = {
    titleOne: titleOne,
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

    // let changeColorOne = this.state.titleOne ? "#1220DC" : "#9A9B9C"
    // let changeColorTwo = this.state.titleTwo ? "#1220DC" : "#9A9B9C"

    let { textOne, textTwo, tabDisplay, tabDisplay2 } = this.props;

    let { titleOne, titleTwo } = this.state;

    // let tabActiveOne = props.tabActiveOne;
    // let tabActiveTwo = props.tabActiveTwo;

    return (

      <React.Fragment>

        <div id="tab" style={tabDisplay2} className="navbar background align-items-center justify-content-center text-center white">
          <div className="container p-0">
            <div id="menu-pedido" className="pedido col p-2 primary-gray text-uppercase pointer font-weight-bold" >

              <span onClick={(e) => this.oneColor(e)}>
                <Link style={{ color: `${titleOne}` }} to="/desafios" >
                  test1
                </Link>
              </span>

            </div>
            <div id="menu-viagem"  /*style={tabActiveTwo}*/ className="viagem col p-2 primary-gray text-uppercase pointer font-weight-bold" >

              <span onClick={(e) => this.twoColor(e)}>
                <Link style={{ color: `${titleTwo}` }} to="/ranking">
                  test2
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
