import React, { Component } from 'react'
import DesafiosItem from './DesafiosItem';

// import { connect } from "react-redux";


const yellowBadge = {
  color:"#f6c14c"
}

const blueBadge = {
  color:"#2734df"
}

const greenBadge = {
  color:"#236a36"
}


class DesafiosLista extends Component {
  render() {

    const { 
      showDesafioProgress, 
      showViagens,
      showLocais,
      showBomCondutor
     } = this.props;

     console.log(showViagens);
    return (
      <React.Fragment>
        {
          showViagens ?
        <DesafiosItem colorBadge={yellowBadge} showDesafioProgress={showDesafioProgress}/>
          :
          null
        }

        {
          showLocais ?
        <DesafiosItem colorBadge={blueBadge} showDesafioProgress={showDesafioProgress}/>
          :
          null
        }

        {
          showBomCondutor ?
        <DesafiosItem colorBadge={greenBadge} showDesafioProgress={showDesafioProgress}/>
          :
          null
        }
      </React.Fragment>
    )
  }
}

// const ListaDesafiosExp = connect(null, null)(ListaDesafios);
export default DesafiosLista
