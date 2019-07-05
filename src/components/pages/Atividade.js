import React, { Component } from 'react'
import ListaAtividade from './ListaAtividade';

// import { connect } from "react-redux";

class Atividade extends Component {
  render() {

    return (
      <React.Fragment>
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

//TODO propTypes

// const AtividadeExp = connect(null, null)(Atividade);
export default Atividade
