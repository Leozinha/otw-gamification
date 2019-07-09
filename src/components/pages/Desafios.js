import React, { Component } from 'react'
import DesafiosLista from './DesafiosLista';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

// import { connect } from "react-redux";

//badges categorias
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
//badges categorias

class Desafios extends Component {

  constructor(props) {
    super(props);
    
    
  }

  // componentWillMount(){
  //   fetch('http://localhost:8000/api/user',{
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzMTJhMzY1MGE3MTI4ZWYwOGZmM2E2NTBiZDVkZjZlNWQyYjhlNzM4ZTFhMWY4YWUyYjk3YmY1OTRhNjIwNjM3MzcxMmFlMjRkZDdmOTQ1In0.eyJhdWQiOiIxIiwianRpIjoiNDMxMmEzNjUwYTcxMjhlZjA4ZmYzYTY1MGJkNWRmNmU1ZDJiOGU3MzhlMWExZjhhZTJiOTdiZjU5NGE2MjA2MzczNzEyYWUyNGRkN2Y5NDUiLCJpYXQiOjE1NjIzNDE1MzMsIm5iZiI6MTU2MjM0MTUzMywiZXhwIjoxNTkzOTYzOTMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m0XnC8tvh_nZIvn-GnVM0p1FwsRATMUWHokpWpjJ7GMRxMZnqjtGgkE-Gl_BcmK0qTIdomtsPPfzok46B3bxPYBLx6WP5QN5YB18AYWsj3jLmn9vUQnL4tFZ7D6tugLkONtFrNBuwntMtXbZt9t8ykWfpZ8g0JVI8A8wlsExRw4Ay0gVfD_QdjmIQfIybLV6mgKkhxsHNqOcPMJid54ZsWcwTB-2jjcRd_MLp6lAnPfQ94sWD0yrM9Gxds27AoEOUsbWd3Nl_m9Z-0Epy9Hy6oLwp6KZi29kxhHpTiBwneLQnD2v2luhrIVb1WtIltsadpgx_diOBIOXnsSdhlN52SSfVDmYdqHcG58S2lwssaA7mWmuD6t6Hd6Rfyn7C5ong6fln3Lx1cU6qSrZMf-QNRsgY4nHmpyGicdyrJVSE3FGBynmuNHmFi2gmUqMLIVVX0KTolQNePvXN2tcz3N5o2eXSTNV3ClgLymDKsOtxB2e-eiYJpdvOiiCHmPg9-ZznjXYDDg5VhNeNfBzEAWdROvx2-KXDQ6T9Up0G2jU4ltApvinVdvZQxdN7dkGwHMgYraWDU2n5MXFP4hOdfMGwg5RMT4Hhw_MDHLdQsirJQea02nvlknCduUFYhlABnVZR4doDwh_F30jdUoi-p4_pMy_TV3zdDqEG1V2BNYDwUk'
  //       },
  //       // body: JSON.stringify(post),
  //     }).then(res => res.json(), )
  //       .then(data => this.setState({userData: data}));
  // }

  componentDidMount(){
    
    var config = {
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzMTJhMzY1MGE3MTI4ZWYwOGZmM2E2NTBiZDVkZjZlNWQyYjhlNzM4ZTFhMWY4YWUyYjk3YmY1OTRhNjIwNjM3MzcxMmFlMjRkZDdmOTQ1In0.eyJhdWQiOiIxIiwianRpIjoiNDMxMmEzNjUwYTcxMjhlZjA4ZmYzYTY1MGJkNWRmNmU1ZDJiOGU3MzhlMWExZjhhZTJiOTdiZjU5NGE2MjA2MzczNzEyYWUyNGRkN2Y5NDUiLCJpYXQiOjE1NjIzNDE1MzMsIm5iZiI6MTU2MjM0MTUzMywiZXhwIjoxNTkzOTYzOTMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m0XnC8tvh_nZIvn-GnVM0p1FwsRATMUWHokpWpjJ7GMRxMZnqjtGgkE-Gl_BcmK0qTIdomtsPPfzok46B3bxPYBLx6WP5QN5YB18AYWsj3jLmn9vUQnL4tFZ7D6tugLkONtFrNBuwntMtXbZt9t8ykWfpZ8g0JVI8A8wlsExRw4Ay0gVfD_QdjmIQfIybLV6mgKkhxsHNqOcPMJid54ZsWcwTB-2jjcRd_MLp6lAnPfQ94sWD0yrM9Gxds27AoEOUsbWd3Nl_m9Z-0Epy9Hy6oLwp6KZi29kxhHpTiBwneLQnD2v2luhrIVb1WtIltsadpgx_diOBIOXnsSdhlN52SSfVDmYdqHcG58S2lwssaA7mWmuD6t6Hd6Rfyn7C5ong6fln3Lx1cU6qSrZMf-QNRsgY4nHmpyGicdyrJVSE3FGBynmuNHmFi2gmUqMLIVVX0KTolQNePvXN2tcz3N5o2eXSTNV3ClgLymDKsOtxB2e-eiYJpdvOiiCHmPg9-ZznjXYDDg5VhNeNfBzEAWdROvx2-KXDQ6T9Up0G2jU4ltApvinVdvZQxdN7dkGwHMgYraWDU2n5MXFP4hOdfMGwg5RMT4Hhw_MDHLdQsirJQea02nvlknCduUFYhlABnVZR4doDwh_F30jdUoi-p4_pMy_TV3zdDqEG1V2BNYDwUk"}
    };

    axios.get('http://localhost:8000/api/user', config)
    // .then(res => this.setState({userData: res.data}))
    .then(res => {
      const lista = res.data.badges.map(badge => {
        return {
          id: badge.id,
          user_id: badge.user_id,
          badge_id: badge.badge_id,
          state: badge.state,
          score: badge.score,
          percentage: badge.percentage,
          badgeInfo: badge.badge,
        };
      });
      const newState = Object.assign({}, this.state, {
        userData: lista,
      });

      this.setState(newState);
    })
  }

  state = {
    showViagens: false,
    showLocais: false,
    showBomCondutor: false,
    showDesafioProgress: true,
    showBadgesConquered: false,
    userData: []
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

    //badges categorias
    this.BadgesViagens = BadgesViagens(imgsViagens);
    this.BadgesLocais = BadgesViagens(imgsLocais);
    this.BadgesBomCondutor = BadgesViagens(imgsBomCondutor);

    const dataViagens = this.BadgesViagens;
    const dataLocais = this.BadgesLocais;
    const dataBomCondutor = this.BadgesBomCondutor;

    console.log('DESAFIOS', this.state);
    const userData = this.state.userData;

    return (
      <Router>
      <React.Fragment>

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
              {this.state.showViagens ? <DesafiosLista dataFromParentDesafios = {userData} showViagens={this.state.showViagens} showDesafioProgress={showDesafioProgress} /> : null}

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
              {this.state.showLocais ? <DesafiosLista showLocais={this.state.showLocais} showDesafioProgress={showDesafioProgress} /> : null}

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
              {this.state.showBomCondutor ? <DesafiosLista showBomCondutor={this.state.showBomCondutor} showDesafioProgress={showDesafioProgress} /> : null}

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

// const DesafiosExp = connect(null, null)(Desafios);
export default Desafios
