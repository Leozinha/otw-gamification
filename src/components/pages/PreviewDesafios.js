import React, { Component } from 'react'
import underscore from 'underscore'

// export 



class PreviewDesafios extends Component {
  
  state = {
    badgeLevels : []
  }

  componentDidMount(){

    // const badges = this.props.dataFromParent
   
    // // const name = badges.badgeInfo.name

    // console.log(badges.badgeInfo.name)

    // switch(name) {
    //   case 'Entrega':
    //     return '#f6c14c'
    //   case 'Volume':
    //     return '#f6c14c'
    //   case 'Distância':
    //     return '#f6c14c'
    //   case 'Explorador':
    //     return '#2734df'
    //   case 'Viciado':
    //     return '#2734df'
    //   case 'Exemplar':
    //     return '#236a36'
    //   case 'Leal':
    //     return '#236a36'
    //   case 'Avaliação':
    //     return '#236a36'
    //   case 'Pontualidade':
    //     return '#236a36'
    //   case 'Disponibilidade':
    //     return '#236a36'
    //   default:
    //     return '#A9AAAB'
    // }

  
  }

  render() {

    const userBadges = this.props && this.props.dataFromParent ? this.props.dataFromParent : 'null';
    // let BadgesLength = userBadges.length;

    // let random = Math.floor((Math.random() * userBadges.length) + 1)

    let num = 0
   
 
    // console.log(random)
    return (
      <React.Fragment>
        
        
        
        {userBadges.map((badges) => {//usar filter (sortof)
        
          let name = badges.badgeInfo.name;
          let colorBadge = ""

          switch(name) {
            case 'Entrega':
              colorBadge = '#f6c14c'
              break
            case 'Volume':
              colorBadge = '#f6c14c'
              break
            case 'Distância':
              colorBadge = '#f6c14c'
              break
            case 'Explorador':
              colorBadge = '#2734df'
              break
            case 'Viciado':
              colorBadge = '#2734df'
              break
            case 'Exemplar':
              colorBadge = '#236a36'
              break
            case 'Leal':
              colorBadge = '#236a36'
              break
            case 'Avaliação':
              colorBadge = '#236a36'
              break
            case 'Pontualidade':
              colorBadge = '#236a36'
              break
            case 'Disponibilidade':
              colorBadge = '#236a36'
              break
            default:
              colorBadge = '#A9AAAB'
          }
      
          // console.log(badges.id)
          
          num++
          

          return num<=3  ?(

            <div id="desafio" className="w-100" key={badges.id}>
              <div id="background" style={{border: `1px solid ${colorBadge}`}} className="white rounded desafios-border p-3 mr-3 ml-3 mt-2 mb-2">
                <div className="container">
    
                  <div className="row align-items-center">
    
                  <div className="col-3 pl-0">
                      <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                    </div>
    
                  <div className="col-7 pl-3 pr-0 d-flex flex-column justify-content-center align-items-center">
    
                      <span style={{color: `${colorBadge}`}} className="text-uppercase subtitle-2 align-self-start text-uppercase">{badges.badgeInfo.name}</span>
                      <span id="desafio" className="subtitle-1 font-weight-bold pt-1 text-desafio">{badges.badgeInfo.description}</span>
    
                      
                      {/* <span id="XP" className="subtitle-2">25XP</span> */}
    
                    </div>
    
                    <div className="col p-0 d-flex flex-column justify-content-between align-items-end subtitle-2 font-weight-bold body-1">
    
                    <span id="XP" style={{color: `${colorBadge}`}}>25XP</span>
        
                  </div>
                  </div>
            
                </div>
              </div>
          </div>
          
          )
          :
          null
        })}
        
        
        {/* <div id="desafio" className="w-100">
          <div id="background" className="white rounded desafios-border p-3 mr-3 ml-3 mt-2 mb-2">
            <div className="container">

              <div className="row align-items-center">

              <div className="col-3 pl-0">
                  <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

              <div className="col-7 pl-3 pr-0 d-flex flex-column justify-content-center align-items-center">

                  <span className="text-uppercase subtitle-2 align-self-start text-uppercase">entrega</span>
                  <span id="desafio" className="subtitle-1 font-weight-bold pt-1 text-desafio">Entrega 12 encomendas num mes</span> */}

                   
                  {/* <span id="XP" className="subtitle-2">25XP</span> */}

                {/* </div>

                <div className="col p-0 d-flex flex-column justify-content-between align-items-end subtitle-2 font-weight-bold body-1">

                <span id="XP">25XP</span>
    
              </div>
              </div>
         
            </div>
          </div>
        </div> */}

        {/* <div id="desafio" className="w-100">
          <div id="background" className="white rounded desafios-border p-3 mr-3 ml-3 mt-2 mb-2">
            <div className="container">

              <div className="row align-items-center">

              <div className="col-3 pl-0">
                  <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

              <div className="col-7 pl-3 pr-0 d-flex flex-column justify-content-center align-items-center">

                  <span className="text-uppercase subtitle-2 align-self-start text-uppercase">entrega</span>
                  <span id="desafio" className="subtitle-1 font-weight-bold pt-1 text-desafio">Entrega 12 encomendas num mes</span> */}

                   
                  {/* <span id="XP" className="subtitle-2">25XP</span> */}

                {/* </div>

                <div className="col p-0 d-flex flex-column justify-content-between align-items-end subtitle-2 font-weight-bold body-1">

                <span id="XP">25XP</span>
    
              </div>
              </div>
         
            </div>
          </div>
        </div> */}
        

      </React.Fragment>
    )
  }
}

export default PreviewDesafios