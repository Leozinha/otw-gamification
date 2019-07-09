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

// const UserData = {
//   DesafiosLista: this.props.dataFromParentDesafios
// }


// export const BadgesViagens = (imgsViagens) =>
//   imgsViagens.map(el => {

//     const showBadgesConquered = false;
    
//     return showBadgesConquered ?
//       <img className="badges-md" key={el.badge} src={require(`../../imgs/pages/${el.badge.toLowerCase()}.png`)} alt="" />
//       :
//       <img className="badges-md unavailable" key={el.badge} src={require(`../../imgs/pages/${el.badge.toLowerCase()}.png`)} alt="" />


//   });

class DesafiosLista extends Component {
  
  constructor(props) {
    super(props);
    
  }

  DesafiosViagens = () => {
    const userData = this.props.dataFromParentDesafios

    return userData.slice(0, 9).map((badge) => (
      <DesafiosItem key={badge.id} dataFromParent={badge} />
    ))
  }

  DesafiosLocais = () => {
    const userData = this.props.dataFromParentDesafios

    return userData.slice(9, 15).map((badge) => (
      <DesafiosItem key={badge.id} dataFromParent={badge} />
    ))
  }

  DesafiosBomCondutor = () => {
    const userData = this.props.dataFromParentDesafios

    return userData.slice(0, 9).map((badge) => (
      <DesafiosItem key={badge.id} dataFromParent={badge} />
    ))
  }

  render() {


    const { 
      showDesafioProgress, 
      showViagens,
      showLocais,
      showBomCondutor
     } = this.props;

     console.log(showViagens);

     const userData = this.props && this.props.dataFromParentDesafios ? this.props.dataFromParentDesafios : 'null';
    //  console.log('DesafiosLista', userData);

    return (
      <React.Fragment>
        {
          showViagens ?
          this.DesafiosViagens()
          :
          null
        }

        {
          showLocais ?
            // <DesafiosItem /*key={badge.id}*/ colorBadge={blueBadge} showDesafioProgress={showDesafioProgress} /*dataFromParent={badge*/ />
            this.DesafiosLocais()
          :
          null
        }

        {
          showBomCondutor ?
          // userData.slice(16, 29).map((badge) => (
            <DesafiosItem /*key={badge.id}*/ colorBadge={greenBadge} showDesafioProgress={showDesafioProgress} /*dataFromParent={badge}*/ />
          // ))
            :
          null
        }
      </React.Fragment>
    )
  }
}

// const ListaDesafiosExp = connect(null, null)(ListaDesafios);
export default DesafiosLista
