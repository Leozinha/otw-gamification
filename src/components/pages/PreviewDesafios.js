import React, { Component } from 'react'

// export 



class PreviewDesafios extends Component {
  
  render() {

    const userBadges = this.props && this.props.dataFromParent ? this.props.dataFromParent : 'null';
    // let BadgesLength = userBadges.length;

    // let random = Math.floor((Math.random() * userBadges.length) + 1)

    let num = 0

    // console.log(random)
    return (
      <React.Fragment>
        {userBadges.map((badges) => {

          num++

          return num <= 3 && badges.score === 0 ?

            <div id="desafio" className="w-100" key={badges.id}>
              <div id="background" className="white rounded desafios-border p-3 mr-3 ml-3 mt-2 mb-2">
                <div className="container">
    
                  <div className="row align-items-center">
    
                  <div className="col-3 pl-0">
                      <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                    </div>
    
                  <div className="col-7 pl-3 pr-0 d-flex flex-column justify-content-center align-items-center">
    
                      <span className="text-uppercase subtitle-2 align-self-start text-uppercase">{badges.badgeInfo.name}</span>
                      <span id="desafio" className="subtitle-1 font-weight-bold pt-1 text-desafio">{badges.badgeInfo.description}</span>
    
                      
                      {/* <span id="XP" className="subtitle-2">25XP</span> */}
    
                    </div>
    
                    <div className="col p-0 d-flex flex-column justify-content-between align-items-end subtitle-2 font-weight-bold body-1">
    
                    <span id="XP">25XP</span>
        
                  </div>
                  </div>
            
                </div>
              </div>
          </div>
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
