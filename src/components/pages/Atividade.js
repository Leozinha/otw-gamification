import React, { Component } from 'react'
import Tabs from '../functions/Tabs';
import ListaAtividade from './ListaAtividade';

import { connect } from "react-redux";

class Atividade extends Component {
  render() {

    let { tabDisplayVisible } = this.props;
    let titleOne = "pedidos";
    let titleTwo = "viagens";

    return (
      <React.Fragment>
      
      {/* <Tabs tabActiveOne={tabActiveOne} tabActiveTwo={tabActiveTwo} titleOne={titleOne} titleTwo={titleTwo} tabDisplay={tabDisplayVisible}></Tabs> */}

      <div id="atividade">
        <div className="container">
          <div className="column">
                <ListaAtividade></ListaAtividade> 
          </div>
          
        </div>
      </div>
      </React.Fragment>
    )
    
  }
}

const tabActiveTwo = {
  color: '#1220DC'
}

const tabActiveOne = {
  color: '#9A9B9C'
}

//TODO propTypes

const AtividadeExp = connect(null, null)(Atividade);
export default AtividadeExp
