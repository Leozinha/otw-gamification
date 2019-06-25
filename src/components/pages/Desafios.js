import React, { Component } from 'react'
import Tabs from '../functions/Tabs';
import ListaDesafios from '../pages/ListaDesafios';
import badgeEntregas from '../../imgs/pages/badge-entregas.png'
import badgeLocais from '../../imgs/pages/badge-volume.png'
import badgeBomCondutor from '../../imgs/pages/badge-distancia.png'


class Desafios extends Component {

  state = {
    showViagens:false,
    showLocais:false,
    showBomCondutor:false
  }

  showListViagens = () => {
    let showViagens = this.state.showViagens;

    this.setState({
      showViagens:!showViagens,
    })
  }

  showListLocais = () => {
    let showLocais = this.state.showLocais;

    this.setState({
      showLocais:!showLocais,
    })
  }

  showListBomCondutor = () => {
    let showBomCondutor = this.state.showBomCondutor;

    this.setState({
      showBomCondutor:!showBomCondutor,
    })
  }

  render() {

    let { tabDisplayVisible } = this.props;
    let titleOne = "desafios";
    let titleTwo = "ranking";

    return (
      <React.Fragment>

        <Tabs tabActiveOne={tabActiveOne} tabActiveTwo={tabActiveTwo} titleOne={titleOne} titleTwo={titleTwo} tabDisplay={tabDisplayVisible}></Tabs>

        <div id="desafios">
          <div className="container">
            <div className="column">
            {/* Viagens */}
            {this.state.showViagens ? 

             <h5 onClick={this.showListViagens}>Viagens</h5>
            : 
            <div id="viagens" className="row align-items-center rounded shadow viagens-desafios p-3" onClick={this.showListViagens}>
                <div className="col-4"><h5>Viagens</h5></div>
                <div id="badges" className="col-4 d-flex align-items-center">
                  <div className="col"><img className="badges-md" src={badgeEntregas} alt="" /></div>
                  <div className="col"><img className="badges-md" src={badgeLocais} alt="" /></div>
                  <div className="col"><img className="badges-md" src={badgeBomCondutor} alt="" /></div>
                </div>
                
              </div> 
              
            }
            
            {this.state.showViagens ? <ListaDesafios /> : null}

            {/* Locais */}
            
            {this.state.showLocais ? 

              <h5 onClick={this.showListLocais}>Locais</h5>
            : 
            <div id="locais" className="row rounded shadow viagens-desafios p-3" onClick={this.showListLocais}>
                <div className="col-4">Hello</div>
                <div className="col-4">Hello</div>
                <div className="col-4">Hello</div>
              </div>
              
            }

            {this.state.showLocais ? <ListaDesafios /> : null}

            {/* Bom Condutor */}

            {this.state.showBomCondutor ? 

            <h5 onClick={this.showListBomCondutor}>Bom Condutor</h5>
            : 
            <div id="locais" className="row rounded shadow viagens-desafios p-3" onClick={this.showListBomCondutor}>
              <div className="col-4">Hello</div>
              <div className="col-4">Hello</div>
              <div className="col-4">Hello</div>
            </div>

            }

            {this.state.showBomCondutor ? <ListaDesafios /> : null}

            </div>

          </div>
        </div>

      </React.Fragment>
    )
  }
}

const tabActiveTwo = {
  color: '#9A9B9C'
}

const tabActiveOne = {
  color: '#1220DC'
}

export default Desafios
