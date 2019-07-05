//TODO Active selectors 

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Pages
import Header from './Header';
import CriarViagem from './components/pages/CriarViagem';
import Footer from './components/layouts/Footer';
import Atividade from './components/pages/Atividade';
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
import Tabs from './components/functions/Tabs';

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
    showGam: false,
    showDesafioAtivos: false,
    showTabsGam: false,
    showTabsAtividade:false
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

    titleOne = "pedidos";
    titleTwo = "viagens";

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
    let { title, showGam, showDesafioAtivos, showTabsGam, showTabsAtividade } = this.state;

    console.log(elementID);

    const home = (
      showGam ?
        // Home
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="p-2"><h5>Pedir</h5></div>
          <div onClick={this.titleViagem} className="p-2"><h5><Link to="/viagem">Criar</Link></h5></div>
        </div>
        :
        // Home Gam
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between mt-3 mb-3">
              <div className="col">
                <h4 className="gray-d mb-0">Bem vindo,</h4>
                <h4 id="user" className="blue-md-2 font-weight-bold">Zé Pedro</h4></div>
              <div className="col-4">
                <div style={{ width: '75px' }} className="white-back rounded-circle shadow d-flex flex-column padding-circle align-items-center justify-content-center blue-md font-weight-bold">
                  <label className="subtitle-1 mb-0">nível</label>
                  <h5 id="num-nivel" className="mb-0 font-weight-bold">3</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-0">
            <div className="gradient-blue rounded-background" style={{ height: '431px' }}>

              <div className="d-flex flex-column align-items-center justify-content-center">
                <Radial />
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
                      <h5 id="lugar-ranking" className="m-1 font-weight-bold blue-d">29º</h5>
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

                      <PreviewDesafios />

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

            <Tabs textOne={titleOne} textTwo={titleTwo} tabDisplay={tabDisplayVisible}/>
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

            <Route path="/viagem" component={CriarViagem} />
  
            <Route path="/atividade" component={() => <Atividade />} />
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
