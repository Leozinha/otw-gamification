import React, { Component } from 'react'
import DesafiosItem from './DesafiosItem';


export class ListaDesafios extends Component {
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

export default ListaDesafios
