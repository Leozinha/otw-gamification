import React, { Component } from 'react'
import DesafiosItem from './DesafiosItem';

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
  
  Desafios = (numInicial,numFinal,colorBadge) => {
    const userData = this.props.dataFromParentDesafios
    const showDesafioProgress = this.props.showDesafioProgress

    console.log('COLOR BADGE', colorBadge)

    return userData.slice(numInicial, numFinal).map((badge) => (
      
      <DesafiosItem key={badge.id} desafio={badge} showDesafioProgress={showDesafioProgress} colorBadge={colorBadge} />
    ))
  }

  render() {

    const { 
      showViagens,
      showLocais,
      showBomCondutor
     } = this.props;

    
    return (
      <React.Fragment>
    
      {

        showViagens ?

        this.Desafios(0,9,yellowBadge)

        :
        null
        }

        {

        showLocais ?

        this.Desafios(9,16,blueBadge)

        :
        null
        }

        {

        showBomCondutor ?

        this.Desafios(16,29,greenBadge)

        :
        null
        }
        
      </React.Fragment>
    )
  }
}

// const ListaDesafiosExp = connect(null, null)(ListaDesafios);
export default DesafiosLista
