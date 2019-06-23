import React, { Component } from 'react'
import Tabs from '../functions/Tabs';
import ListaAtividade from './ListaAtividade';

export class Atividade extends Component {
  render() {

    let { tabDisplayVisible } = this.props;

    return (
      <React.Fragment>
      
      <Tabs tabDisplay={tabDisplayVisible}></Tabs>

      <div id="atividade">
        <div className="container">
          <div className="row">
            <div className="col">
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                <ListaAtividade></ListaAtividade>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      </React.Fragment>
    )
    
  }
}

//TODO propTypes

export default Atividade
