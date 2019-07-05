import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const borderTop = {
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
};

export class Ranking extends Component {
render() {
    return (
      <Router>
      <React.Fragment>

      <div id="ranking" className="desafios-color">
        <div className="container p-0">
          <div className="column">
           
           <div style={borderTop} className="d-flex row align-items-center justify-content-around blue-d-background mt-3 mr-3 ml-3">
              <div id="badges" style={{ width: '65px', height: '65px' }} className="white-back-2 rounded-circle shadow d-flex flex-column padding-circle align-items-center justify-content-center blue-d font-weight-bold">
                <label className="subtitle-2 font-weight-normal mb-0">badges</label>
                <h6 id="num-badges" className="mb-0 font-weight-bold">3</h6>
              </div>
              <div id="lugar-rank" className="d-flex align-items-end white-l-2">
                  <h3 id="num-rank" className="m-0">3º</h3>
                  <h5 className="m-0 pb-2" style={{opacity:0.75, letterSpacing:'0.25px'}}>lugar</h5>
              </div>
              <div id="nivel" style={{ width: '65px', height: '65px' }} className="white-back-2 rounded-circle shadow d-flex flex-column padding-circle align-items-center justify-content-center blue-d font-weight-bold">
                <label className="subtitle-2 font-weight-normal mb-0">nível</label>
                <h6 id="num-nivel" className="mb-0 font-weight-bold">3</h6>
              </div>
           </div>

           <div id="lista-rank" style={{border:'1px solid #D1D1D1'}} className="d-flex row align-items-center justify-content-start white-back ml-3 mr-3">
              <div id="badges" style={{ width: '55px', height: '55px', border: '6px solid #FCFDFD' }} className="blue-d-background rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center white-l-2 font-weight-bold">
                <h6 id="num-lugar" className="mb-0 font-weight-bold">3</h6>
              </div>
           </div>

          </div>
        </div>
      </div>

    </React.Fragment>
    </Router>
    )
  }
}

export default Ranking

