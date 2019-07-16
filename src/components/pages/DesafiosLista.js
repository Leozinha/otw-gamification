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

    console.log('COLOR BADGE', userData)
  
    this.state.badgeLevels = []
    let aux = 0;
    //VIAGENS
    {userData.map( badge => {

      if(badge.badgeInfo.level == 1 && badge.state == false && (badge.badgeInfo.name == "Entrega" || badge.badgeInfo.name == "Volume" || badge.badgeInfo.name == "Distância") && aux<3){
        this.state.badgeLevels.push(badge);
        aux++
      }
    })}
    {userData.map( badge => {

      if(badge.badgeInfo.level == 2 && badge.state == false && (badge.badgeInfo.name == "Entrega" || badge.badgeInfo.name == "Volume" || badge.badgeInfo.name == "Distância") && aux<3){
        this.state.badgeLevels.push(badge);
        aux++;
      }
    })}
    
    {userData.map( badge => {

      if(badge.badgeInfo.level == 3 && (badge.state == false || badge.state == true) && (badge.badgeInfo.name == "Entrega" || badge.badgeInfo.name == "Volume" || badge.badgeInfo.name == "Distância") && aux<3){
        this.state.badgeLevels.push(badge);
        aux++;
      }
    })}
    aux = 0;
    //LOCAIS
    {userData.map( badge => {

      if(badge.badgeInfo.level == 1 && badge.state == false && (badge.badgeInfo.name == "Explorador" || badge.badgeInfo.name == "Viciado") && aux < 2){
        this.state.badgeLevels.push(badge);
        aux++;
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 2 && badge.state == false && (badge.badgeInfo.name == "Explorador" || badge.badgeInfo.name == "Viciado") && aux < 2){
        this.state.badgeLevels.push(badge);
        aux++;
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 3 && (badge.state == false || badge.state == true) && (badge.badgeInfo.name == "Explorador" || badge.badgeInfo.name == "Viciado") && aux < 2){
        this.state.badgeLevels.push(badge);
        aux++;
      }
    })}
    aux = 0;
    //BOM CONDUTOR
    {userData.map( badge => {

      if(badge.badgeInfo.level == 1 && badge.state == false && (badge.badgeInfo.name == "Exemplar" || badge.badgeInfo.name == "Leal" || badge.badgeInfo.name == "Avaliação" || badge.badgeInfo.name == "Pontualidade" || badge.badgeInfo.name == "Disponibilidade") && aux < 5){
        this.state.badgeLevels.push(badge);
        aux++;
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 2 && badge.state == false && (badge.badgeInfo.name == "Exemplar" || badge.badgeInfo.name == "Leal" || badge.badgeInfo.name == "Avaliação" || badge.badgeInfo.name == "Pontualidade" || badge.badgeInfo.name == "Disponibilidade") && aux < 5){
        this.state.badgeLevels.push(badge);
        aux++;
      }
    })}

    {userData.map( badge => {

      if(badge.badgeInfo.level == 3 && (badge.state == false || badge.state == true) && (badge.badgeInfo.name == "Exemplar" || badge.badgeInfo.name == "Leal" || badge.badgeInfo.name == "Avaliação" || badge.badgeInfo.name == "Pontualidade" || badge.badgeInfo.name == "Disponibilidade") && aux < 5){
        this.state.badgeLevels.push(badge);
        aux++;
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

        this.Desafios(0,3,yellowBadge)

        :
        null
        }

        {

        showLocais ?

        this.Desafios(3,5,blueBadge)

        :
        null
        }

        {

        showBomCondutor ?

        this.Desafios(5,10,greenBadge)

        :
        null
        }
        
      </React.Fragment>
    )
  }
}

// const ListaDesafiosExp = connect(null, null)(ListaDesafios);
export default DesafiosLista
