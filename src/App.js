import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";

import Header from './Header';
import CriarViagem from './components/pages/CriarViagem';
import Footer from './components/layouts/Footer';
import Atividade from './components/pages/Atividade';
import Desafios from './components/pages/Desafios';
import DragBadges from './components/pages/DragBadges';
// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


class App extends Component {

  constructor(props){
    super(props);
    this.Header = React.createRef();
    this.Footer = React.createRef();
  }

  state = {
    title: "",
    entregas: 0
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
    let { title, entregas } = this.state;

  
  
    // Home
    const home = (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="p-2"><h5>Pedir</h5></div>
        <div onClick={this.titleViagem} className="p-2"><h5><Link to="/viagem">Criar</Link></h5></div>
        <div style={{ width: "100px" }}>
          <p>This should animate only when visible</p>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 90 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
          </div>
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
      <div id="App" className="d-flex flex-column">
      <Router>          
        <React.Fragment>
          <Header ref={this.Header} title={title} tabDisplay={tabDisplay} click={this.notActiveFooter} />
          <Route exact path="/" render={props => (
            <React.Fragment>
              {home}
            </React.Fragment>
          )}/>
            <Route path="/viagem" component={CriarViagem}/>
            <Route path="/message" component={DragBadges}/>

            <Route path="/atividade" component={() => <Atividade tabDisplayVisible={tabDisplayVisible} />}/>
            <Route path="/desafios" component={() => <Desafios tabDisplayVisible={tabDisplayVisible} />}/>

            <Footer ref={this.Footer} click={this.notActiveHeader} />    
            
        </React.Fragment>
      </Router>
      </div>
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
