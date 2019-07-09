//TODO Active selectors 

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Pages
import Header from './components/layouts/Header';
import CriarViagem from './components/pages/CriarViagem';
import Footer from './components/layouts/Footer';
import Viagens from './components/pages/Viagens';
import Pedidos from './components/pages/Pedidos';
import Desafios from './components/pages/Desafios';

// Import module and default styles
import "react-circular-progressbar/dist/styles.css";
import Radial from './components/pages/Radial';

// Images
import RankingIcon from './imgs/layout/ranking.png';
import DesafiosAtivosIcon from './imgs/layout/desafios-activos.png';
import PreviewDesafiosAtivos from './components/pages/PreviewDesafiosAtivos';
import PreviewDesafios from './components/pages/PreviewDesafios';
import Ranking from './components/pages/Ranking';
import Tabs from './components/layouts/Tabs';

import axios from 'axios';

//example
const elementID = [
  { id: 1},
  { id: 2 },
  { id: 3}
]

//Title Tabs
let titleOne = "";
let titleTwo = "";

class App extends Component {

  constructor(props) {
    super(props);

    this.Header = React.createRef();
    this.Footer = React.createRef();
  }

  state = {
    title: "",
    showDesafioAtivos: false,
    showTabsGam: false,
    showTabsAtividade:false,
    userData:[],
    badges: [],
    userLeaderboard: []
  }

// componentDidMount(){
//   console.log('THIS', this);  
//   fetch('http://localhost:8000/api/user',{
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzMTJhMzY1MGE3MTI4ZWYwOGZmM2E2NTBiZDVkZjZlNWQyYjhlNzM4ZTFhMWY4YWUyYjk3YmY1OTRhNjIwNjM3MzcxMmFlMjRkZDdmOTQ1In0.eyJhdWQiOiIxIiwianRpIjoiNDMxMmEzNjUwYTcxMjhlZjA4ZmYzYTY1MGJkNWRmNmU1ZDJiOGU3MzhlMWExZjhhZTJiOTdiZjU5NGE2MjA2MzczNzEyYWUyNGRkN2Y5NDUiLCJpYXQiOjE1NjIzNDE1MzMsIm5iZiI6MTU2MjM0MTUzMywiZXhwIjoxNTkzOTYzOTMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m0XnC8tvh_nZIvn-GnVM0p1FwsRATMUWHokpWpjJ7GMRxMZnqjtGgkE-Gl_BcmK0qTIdomtsPPfzok46B3bxPYBLx6WP5QN5YB18AYWsj3jLmn9vUQnL4tFZ7D6tugLkONtFrNBuwntMtXbZt9t8ykWfpZ8g0JVI8A8wlsExRw4Ay0gVfD_QdjmIQfIybLV6mgKkhxsHNqOcPMJid54ZsWcwTB-2jjcRd_MLp6lAnPfQ94sWD0yrM9Gxds27AoEOUsbWd3Nl_m9Z-0Epy9Hy6oLwp6KZi29kxhHpTiBwneLQnD2v2luhrIVb1WtIltsadpgx_diOBIOXnsSdhlN52SSfVDmYdqHcG58S2lwssaA7mWmuD6t6Hd6Rfyn7C5ong6fln3Lx1cU6qSrZMf-QNRsgY4nHmpyGicdyrJVSE3FGBynmuNHmFi2gmUqMLIVVX0KTolQNePvXN2tcz3N5o2eXSTNV3ClgLymDKsOtxB2e-eiYJpdvOiiCHmPg9-ZznjXYDDg5VhNeNfBzEAWdROvx2-KXDQ6T9Up0G2jU4ltApvinVdvZQxdN7dkGwHMgYraWDU2n5MXFP4hOdfMGwg5RMT4Hhw_MDHLdQsirJQea02nvlknCduUFYhlABnVZR4doDwh_F30jdUoi-p4_pMy_TV3zdDqEG1V2BNYDwUk'
//         },
//         // body: JSON.stringify(post),
//       }).then(res => res.json(), )
//         .then(data => this.setState({userData: data}));

    
//     fetch('http://localhost:8000/api/user/leaderboardPoints',{
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzMTJhMzY1MGE3MTI4ZWYwOGZmM2E2NTBiZDVkZjZlNWQyYjhlNzM4ZTFhMWY4YWUyYjk3YmY1OTRhNjIwNjM3MzcxMmFlMjRkZDdmOTQ1In0.eyJhdWQiOiIxIiwianRpIjoiNDMxMmEzNjUwYTcxMjhlZjA4ZmYzYTY1MGJkNWRmNmU1ZDJiOGU3MzhlMWExZjhhZTJiOTdiZjU5NGE2MjA2MzczNzEyYWUyNGRkN2Y5NDUiLCJpYXQiOjE1NjIzNDE1MzMsIm5iZiI6MTU2MjM0MTUzMywiZXhwIjoxNTkzOTYzOTMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m0XnC8tvh_nZIvn-GnVM0p1FwsRATMUWHokpWpjJ7GMRxMZnqjtGgkE-Gl_BcmK0qTIdomtsPPfzok46B3bxPYBLx6WP5QN5YB18AYWsj3jLmn9vUQnL4tFZ7D6tugLkONtFrNBuwntMtXbZt9t8ykWfpZ8g0JVI8A8wlsExRw4Ay0gVfD_QdjmIQfIybLV6mgKkhxsHNqOcPMJid54ZsWcwTB-2jjcRd_MLp6lAnPfQ94sWD0yrM9Gxds27AoEOUsbWd3Nl_m9Z-0Epy9Hy6oLwp6KZi29kxhHpTiBwneLQnD2v2luhrIVb1WtIltsadpgx_diOBIOXnsSdhlN52SSfVDmYdqHcG58S2lwssaA7mWmuD6t6Hd6Rfyn7C5ong6fln3Lx1cU6qSrZMf-QNRsgY4nHmpyGicdyrJVSE3FGBynmuNHmFi2gmUqMLIVVX0KTolQNePvXN2tcz3N5o2eXSTNV3ClgLymDKsOtxB2e-eiYJpdvOiiCHmPg9-ZznjXYDDg5VhNeNfBzEAWdROvx2-KXDQ6T9Up0G2jU4ltApvinVdvZQxdN7dkGwHMgYraWDU2n5MXFP4hOdfMGwg5RMT4Hhw_MDHLdQsirJQea02nvlknCduUFYhlABnVZR4doDwh_F30jdUoi-p4_pMy_TV3zdDqEG1V2BNYDwUk'
//         },
//         // body: JSON.stringify(post),
//       }).then(res => res.json(), )
//         .then(data => this.setState({userLeaderboard: data}));
//   }

  componentDidMount(){
    var that = this;
    var config = {
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzMTJhMzY1MGE3MTI4ZWYwOGZmM2E2NTBiZDVkZjZlNWQyYjhlNzM4ZTFhMWY4YWUyYjk3YmY1OTRhNjIwNjM3MzcxMmFlMjRkZDdmOTQ1In0.eyJhdWQiOiIxIiwianRpIjoiNDMxMmEzNjUwYTcxMjhlZjA4ZmYzYTY1MGJkNWRmNmU1ZDJiOGU3MzhlMWExZjhhZTJiOTdiZjU5NGE2MjA2MzczNzEyYWUyNGRkN2Y5NDUiLCJpYXQiOjE1NjIzNDE1MzMsIm5iZiI6MTU2MjM0MTUzMywiZXhwIjoxNTkzOTYzOTMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m0XnC8tvh_nZIvn-GnVM0p1FwsRATMUWHokpWpjJ7GMRxMZnqjtGgkE-Gl_BcmK0qTIdomtsPPfzok46B3bxPYBLx6WP5QN5YB18AYWsj3jLmn9vUQnL4tFZ7D6tugLkONtFrNBuwntMtXbZt9t8ykWfpZ8g0JVI8A8wlsExRw4Ay0gVfD_QdjmIQfIybLV6mgKkhxsHNqOcPMJid54ZsWcwTB-2jjcRd_MLp6lAnPfQ94sWD0yrM9Gxds27AoEOUsbWd3Nl_m9Z-0Epy9Hy6oLwp6KZi29kxhHpTiBwneLQnD2v2luhrIVb1WtIltsadpgx_diOBIOXnsSdhlN52SSfVDmYdqHcG58S2lwssaA7mWmuD6t6Hd6Rfyn7C5ong6fln3Lx1cU6qSrZMf-QNRsgY4nHmpyGicdyrJVSE3FGBynmuNHmFi2gmUqMLIVVX0KTolQNePvXN2tcz3N5o2eXSTNV3ClgLymDKsOtxB2e-eiYJpdvOiiCHmPg9-ZznjXYDDg5VhNeNfBzEAWdROvx2-KXDQ6T9Up0G2jU4ltApvinVdvZQxdN7dkGwHMgYraWDU2n5MXFP4hOdfMGwg5RMT4Hhw_MDHLdQsirJQea02nvlknCduUFYhlABnVZR4doDwh_F30jdUoi-p4_pMy_TV3zdDqEG1V2BNYDwUk"}
    };

    axios.all([axios.get('http://localhost:8000/api/user', config), axios.get('http://localhost:8000/api/user/leaderboardPoints', config)])
    .then(axios.spread(function (res, leaderboard) {
    //   // Both requests are now complete
    //   console.log('THIS', this);
      that.setState({userData: res.data})
      that.setState({userLeaderboard: leaderboard.data});

      const mapBadges = res.data.badges.map(badge => {
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

      const userBadges = Object.assign({}, that.state, {
        badges: mapBadges
      })
      that.setState(userBadges);
    }));

    // .then(res => {
    //   const lista = res.data.map(user => {
    //     return {
    //       id: user.id,
    //     };
    //   });
    //   const newState = Object.assign({}, this.state, {
    //     userData: lista,
    //   });

    //   this.setState(newState);
    // })
  }

  hideTabs = () => {
  
    this.setState({
      showTabsGam: false,
      showTabsAtividade: false
    })

  }

  showTabsGam = () => {
    let showTabsGam = this.state.showTabsGam;

    this.setState({
      showTabsGam: !showTabsGam,
      showTabsAtividade: false
    })

    titleOne = "desafios";
    titleTwo = "ranking";

  }

  showTabsAtividade = () => {
    let showTabsAtividade = this.state.showTabsAtividade;

    this.setState({
      showTabsAtividade: !showTabsAtividade,
      showTabsGam: false
    })

    titleOne = "viagens";
    titleTwo = "pedidos";

    console.log('click-atividade')

  }

  notActiveHeader = (e) => {
    this.Header.current.notActive();
  }

  notActiveFooter = (e) => {
    this.Footer.current.notActive();

    console.log('notActive-app')
  }

  titleViagem = (e) => {
    this.setState({
      title: "Criar Viagem"
    })
  }

  render() {
    let { title, showDesafioAtivos, showTabsGam, showTabsAtividade, userData } = this.state;

    console.log('APP', this.state);

    
    // const userData = this.state.userData;
    const userLeaderboard = this.state.userLeaderboard && this.state.userLeaderboard.user ? this.state.userLeaderboard.user : 'nao esta no leaderboard';
    console.log('leaderboard', this.state);
    const home = (
        // Home Gam
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between mt-3 mb-3">
              <div className="col">
                <h4 className="gray-d mb-0">Bem vindo,</h4>
                <h4 id="user" className="blue-md-2 font-weight-bold">{userData.name}</h4></div>
              <div className="col-4">
                <div style={{ width: '75px' }} className="white-back rounded-circle shadow d-flex flex-column padding-circle align-items-center justify-content-center blue-md font-weight-bold">
                  <label className="subtitle-1 mb-0">nível</label>
                  <h5 id="num-nivel" className="mb-0 font-weight-bold">{userData.level}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-0">
            <div className="blue-gradient rounded-background" style={{ height: '431px' }}>

              <div className="d-flex flex-column align-items-center justify-content-center">
                <Radial dataFromParent = {userData} />
                <div className="d-flex flex-column mt-3 mb-4">
                  <label id="desafio-recente" className="subtitle-2 text-uppercase white-l mb-0">desafio atual</label>
                  <label id="desafio-recente-descricao" className="subtitle-1 font-weight-bold white-md">Entrega 12 encomendas num mes</label>
                </div>
                <div className="container pt-2">
                  <div className="d-flex row align-items-center justify-content-around white-back rounded-background shadow pt-4 pb-4">
                    <div className="d-flex flex-column align-items-center">
                      <img src={DesafiosAtivosIcon} alt="" className="icons-24" />
                      <h5 id="desafios-ativos" className="m-1 font-weight-bold blue-d">2</h5>
                      <label className="w-50 subtitle-1 text-uppercase font-weight-bold text-center gray-l">Desafios Activos</label>
                    </div>
                    <div className="d-flex flex-column align-items-center pr-4">
                      <img src={RankingIcon} alt="" className="icons-24" />
                      <h5 id="lugar-ranking" className="m-1 font-weight-bold blue-d">{userLeaderboard.position}º</h5>
                      <label className="subtitle-1 text-uppercase font-weight-bold text-center gray-l">Lugar</label>
                    </div>
                  </div>
                </div>

                <div className="container p-0">
                  <div className="gray-background rounded-background-bottom">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <PreviewDesafiosAtivos 
                      previewDesafiosAtivos={elementID}
                      showDesafioAtivos={showDesafioAtivos}
                      dataFromParent = {this.state.badges}
                      
                      />
                    </div>
                  </div>
                </div>

                <div className="container p-0">
                  <div className="white-background rounded-background-bottom">
                    <div className="d-flex flex-column align-items-center justify-content-center mb-5">

                      <div className="align-self-start pl-4 pt-3">
                        <label className="subtitle-2 text-uppercase blue-md-2">outros desafios</label>
                      </div>

                      <PreviewDesafios dataFromParent = {this.state.badges} />

                      <div className="align-self-end mr-3 mb-5">
                        <Link to="/desafios"><label className="gray-text subtitle-2 text-uppercase">ver tudo</label></Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    );

    return (
      <div id="App" className="d-flex flex-column">
        <Router>
          <React.Fragment>
            <Header hideTabs={this.hideTabs} showTabs={this.showTabsGam} ref={this.Header} title={title} click={this.notActiveFooter} />

            <Tabs tabDisplay={tabDisplay}/>

            {showTabsGam ?

            <Tabs showTabsGam={showTabsGam} textOne={titleOne} textTwo={titleTwo} tabDisplay={tabDisplayVisible}/>
            :

            <Tabs tabDisplay={tabDisplay}/>

            }

            {showTabsAtividade ?

            <Tabs showTabsAtividade={showTabsAtividade} textOne={titleOne} textTwo={titleTwo} tabDisplay={tabDisplayVisible}/>
            :

            <Tabs tabDisplay={tabDisplay}/>

            }

            <Route exact path="/" render={props => (
              <React.Fragment>
                {home}
              </React.Fragment>
            )} />

            <Route path="/criar-viagem" component={CriarViagem} />
  
            <Route path="/viagens" component={() => <Viagens />} />
            <Route path="/pedidos" component={() => <Pedidos />} />
            <Route path="/desafios" component={() => <Desafios />} />
            <Route path="/ranking" component={() => <Ranking />} />


            <Footer showTabs={this.showTabsAtividade} ref={this.Footer} click={this.notActiveHeader} />

          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const tabDisplay = {
  visibility: 'hidden',
  display: 'none'
}

const tabDisplayVisible = {
  visibility: 'visible'
}

export default App;
