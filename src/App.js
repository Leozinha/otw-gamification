import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/layouts/Header';
import CriarViagem from './components/pages/CriarViagem';
import Footer from './components/layouts/Footer';
import Atividade from './components/pages/Atividade';
// icons
//import Trophy from './imgs/layout/trophy.png'

class App extends Component {

  state = {
    title: "",
    entregas: 0,
    TrophyClick: 0
  }

  titleViagem = (e) => {
    this.setState({
      title: "Criar Viagem"
    })
  }

  render() {
    let { title, entregas, TrophyClick } = this.state;
 
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
        <React.Fragment>
          <Header title={title} TrophyClick={TrophyClick} tabDisplay={tabDisplay} />
          <Route exact path="/" render={props => (
            <React.Fragment>
              {home}
            </React.Fragment>
          )}/>
            <Route path="/viagem" component={CriarViagem}/>
            <Route path="/atividade" component={() => <Atividade tabDisplayVisible={tabDisplayVisible} />}/>

            <Footer tabDisplay={tabDisplay} />    
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
