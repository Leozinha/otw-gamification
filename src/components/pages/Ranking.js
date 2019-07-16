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
  border: '2.5px solid rgba(77, 19, 209, 1)'
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
      headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRkMzIyYTY3YTZmMGNmMjE0MGY3NmRkNzRjYTNjY2EyNDI5NDY3MDBiYTRjMTFkNWNkNmM3NDU0ZjdkMTg1ZDc3Nzk2NmIyMGM1MDQzN2EwIn0.eyJhdWQiOiIxIiwianRpIjoiNGQzMjJhNjdhNmYwY2YyMTQwZjc2ZGQ3NGNhM2NjYTI0Mjk0NjcwMGJhNGMxMWQ1Y2Q2Yzc0NTRmN2QxODVkNzc3OTY2YjIwYzUwNDM3YTAiLCJpYXQiOjE1NjIyNzY0MDAsIm5iZiI6MTU2MjI3NjQwMCwiZXhwIjoxNTkzODk4ODAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lO4htPabPKP_jbhfEObBqvhgWpRm7RJVLMnRiI25VGPRT3T7-kOjV8BTnNNhBwjUe_sX-k3lrdRnnwSifxlTDWUy69BUBuTJ4iZMsrC4dpII8y5cUYF08HpmNoxppx2swph4xVxUkvapWpIXsxNUzchA8sl12hA0IdnpZ4ehfR_Ix08V9OM-OHO_E6Ut6QC73jv5rXIoHu074m-RuJfy0pAkTt35d0tAf0nmeZNtGwYyQl1eGzpOMc5y3GmlxMTIXH99_TbxMH3zfWxg7vpJshUIcvmVKUkOBZV6OK2m-fnTmbfAjx-WsRdOnQC8mltAn5gDmnUhLbdwoPFtZ4hWPXhy8w4tRvd_Z1gLRPWxNMjM8DaSKJCUYvKxgY7I-_Lvavanks9fmQ-V6JrW8owbrma3iiC9pclWhYyjwx0rE8kpMGcDcp-g0_Ve01_XqAls5O5itjpdFpV1N4MHxhiktM55IY_qM2JTTJlzzmhxeiPkAFtiS_6UGqkFAgRkh6EmeUipqBRCm0MTprsAb9JGNSTJG9_tcmKTzLMSImmyC6vVFPn1S9k-xTqeNp4K9G_9RuvHXrCR9vk9whSJpv6YBXPI8V1U9VGiNk7q1ShbWW3q8NczsdqwluA8q4VPp_j33HSYk3lu111uOvf39GiWrtFSnUQT5gAdieu7dDZIrco"}
    };

    axios.all([axios.get('http://localhost:8000/api/user/leaderboardPoints', config), axios.get('http://localhost:8000/api/user/leaderboardPoints', config)])
    .then(axios.spread(function (res, leaderboard) {
    //   // Both requests are now complete
      that.setState({userLeaderboard: leaderboard.data.leaderboardPoints});
      that.setState({userData: res.data.user});
      
    }));
  }
  
  

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

