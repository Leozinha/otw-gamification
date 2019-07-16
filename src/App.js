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

  componentDidMount(){
    var that = this;
    var config = {
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ3OWMxNjA1YzM5ZmZjYmY4OTdlNzg4OWVkZTZiMmVlNWZhMzA2YTBhYzcwYjE3NDdkMzRhMzllNDQyYzliMzEzOTU0NWFhZmVlOTc1MWIxIn0.eyJhdWQiOiIxIiwianRpIjoiNDc5YzE2MDVjMzlmZmNiZjg5N2U3ODg5ZWRlNmIyZWU1ZmEzMDZhMGFjNzBiMTc0N2QzNGEzOWU0NDJjOWIzMTM5NTQ1YWFmZWU5NzUxYjEiLCJpYXQiOjE1NjI5NDEzNjYsIm5iZiI6MTU2Mjk0MTM2NiwiZXhwIjoxNTk0NTYzNzY2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PB0NjzePS7wnYkgE193oV_BH0mgB0PXU8hNJOQppfVZaqVcfte4Gizw5Yu0gga2v0DM6KMCX2uY7Ma2l0P-FyZsDgYCInCm7YvVx5zpqy7eSdIDCWhkzo0jiQ0xgohyOmiShoAgVUvTK69C-L3wJwq3K4LU_hyhUJ8GikppUXvubcaAoiCXtCv3TDW9d7tdkAuEyXMlq5VEG5M83iviret7-qve2UJp_hlfK1Wspqz0wsKpwXE_RIvmVUMryeqjHYGDDOAtwq7iBkhWiZ-d3_ZCAzasDN7hmriRnusk0PxfuOMjTkHAes5xsBnQ1N1xVNFO8nE9RXCzRdX9Xa9WxX2bwMfJ999SMHK-9EAYJSvQokjLSq-Fdquzu68qyIY-vb5yJcrMvEwl_7lCIsQY6_X6N9MOBDd7bjCXndkXMgIuqbvntu4WJtIH4X4VAu6tHAWNGgdNqLFfktQHFvHV45PuVGyD8-Spw9lKTbj7XfnR_nnvcWFG30N_IMsX7j6nvcKfpVGx__4w0gEjYJEc8ppv1boa43jlW6E4baTpcbK8KD3BuACadQtJQTTGlzMArx7z8eqM_FKNYAalOx-Hu5NkzZX_hpBkDDoZymPb2YjCoZj9frorFrcaKew6zWD0KNvSvuV5LolfbPdVj2AxtlnMGnEmiL-CNnNUP0eFzD0o"}
    };

    axios.all([axios.get('http://localhost:8000/api/user', config), axios.get('http://localhost:8000/api/user/leaderboardPoints', config)])
    .then(axios.spread(function (res, leaderboard) {

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

  }

  notActiveHeader = (e) => {
    this.Header.current.notActive();
  }

  notActiveFooter = (e) => {
    this.Footer.current.notActive();
  }

  titleViagem = (e) => {
    this.setState({
      title: "Criar Viagem"
    })
  }

  render() {
    let { title, showDesafioAtivos, showTabsGam, showTabsAtividade, userData } = this.state;
    // console.log('HERE',userData);
    let teste = [].concat(userData.badges)
                  .sort((a, b) => a.updated_at < b.updated_at)
                  .map((item, i) => item);
    // let ultimoDesafio = teste[0].badge;
    // console.log('ultimodesafio', ultimoDesafio);
    // console.log('TESTE',teste[0]);
    // const userData = this.state.userData;
    const userLeaderboard = this.state.userLeaderboard && this.state.userLeaderboard.user ? this.state.userLeaderboard.user : 'nao esta no leaderboard';
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
                      showDesafioAtivos={showDesafioAtivos}
                      dataFromParent = {this.state.badges}
                      
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="container p-0">
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
                </div> */}

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
