//TODO colocar os badges de acordo com o state deles

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

    const showBadgesConquered = false; //score que vem do array
    
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

  componentDidMount(){
    
    var config = {
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRkMzIyYTY3YTZmMGNmMjE0MGY3NmRkNzRjYTNjY2EyNDI5NDY3MDBiYTRjMTFkNWNkNmM3NDU0ZjdkMTg1ZDc3Nzk2NmIyMGM1MDQzN2EwIn0.eyJhdWQiOiIxIiwianRpIjoiNGQzMjJhNjdhNmYwY2YyMTQwZjc2ZGQ3NGNhM2NjYTI0Mjk0NjcwMGJhNGMxMWQ1Y2Q2Yzc0NTRmN2QxODVkNzc3OTY2YjIwYzUwNDM3YTAiLCJpYXQiOjE1NjIyNzY0MDAsIm5iZiI6MTU2MjI3NjQwMCwiZXhwIjoxNTkzODk4ODAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lO4htPabPKP_jbhfEObBqvhgWpRm7RJVLMnRiI25VGPRT3T7-kOjV8BTnNNhBwjUe_sX-k3lrdRnnwSifxlTDWUy69BUBuTJ4iZMsrC4dpII8y5cUYF08HpmNoxppx2swph4xVxUkvapWpIXsxNUzchA8sl12hA0IdnpZ4ehfR_Ix08V9OM-OHO_E6Ut6QC73jv5rXIoHu074m-RuJfy0pAkTt35d0tAf0nmeZNtGwYyQl1eGzpOMc5y3GmlxMTIXH99_TbxMH3zfWxg7vpJshUIcvmVKUkOBZV6OK2m-fnTmbfAjx-WsRdOnQC8mltAn5gDmnUhLbdwoPFtZ4hWPXhy8w4tRvd_Z1gLRPWxNMjM8DaSKJCUYvKxgY7I-_Lvavanks9fmQ-V6JrW8owbrma3iiC9pclWhYyjwx0rE8kpMGcDcp-g0_Ve01_XqAls5O5itjpdFpV1N4MHxhiktM55IY_qM2JTTJlzzmhxeiPkAFtiS_6UGqkFAgRkh6EmeUipqBRCm0MTprsAb9JGNSTJG9_tcmKTzLMSImmyC6vVFPn1S9k-xTqeNp4K9G_9RuvHXrCR9vk9whSJpv6YBXPI8V1U9VGiNk7q1ShbWW3q8NczsdqwluA8q4VPp_j33HSYk3lu111uOvf39GiWrtFSnUQT5gAdieu7dDZIrco"}
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
    showDesafioProgress: false,
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
              {this.state.showLocais ? <DesafiosLista dataFromParentDesafios = {userData} showLocais={this.state.showLocais} showDesafioProgress={showDesafioProgress} /> : null}

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
              {this.state.showBomCondutor ? <DesafiosLista dataFromParentDesafios = {userData} showBomCondutor={this.state.showBomCondutor} showDesafioProgress={showDesafioProgress} /> : null}

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
