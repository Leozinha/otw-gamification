import React, { Component } from 'react'
import ViagensLista from './ViagensLista';
import axios from 'axios';
// import { connect } from "react-redux";

class Viagens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData:[]
    }
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
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRkMzIyYTY3YTZmMGNmMjE0MGY3NmRkNzRjYTNjY2EyNDI5NDY3MDBiYTRjMTFkNWNkNmM3NDU0ZjdkMTg1ZDc3Nzk2NmIyMGM1MDQzN2EwIn0.eyJhdWQiOiIxIiwianRpIjoiNGQzMjJhNjdhNmYwY2YyMTQwZjc2ZGQ3NGNhM2NjYTI0Mjk0NjcwMGJhNGMxMWQ1Y2Q2Yzc0NTRmN2QxODVkNzc3OTY2YjIwYzUwNDM3YTAiLCJpYXQiOjE1NjIyNzY0MDAsIm5iZiI6MTU2MjI3NjQwMCwiZXhwIjoxNTkzODk4ODAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lO4htPabPKP_jbhfEObBqvhgWpRm7RJVLMnRiI25VGPRT3T7-kOjV8BTnNNhBwjUe_sX-k3lrdRnnwSifxlTDWUy69BUBuTJ4iZMsrC4dpII8y5cUYF08HpmNoxppx2swph4xVxUkvapWpIXsxNUzchA8sl12hA0IdnpZ4ehfR_Ix08V9OM-OHO_E6Ut6QC73jv5rXIoHu074m-RuJfy0pAkTt35d0tAf0nmeZNtGwYyQl1eGzpOMc5y3GmlxMTIXH99_TbxMH3zfWxg7vpJshUIcvmVKUkOBZV6OK2m-fnTmbfAjx-WsRdOnQC8mltAn5gDmnUhLbdwoPFtZ4hWPXhy8w4tRvd_Z1gLRPWxNMjM8DaSKJCUYvKxgY7I-_Lvavanks9fmQ-V6JrW8owbrma3iiC9pclWhYyjwx0rE8kpMGcDcp-g0_Ve01_XqAls5O5itjpdFpV1N4MHxhiktM55IY_qM2JTTJlzzmhxeiPkAFtiS_6UGqkFAgRkh6EmeUipqBRCm0MTprsAb9JGNSTJG9_tcmKTzLMSImmyC6vVFPn1S9k-xTqeNp4K9G_9RuvHXrCR9vk9whSJpv6YBXPI8V1U9VGiNk7q1ShbWW3q8NczsdqwluA8q4VPp_j33HSYk3lu111uOvf39GiWrtFSnUQT5gAdieu7dDZIrco"}
    };

    axios.get('http://localhost:8000/api/user', config)
    // .then(res => this.setState({userData: res.data}))
    .then(res => {
      const lista = res.data.viagemsProdutos.map(viagem => {
        return {
          id: viagem.id,
          origem: viagem.origem,
          destino: viagem.destino,
          data: viagem.data,
          horaInicio: viagem.horaInicio,
          horaFim: viagem.horaFim,
          preco: viagem.preco,
          user_id: viagem.user_id,
          tipo_id: viagem.tipo_id,
          estado_id: viagem.estado_id,
          produtos: viagem.produtos
        };
      });
      const newState = Object.assign({}, this.state, {
        userData: lista,
      });

      this.setState(newState);
    })
  }

  render() {

    // const userData = this.state.userData && this.state.userData.viagems ? this.state.userData.viagems: [];
    // console.log('VIAGENS', this.state.userData);
    const userData = this.state.userData;

    return (
      <React.Fragment>
      <div id="atividade">
        <div className="container">
          <div className="column">
                <ViagensLista dataFromParent = {userData} />
          </div>
          
        </div>
      </div>
      </React.Fragment>
    )
    
  }
}

//TODO propTypes

// const AtividadeExp = connect(null, null)(Atividade);
export default Viagens
