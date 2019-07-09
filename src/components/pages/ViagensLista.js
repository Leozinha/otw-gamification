import React, { Component } from 'react'
import ViagensItem from './ViagensItem';

// import { connect } from "react-redux";


class ViagensLista extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    // console.log('DATAFROMPARENT', this);
    const userData = this.props && this.props.dataFromParent ? this.props.dataFromParent : 'null'; 
    console.log('LWO',userData);


    

    return (
      //tem de estar dentro de um ciclo
      
      <React.Fragment>
        {userData.map((user) => (
          
          <ViagensItem key={user.id} userData = {user} />
          
        ))
        } 
      </React.Fragment>
      //tem de estar dentro de um ciclo
    )
  }
}

// const ListaAtividadeExp = connect(null, null)(ListaAtividade);
export default ViagensLista
// 