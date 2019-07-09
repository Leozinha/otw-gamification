import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Background from '../../imgs/pages/test.jpg'
import BadgeRanking from '../../imgs/layout/ranking2.png'


const rectRank = {
  borderRadius: '12px',
  paddingLeft: '0.50rem',
  paddingRight: '0.50rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
};

const userRank = {
  backgroundImage: `url(${Background})`,
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  width: '78px',
  height:'70px',
  borderRadius: '12px',
  marginLeft: '2.8rem'
}

const listaRank = {
  borderRadius: '12px',
  paddingLeft: '0.50rem',
  paddingRight: '0.50rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  border: '1.5px solid rgba(209, 209, 209,0.5)'
}

const circleXP = {
  border: '1.5px solid #0F1BB5',
  width: '38px', 
  height: '38px'
}

export class Ranking extends Component {
render() {
    return (
      <Router>
      <React.Fragment>

      <div id="ranking" className="desafios-color">
        <div className="container p-0">
          <div className="column">
           
           <div style={rectRank} className="d-flex row align-items-center justify-content-around blue-gradient m-3">
              <div id="lugar-rank" className="d-flex align-items-end white-l-2 ml-3">
                  <h3 style={{ letterSpacing:'2px' }} className="m-0 font-weight-bold">
                    <span id="num-rank">4</span>º</h3>
                  <h5 className="m-0 pb-2 pl-1" style={{opacity:0.75, letterSpacing:'0.25px', fontSize:'28px'}}>Lugar</h5>
              </div>
              <div id="badges" style={{ marginRight:'0.7rem' }} className="d-flex align-items-center ml-auto">
                
                <h6 id="num" className="font-weight-bold white-l-2 p-2">20</h6>
               
                <img style={{ width: '30px', height: '30px' }} src={BadgeRanking} alt=""/>
               
              </div>
              <div id="xp" className="d-flex align-items-center mr-3">

                <h6 id="num" className="font-weight-bold white-l-2 p-2">20</h6>

                <div id="circle" style={{ width: '38px', height: '38px' }} className="gray-gradient rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center blue-d font-weight-bold">
                  <span className="subtitle-1 font-weight-bold text-uppercase mb-0">XP</span>
                </div>

              </div>
              
           </div>

          {/* Rank Lista */}
           <div style={listaRank} className="d-flex align-items-center justify-content-around white-back m-3">
             
            <div className="d-flex align-items-center justify-content-start">

              <div style={{ width: '55px', height: '55px', border: '6.5px solid #FFF', position:'absolute' }} className="blue-d-background rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center white font-weight-bold">
                <h6 id="level-user" className="mb-0 font-weight-bold">3</h6>
              </div>

              <div style={userRank}></div>
              
            </div>

            <div className="d-flex flex-column mr-auto ml-3 gray-dd font-weight-bold">
              <h6 className="pb-3">Maria</h6>
              <h6>4.5</h6> {/*por estrela amarela*/}
            </div>

            <div id="xp" className="d-flex align-items-center mr-3">
                <h6 id="num" className="font-weight-bold blue-d p-2">20</h6>
                <div id="circle" style={circleXP} className="rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center blue-d font-weight-bold">
                  <span className="subtitle-1 font-weight-bold text-uppercase mb-0 blue-d">XP</span>
                </div>
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

