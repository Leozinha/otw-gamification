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
  
  state = {
    badgeLevels : []
  }

  Desafios = (numInicial,numFinal,colorBadge) => {
    const userData = this.props.dataFromParentDesafios
    const showDesafioProgress = this.props.showDesafioProgress

    console.log('COLOR BADGE', colorBadge)
  
    this.state.badgeLevels = []
    //VIAGENS
    {userData.map( badge => {

      if(badge.badgeInfo.level == 1 && badge.state == false && (badge.badgeInfo.name == "Entrega" || badge.badgeInfo.name == "Volume" || badge.badgeInfo.name == "Distância")){
        this.state.badgeLevels.push(badge);
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 2 && badge.state == false && (badge.badgeInfo.name == "Entrega" || badge.badgeInfo.name == "Volume" || badge.badgeInfo.name == "Distância")){
        this.state.badgeLevels.push(badge);
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 3 && badge.state == false && (badge.badgeInfo.name == "Entrega" || badge.badgeInfo.name == "Volume" || badge.badgeInfo.name == "Distância")){
        this.state.badgeLevels.push(badge);
      }
    })}

    //LOCAIS
    {userData.map( badge => {

      if(badge.badgeInfo.level == 1 && badge.state == false && (badge.badgeInfo.name == "Explorador" || badge.badgeInfo.name == "Viciado")){
        this.state.badgeLevels.push(badge);
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 2 && badge.state == false && (badge.badgeInfo.name == "Explorador" || badge.badgeInfo.name == "Viciado")){
        this.state.badgeLevels.push(badge);
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 3 && badge.state == false && (badge.badgeInfo.name == "Explorador" || badge.badgeInfo.name == "Viciado")){
        this.state.badgeLevels.push(badge);
      }
    })}

    //BOM CONDUTOR
    {userData.map( badge => {

      if(badge.badgeInfo.level == 1 && badge.state == false && (badge.badgeInfo.name == "Exemplar" || badge.badgeInfo.name == "Leal" || badge.badgeInfo.name == "Avaliação" || badge.badgeInfo.name == "Pontualidade" || badge.badgeInfo.name == "Disponibilidade")){
        this.state.badgeLevels.push(badge);
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 2 && badge.state == false && (badge.badgeInfo.name == "Exemplar" || badge.badgeInfo.name == "Leal" || badge.badgeInfo.name == "Avaliação" || badge.badgeInfo.name == "Pontualidade" || badge.badgeInfo.name == "Disponibilidade")){
        this.state.badgeLevels.push(badge);
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 3 && badge.state == false && (badge.badgeInfo.name == "Exemplar" || badge.badgeInfo.name == "Leal" || badge.badgeInfo.name == "Avaliação" || badge.badgeInfo.name == "Pontualidade" || badge.badgeInfo.name == "Disponibilidade")){
        this.state.badgeLevels.push(badge);
      }
    })}
    

    console.log('BADGESFALSE', this.state.badgeLevels)

    return this.state.badgeLevels.slice(numInicial, numFinal).map((badge) => (
      
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

        this.Desafios(9,15,blueBadge)

        :
        null
        }

        {

        showBomCondutor ?

        this.Desafios(15,30,greenBadge)

        :
        null
        }
        
      </React.Fragment>
    )
  }
}

// const ListaDesafiosExp = connect(null, null)(ListaDesafios);
export default DesafiosLista
