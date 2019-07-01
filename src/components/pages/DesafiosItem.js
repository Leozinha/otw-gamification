import React, { Component } from 'react'
// import ProgressDesafios from '../svgComp/ProgressDesafios';

import { connect } from "react-redux";

class DesafiosItem extends Component {
  render() {

    const { showDesafioProgress } = this.props;

    return (
      <React.Fragment>
        <div id="desafio" className="">
          <div id="background" className="white rounded shadow p-2 mt-3 mb-3">
            <div className="container">
              {/* {userInfo.viagems.map((el, index) => ( */}
              {/* // <Link className="link-no-decoration" to={{pathname: '/atividade2/'+el.id, state: { produto: el.produto }}}> */}
              {showDesafioProgress ?
              <div className="row align-items-center">

                <div className="col-3 pl-1 previewComponent-md">
                  <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

              

                <div className="col-7 d-flex flex-column justify-content-center align-items-center">

                  <span id="desafio" className="subtitle-2 font-weight-bold text-desafio">Entrega 12 encomendas num mes</span>

                    <div class="progress w-100 mt-2">
                      <div class="progress-bar" role="progressbar" style={Width} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>


                  <span id="XP" className="align-self-end subtitle-2 font-weight-bold body-2">25XP</span>

                </div>

                <div className="col-2 pt-1 pb-1 d-flex flex-column justify-content-between align-items-end font-weight-bold body-1">

                  <span /*className="subtitle-2"*/>1</span>/12
    
              </div>
              
              </div>
              :
              <div className="row align-items-center">

              <div className="col-3 pl-1">
                  <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

              <div className="col-7 d-flex flex-column justify-content-center align-items-center">

                  <span className="text-uppercase subtitle-2 align-self-start text-uppercase">entrega</span>
                  <span id="desafio" className="subtitle-1 pt-1 text-desafio">Entrega 12 encomendas num mes</span>

                   
                  {/* <span id="XP" className="subtitle-2">25XP</span> */}

                </div>

                <div className="col-2 d-flex flex-column justify-content-between align-items-end subtitle-2 font-weight-bold body-1">

                25XP
    
              </div>
              </div>

}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Width = {
  width: '25%'
}

const DesafiosItemExp = connect(null, null)(DesafiosItem);
export default DesafiosItemExp
