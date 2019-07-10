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
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlNzZmN2M4NDBmNzIwZWEzNjQzMGRiZjAyOTMyNTc3ZjA0ZWFmYjRmYTE1N2M0OWFiYTI2YTlmOWYzOGJjNDQwNjhiM2RhZDhlZmRiMmJhIn0.eyJhdWQiOiIyIiwianRpIjoiYWU3NmY3Yzg0MGY3MjBlYTM2NDMwZGJmMDI5MzI1NzdmMDRlYWZiNGZhMTU3YzQ5YWJhMjZhOWY5ZjM4YmM0NDA2OGIzZGFkOGVmZGIyYmEiLCJpYXQiOjE1NjI2ODMwNDgsIm5iZiI6MTU2MjY4MzA0OCwiZXhwIjoxNTk0MzA1NDQ4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BlXsfXqiz6gn8RPzOK6g9Cey9jplRtQ3BEIGDvxg3AOGmk8kVTWY9w9Q3ghqhoNhcGJm0hIYr5JMpDFXiSvZl_cz_4KFK8rsBH_7xnZprwEdz61a5PusGK45EO4jA0v_DOpamDaLnJC1RN84NEriBXlBNfeytGsZKZVQIHBSH9Zu8pKeJhRQcuYTHZsiWaVhZq6QvcalgE1-aH5-RrxAiPXkm0FEPphYiQe5DA-F7stXcB18oJop1G76btSiW9Q9MlowBNVja1ILO6VvXuPNr5_s1-1OTjgMn0EDIPyw45qAIrIYolIBYrRywnWrrK7OCCKUolwp4dcWJDQoS0hcFwvydGu-wBM3Xm5XRd8bQf99SRWG8z3-e_WZbhdMEgDLL6vls05xg_NL2h_-xt8AxIHHClc1Y8doRJHs8VcWPRc85r3k7vFu4WpwQX_iyVLetX0shA3OIU534hKhp3Ea4R0Cdchnt2fmr8tkj2NEsU0GZW6UYyLjl38EWm-9SedEYP5pREuzmmST90cm2-kBnrJgSLRyc_GIyrF14pIqk8Te1duNvYtrmukegM7l0zGoMNamggmP2LBiP86bJWoTcfGDL70t1DabRZWLqg1m7FnTiMbp5FWgU5Cqr7-hBHVpFbdf40RsXsi5-8JnjDxuArC4IHfcj7kC_lsYcmsZnQU"}
    };

    axios.get('http://localhost:8000/api/user', config)
    // .then(res => this.setState({userData: res.data}))
    .then(res => {
      const lista = res.data.viagems.map(viagem => {
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
          // produtos: viagem.produtos
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
