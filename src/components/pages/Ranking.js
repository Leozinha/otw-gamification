import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Background from '../../imgs/pages/test.jpg'
import BadgeRanking from '../../imgs/layout/ranking2.png'
import axios from 'axios'


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

const listaRankSelected = {
  borderRadius: '12px',
  paddingLeft: '0.50rem',
  paddingRight: '0.50rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  border: '1.5px solid rgba(241, 169, 160, 1)'
}


const circleXP = {
  border: '1.5px solid #0F1BB5',
  width: '38px', 
  height: '38px'
}

class Ranking extends Component {

  state = {
    userLeaderboard:[],
    userData: []
  }

  componentDidMount(){
    var that = this;
    var config = {
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzMTJhMzY1MGE3MTI4ZWYwOGZmM2E2NTBiZDVkZjZlNWQyYjhlNzM4ZTFhMWY4YWUyYjk3YmY1OTRhNjIwNjM3MzcxMmFlMjRkZDdmOTQ1In0.eyJhdWQiOiIxIiwianRpIjoiNDMxMmEzNjUwYTcxMjhlZjA4ZmYzYTY1MGJkNWRmNmU1ZDJiOGU3MzhlMWExZjhhZTJiOTdiZjU5NGE2MjA2MzczNzEyYWUyNGRkN2Y5NDUiLCJpYXQiOjE1NjIzNDE1MzMsIm5iZiI6MTU2MjM0MTUzMywiZXhwIjoxNTkzOTYzOTMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m0XnC8tvh_nZIvn-GnVM0p1FwsRATMUWHokpWpjJ7GMRxMZnqjtGgkE-Gl_BcmK0qTIdomtsPPfzok46B3bxPYBLx6WP5QN5YB18AYWsj3jLmn9vUQnL4tFZ7D6tugLkONtFrNBuwntMtXbZt9t8ykWfpZ8g0JVI8A8wlsExRw4Ay0gVfD_QdjmIQfIybLV6mgKkhxsHNqOcPMJid54ZsWcwTB-2jjcRd_MLp6lAnPfQ94sWD0yrM9Gxds27AoEOUsbWd3Nl_m9Z-0Epy9Hy6oLwp6KZi29kxhHpTiBwneLQnD2v2luhrIVb1WtIltsadpgx_diOBIOXnsSdhlN52SSfVDmYdqHcG58S2lwssaA7mWmuD6t6Hd6Rfyn7C5ong6fln3Lx1cU6qSrZMf-QNRsgY4nHmpyGicdyrJVSE3FGBynmuNHmFi2gmUqMLIVVX0KTolQNePvXN2tcz3N5o2eXSTNV3ClgLymDKsOtxB2e-eiYJpdvOiiCHmPg9-ZznjXYDDg5VhNeNfBzEAWdROvx2-KXDQ6T9Up0G2jU4ltApvinVdvZQxdN7dkGwHMgYraWDU2n5MXFP4hOdfMGwg5RMT4Hhw_MDHLdQsirJQea02nvlknCduUFYhlABnVZR4doDwh_F30jdUoi-p4_pMy_TV3zdDqEG1V2BNYDwUk"}
    };

    axios.all([axios.get('http://localhost:8000/api/user/leaderboardPoints', config), axios.get('http://localhost:8000/api/user/leaderboardPoints', config)])
    .then(axios.spread(function (res, leaderboard) {
    //   // Both requests are now complete
      that.setState({userLeaderboard: leaderboard.data.leaderboardPoints});
      that.setState({userData: res.data.user});
      
    }));
  }
  {`/${textOne}`}
  

  render() {
    console.log('leaderboard', this.state);
    const userData = this.state.userData;
    const userLeaderboard = this.state.userLeaderboard;

    
    return (
      <Router>
      <React.Fragment>

      <div id="ranking" className="desafios-color">
        <div className="container p-0">
          <div className="column">
           
           <div style={rectRank} className="d-flex row align-items-center justify-content-around blue-gradient m-3">
              <div id="lugar-rank" className="d-flex align-items-end white-l-2 ml-3">
                  <h3 style={{ letterSpacing:'2px' }} className="m-0 font-weight-bold">
                    <span id="num-rank">{userData.position}</span>º</h3>
                  <h5 className="m-0 pb-2 pl-1" style={{opacity:0.75, letterSpacing:'0.25px', fontSize:'28px'}}>Lugar</h5>
              </div>
              <div id="badges" style={{ marginRight:'0.7rem' }} className="d-flex align-items-center ml-auto">
                
                <h6 id="num" className="font-weight-bold white-l-2 p-2">{userData.totalBadges}</h6>
               
                <img style={{ width: '30px', height: '30px' }} src={BadgeRanking} alt=""/>
               
              </div>
              <div id="xp" className="d-flex align-items-center mr-3">

                <h6 id="num" className="font-weight-bold white-l-2 p-2">{userData.xp}</h6>

                <div id="circle" style={{ width: '38px', height: '38px' }} className="gray-gradient rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center blue-d font-weight-bold">
                  <span className="subtitle-1 font-weight-bold text-uppercase mb-0">XP</span>
                </div>

              </div>
              
           </div>

          {/* Rank Lista */}
          {userLeaderboard.map((place, index) =>(
            
          this.state.userData.id === place.id ?
           <div key={place.id} style={listaRankSelected} className="d-flex align-items-center justify-content-around white-back m-3">
             
            <div className="d-flex align-items-center justify-content-start">

              <div style={{ width: '55px', height: '55px', border: '6.5px solid #FFF', position:'absolute' }} className="blue-d-background rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center white font-weight-bold">
                <h6 id="level-user" className="mb-0 font-weight-bold">{index +1}</h6>
              </div>

              <div style={userRank}></div>
              
            </div>

            <div className="d-flex flex-column mr-auto ml-3 gray-dd font-weight-bold">
              <h6 className="pb-3">{place.name}</h6>
              <h6>{place.review}</h6> {/*por estrela amarela*/}
            </div>

            <div id="xp" className="d-flex align-items-center mr-3">
                <h6 id="num" className="font-weight-bold blue-d p-2">{place.xp}</h6>
                <div id="circle" style={circleXP} className="rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center blue-d font-weight-bold">
                  <span className="subtitle-1 font-weight-bold text-uppercase mb-0 blue-d">XP</span>
                </div>
              </div>

           </div>

           :
           
           <div key={place.id} style={listaRank} className="d-flex align-items-center justify-content-around white-back m-3">
             
            <div className="d-flex align-items-center justify-content-start">

              <div style={{ width: '55px', height: '55px', border: '6.5px solid #FFF', position:'absolute' }} className="blue-d-background rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center white font-weight-bold">
                <h6 id="level-user" className="mb-0 font-weight-bold">{index +1}</h6>
              </div>

              <div style={userRank}></div>
              
            </div>

            <div className="d-flex flex-column mr-auto ml-3 gray-dd font-weight-bold">
              <h6 className="pb-3">{place.name}</h6>
              <h6>{place.review}</h6> {/*por estrela amarela*/}
            </div>

            <div id="xp" className="d-flex align-items-center mr-3">
                <h6 id="num" className="font-weight-bold blue-d p-2">{place.xp}</h6>
                <div id="circle" style={circleXP} className="rounded-circle d-flex flex-column padding-circle align-items-center justify-content-center blue-d font-weight-bold">
                  <span className="subtitle-1 font-weight-bold text-uppercase mb-0 blue-d">XP</span>
                </div>
              </div>

           </div>

          ))}

          </div>
        </div>
      </div>

    </React.Fragment>
    </Router>
    )
  }
}

export default Ranking

