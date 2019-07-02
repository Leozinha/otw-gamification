import React, { Component } from 'react'
import Tabs from '../functions/Tabs';
import ListaDesafios from '../pages/ListaDesafios';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { BrowserRouter as Router } from 'react-router-dom';

const imgsViagens = [
  { badge: 'badge-entregas' },
  { badge: 'badge-volume' },
  { badge: 'badge-distancia' }
]

const imgsLocais = [
  { badge: 'badge-viciado' },
  { badge: 'badge-explorador' },
]

const imgsBomCondutor = [
  { badge: 'badge-exemplar' },
  { badge: 'badge-leal' },
  { badge: 'badge-satisfacao' },
  { badge: 'badge-pontual' },
  { badge: 'badge-disponivel' }
]

export const BadgesViagens = (imgsViagens) =>
  imgsViagens.map(el => {

    const showBadgesConquered = false;
    
    return showBadgesConquered ?
      <img className="badges-md" key={el.badge} src={require(`../../imgs/pages/${el.badge.toLowerCase()}.png`)} alt="" />
      :
      <img className="badges-md unavailable" key={el.badge} src={require(`../../imgs/pages/${el.badge.toLowerCase()}.png`)} alt="" />


  });

export const BadgesLocais = (imgsLocais) =>
  imgsLocais.map(el => {

    return <img className="badges-md" key={el.badge} src={require(`../../imgs/pages/${el.badge.toLowerCase()}.png`)} alt="" />;
  });

export const BadgesBomCondutor = (imgsBomCondutor) =>
  imgsBomCondutor.map(el => {

    return <img className="badges-md" key={el.badge} src={require(`../../imgs/pages/${el.badge.toLowerCase()}.png`)} alt="" />;
  });

class Desafios extends Component {

  state = {
    showViagens: false,
    showLocais: false,
    showBomCondutor: false,
    showDesafioProgress: true,
    showBadgesConquered: false
  }

  showListViagens = () => {
    let showViagens = this.state.showViagens;

    this.setState({
      showViagens: !showViagens,
    })
  }

  showListLocais = () => {
    let showLocais = this.state.showLocais;

    this.setState({
      showLocais: !showLocais,
    })
  }

  showListBomCondutor = () => {
    let showBomCondutor = this.state.showBomCondutor;

    this.setState({
      showBomCondutor: !showBomCondutor,
    })
  }

  render() {

    let showDesafioProgress = this.state.showDesafioProgress;

    let { tabDisplayVisible } = this.props;
    let titleOne = "desafios";
    let titleTwo = "ranking";

    // IMAGES
    this.BadgesViagens = BadgesViagens(imgsViagens);
    this.BadgesLocais = BadgesViagens(imgsLocais);
    this.BadgesBomCondutor = BadgesViagens(imgsBomCondutor);

    const dataViagens = this.BadgesViagens;
    const dataLocais = this.BadgesLocais;
    const dataBomCondutor = this.BadgesBomCondutor;


    return (
      <Router>
      <React.Fragment>

        <Tabs textOne={titleOne} textTwo={titleTwo} tabDisplay={tabDisplayVisible}></Tabs>


        <div id="desafios" className="desafios-color">
          <div className="container">
            <div className="column">
              {/* Viagens */}
              <div id="viagem">
                {this.state.showViagens ?

                  <h5 className="viagens-color mt-3 font-weight-bold" onClick={this.showListViagens}>Viagens</h5>
                  :
                  <div id="viagens-badges" className="row align-items-center rounded viagens-desafios pt-3 pb-3 pl-4" onClick={this.showListViagens}>
                    <div className="col-4 font-weight-bold"><h5>Viagens</h5></div>
                    <div id="badges" className="col-8 p-0 align-items-center">

                      <ScrollMenu
                        data={dataViagens}
                      />

                    </div>

                  </div>

                }
              </div>
              {this.state.showViagens ? <ListaDesafios showDesafioProgress={showDesafioProgress} /> : null}

              {/* Locais */}
              <div id="locais">
                {this.state.showLocais ?

                  <h5 className="locais-color mt-3 font-weight-bold" onClick={this.showListLocais}>Locais</h5>
                  :
                  <div id="locais-badges" className="row align-items-center rounded locais-desafios pt-3 pb-3 pl-4 mt-3 mb-2" onClick={this.showListLocais}>
                    <div className="col-4 font-weight-bold"><h5>Locais</h5></div>
                    <div id="badges" className="col-8 p-0 align-items-center">

                      <ScrollMenu
                        data={dataLocais}
                      />

                    </div>
                  </div>

                }
              </div>
              {this.state.showLocais ? <ListaDesafios showDesafioProgress={showDesafioProgress} /> : null}

              {/* Bom Condutor */}
              <div id="bom-condutor">
                {this.state.showBomCondutor ?

                  <h5 className="bomCondutor-color mt-3 font-weight-bold" onClick={this.showListBomCondutor}>Bom Condutor</h5>
                  :
                  <div id="bom-condutor-badges" className="row align-items-center rounded bomCondutor-desafios pt-3 pb-3 pl-4" onClick={this.showListBomCondutor}>
                    <div className="col-4 mt-3 font-weight-bold"><h5>Bom Condutor</h5></div>
                    <div id="badges" className="col-8 p-0 align-items-center">

                      <ScrollMenu
                        data={dataBomCondutor}
                      />

                    </div>
                  </div>

                }
              </div>
              {this.state.showBomCondutor ? <ListaDesafios showDesafioProgress={showDesafioProgress} /> : null}

            </div>

          </div>
        </div>

      </React.Fragment>
      </Router>
    )
  }
}

// const tabActiveTwo = {
//   color: '#9A9B9C'
// }

// const tabActiveOne = {
//   color: '#1220DC'
// }

// // Dynamic Colors

// const ViagemColor = {
//   color: '#f6c14c'
// }

// const ViagemProgress = {
//   backgroundColor: '#f6c14c'
// }

// const LocaisColor = {
//   color: '#2734df'
// }

// const LocaisProgress = {
//   backgroundColor: '#2734df'
// }

// const BomCondutorColor = {
//   color: '#236a36'
// }

// const BomCondutorProgress = {
//   backgroundColor: '#236a36'
// }

export default Desafios
