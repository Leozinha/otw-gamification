import React, { Component } from 'react'

export class DesafiosItem extends Component {


  state = {
    previewDesafiosAtivos: this.props.previewDesafiosAtivos,
    showDesafioAtivos: this.props.showDesafioAtivos
  }


  DesafiosAtivosTudo = (e) => {

    let showDesafioAtivos = this.state.showDesafioAtivos;

    this.setState({
      showDesafioAtivos: !showDesafioAtivos,
    })    

  }

  render() {

    let { 
      previewDesafiosAtivos,
      showDesafioAtivos
    } = this.state;

    let previewDesafiosAtivosFirst = previewDesafiosAtivos[0].id;

    return (
      <React.Fragment>
        <div id="desafio" className="w-100">
          <div id="background" className="white rounded" style={{ backgroundColor:'transparent' }}>
            <div className="container">
             
              <div key={previewDesafiosAtivosFirst} className="row align-items-center p-2 mt-3">

                <div className="col-3 p-0 previewComponent-md text-center">
                  <img style={{width:'65px'}} className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

                <div className="col-7 p-0 pl-2 d-flex flex-column justify-content-center align-items-center">

                <span id="desafio-titulo" className="text-uppercase subtitle-2 align-self-start text-uppercase font-weight-bold">entrega</span>
                
                    <div className="progress w-100 mt-2" style={{backgroundColor:'#FAFAFA'}}>
                      <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>


                  <span style={{display:'none'}} id="XP" className="pt-1 align-self-end subtitle-2 font-weight-bold">25XP</span>

                </div>

                <div className="col-2 p-0 pt-3 pl-2 d-flex flex-column justify-content-between align-items-center font-weight-bold body-1">

                  <span id="num-progresso" className="gray-l subtitle-2 gray-d font-weight-normal">
                    <span className="blue-d subtitle-1 p-1 font-weight-bold">1</span>/12</span>
    
              </div>
              
              </div>

  
            {
              showDesafioAtivos ?
                  previewDesafiosAtivos.map((key, index) => { 
              
                    let num = index;
              
                    return num >= 1 ?
                    <div key={key} className="row align-items-center p-2 mt-3">

                <div className="col-3 p-0 previewComponent-md text-center">
                  <img style={{width:'65px'}} className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

                <div className="col-7 p-0 pl-2 d-flex flex-column justify-content-center align-items-center">

                <span id="desafio-titulo" className="text-uppercase subtitle-2 align-self-start text-uppercase font-weight-bold">entrega</span>
                
                    <div className="progress w-100 mt-2" style={{backgroundColor:'#FAFAFA'}}>
                      <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>


                  <span style={{display:'none'}} id="XP" className="pt-1 align-self-end subtitle-2 font-weight-bold">25XP</span>

                </div>

                <div className="col-2 p-0 pt-3 pl-2 d-flex flex-column justify-content-between align-items-center font-weight-bold body-1">

                  <span id="num-progresso" className="gray-l subtitle-2 gray-d font-weight-normal">
                    <span className="blue-d subtitle-1 p-1 font-weight-bold">1</span>/12</span>
    
              </div>
              
              </div>
                    :
                    null
                })
                :
                null
            }
                
              
              <div onClick={this.DesafiosAtivosTudo} className="text-uppercase text-center caption gray-md-2 font-weight-bold p-3">
                ver tudo
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
           
    )}
}

export default DesafiosItem
