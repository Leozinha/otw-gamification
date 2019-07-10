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
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlNzZmN2M4NDBmNzIwZWEzNjQzMGRiZjAyOTMyNTc3ZjA0ZWFmYjRmYTE1N2M0OWFiYTI2YTlmOWYzOGJjNDQwNjhiM2RhZDhlZmRiMmJhIn0.eyJhdWQiOiIyIiwianRpIjoiYWU3NmY3Yzg0MGY3MjBlYTM2NDMwZGJmMDI5MzI1NzdmMDRlYWZiNGZhMTU3YzQ5YWJhMjZhOWY5ZjM4YmM0NDA2OGIzZGFkOGVmZGIyYmEiLCJpYXQiOjE1NjI2ODMwNDgsIm5iZiI6MTU2MjY4MzA0OCwiZXhwIjoxNTk0MzA1NDQ4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BlXsfXqiz6gn8RPzOK6g9Cey9jplRtQ3BEIGDvxg3AOGmk8kVTWY9w9Q3ghqhoNhcGJm0hIYr5JMpDFXiSvZl_cz_4KFK8rsBH_7xnZprwEdz61a5PusGK45EO4jA0v_DOpamDaLnJC1RN84NEriBXlBNfeytGsZKZVQIHBSH9Zu8pKeJhRQcuYTHZsiWaVhZq6QvcalgE1-aH5-RrxAiPXkm0FEPphYiQe5DA-F7stXcB18oJop1G76btSiW9Q9MlowBNVja1ILO6VvXuPNr5_s1-1OTjgMn0EDIPyw45qAIrIYolIBYrRywnWrrK7OCCKUolwp4dcWJDQoS0hcFwvydGu-wBM3Xm5XRd8bQf99SRWG8z3-e_WZbhdMEgDLL6vls05xg_NL2h_-xt8AxIHHClc1Y8doRJHs8VcWPRc85r3k7vFu4WpwQX_iyVLetX0shA3OIU534hKhp3Ea4R0Cdchnt2fmr8tkj2NEsU0GZW6UYyLjl38EWm-9SedEYP5pREuzmmST90cm2-kBnrJgSLRyc_GIyrF14pIqk8Te1duNvYtrmukegM7l0zGoMNamggmP2LBiP86bJWoTcfGDL70t1DabRZWLqg1m7FnTiMbp5FWgU5Cqr7-hBHVpFbdf40RsXsi5-8JnjDxuArC4IHfcj7kC_lsYcmsZnQU"}
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
