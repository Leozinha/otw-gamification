import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import Trophy from './imgs/layout/trophy.png'
// import User from './imgs/layout/user.png'

import Header from './components/layouts/Header';
import CriarViagem from './components/pages/CriarViagem';
import Footer from './components/layouts/Footer';
import Atividade from './components/pages/Atividade';
import Desafios from './components/pages/Desafios';
import Message from './components/pages/Message';
// icons
//import Trophy from './imgs/layout/trophy.png'

class App extends Component {

  state = {
    title: "",
    entregas: 0
  }

  notActive = () => {
    console.log("click-main-page")
  }

  titleViagem = (e) => {
    this.setState({
      title: "Criar Viagem"
    })
  }

  render() {
    let { title, entregas, Trophy } = this.state;
  
    // Home
    const home = (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="p-2"><h5>Pedir</h5></div>
        <div onClick={this.titleViagem} className="p-2"><h5><Link to="/viagem">Criar</Link></h5></div>
      </div>
    );
    // Home Gamificada
    if (entregas !== 0) {
      return (
        <div>
          <h1>Home Gamificada</h1>
        </div>
      );
    }

    return (
      <Router>
        <React.Fragment >
          {/* <div onClick={this.notActive}> */}
          <Header notActive={this.notActive} Trophy={Trophy} title={title} tabDisplay={tabDisplay} />
          <Route exact path="/" render={props => (
            <React.Fragment>
              {home}
            </React.Fragment>
          )}/>
            <Route path="/viagem" component={CriarViagem}/>
            <Route path="/message" component={Message}/>

            <Route path="/atividade" component={() => <Atividade tabDisplayVisible={tabDisplayVisible} />}/>
            <Route path="/desafios" component={() => <Desafios tabDisplayVisible={tabDisplayVisible} />}/>

            <Footer tabDisplay={tabDisplay} />    
            {/* </div> */}
        </React.Fragment>
      </Router>
    );
  }
}

const tabDisplay = {
  visibility:'hidden',
  display:'none'
}

const tabDisplayVisible = {
  visibility:'visible'
}

export default App;
