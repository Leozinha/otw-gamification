import React, { Component } from 'react'
import ViagensItem from './ViagensItem';

// import { connect } from "react-redux";


class ViagensLista extends Component {
  render() {
    return (
      <React.Fragment>
        <ViagensItem />
      </React.Fragment>
    )
  }
}

// const ListaAtividadeExp = connect(null, null)(ListaAtividade);
export default ViagensLista
