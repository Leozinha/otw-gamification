import React, { Component } from 'react'
import DesafiosItem from './DesafiosItem';

import { connect } from "react-redux";


class ListaDesafios extends Component {
  render() {

    const { 
      showDesafioProgress, 
     
     } = this.props;

    return (
      <React.Fragment>
        <DesafiosItem showDesafioProgress={showDesafioProgress}/>
      </React.Fragment>
    )
  }
}

const ListaDesafiosExp = connect(null, null)(ListaDesafios);
export default ListaDesafiosExp
