import React, { Component } from 'react'
import ViagensLista from './ViagensLista';

// import { connect } from "react-redux";

class Viagens extends Component {
  render() {

    return (
      <React.Fragment>
      <div id="atividade">
        <div className="container">
          <div className="column">
                <ViagensLista />
          </div>
          
        </div>
      </div>
      </React.Fragment>
    )
    
  }
}

//TODO propTypes

// const AtividadeExp = connect(null, null)(Atividade);
export default Viagens
