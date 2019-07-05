import React, { Component } from 'react'
import AtividadeItem from './AtividadeItem';

// import { connect } from "react-redux";


class ListaAtividade extends Component {
  render() {
    return (
      <React.Fragment>
        <AtividadeItem />
      </React.Fragment>
    )
  }
}

// const ListaAtividadeExp = connect(null, null)(ListaAtividade);
export default ListaAtividade
