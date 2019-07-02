import React, { Component } from 'react'
import Tabs from '../functions/Tabs';
import { BrowserRouter as Router } from 'react-router-dom';

export class Ranking extends Component {
 render() {

    let { tabDisplayVisible } = this.props;
    let titleOne = "desafios";
    let titleTwo = "ranking";

    return (
      <Router>
      <React.Fragment>

      <Tabs textOne={titleOne} textTwo={titleTwo} tabDisplay={tabDisplayVisible}/>

      <div id="ranking" className="desafios-color">
        <div className="container">
          <div className="column">
           


          </div>

        </div>
      </div>

    </React.Fragment>
    </Router>
    )
  }
}

// const tabActiveTwo = {
//   color: '#1220DC'
// }

// const tabActiveOne = {
//   color: '#9A9B9C'
// }

export default Ranking

