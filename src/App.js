import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/layouts/Header';
import CriarViagem from './components/pages/CriarViagem';
// import { Provider } from 'react-redux';

// import store from './store';

class App extends Component {

  state = {
    title: "",
    entregas: 0
  }

  titleViagem = (e) => {
    this.setState({
      title: "Criar Viagem"
    })
  }

  render() {
    let { title, entregas } = this.state;
    // title = "Pagina Principal";
  
    const home = (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="p-2"><h5>Pedir</h5></div>
        <div onClick={this.titleViagem} className="p-2"><h5><Link to="/viagem">Criar</Link></h5></div>
      </div>
    );

    if (entregas !== 0) {
      return (
        <div>
          <h1>Home Gamificada</h1>
        </div>
      );
    }

    return (
      <Router>
        <div className="container">
          <Header title={title} />
          <Route exact path="/" render={props => (
            <React.Fragment>
              {home}
            </React.Fragment>
          )}/>
            <Route path="/viagem" component={CriarViagem}/>    
        </div>
      </Router>
    );
  }
}

export default App;
