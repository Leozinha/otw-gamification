import React, { Component } from 'react'

// import { connect } from "react-redux";

// const percentage = 50;

class ViagensItem extends Component {
 
  render() {

    // console.log('DATAVIAGEMDETAILS', this.props);

    return (
      <React.Fragment>
        <div id="viagens" className="">
        <div id="background" className="white rounded shadow p-2 mt-4">
          <div className="container">
            {/* {userInfo.viagems.map((el, index) => ( */}
            {/* // <Link className="link-no-decoration" to={{pathname: '/atividade2/'+el.id, state: { produto: el.produto }}}> */}
            <div className="d-flex align-items-center">

              <div className="previewComponent-md">
                <div id="image-default" className="image-default">
                </div>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-start">

                <div className="align-items-center">
                  
                  <h6 className="text-uppercase font-weight-bold primary-text">Maria</h6>

                  {/* <div className="icon-star">
                  </div>
                  <span id="review" className="font-weight-bold">3.5</span> */}
                </div>

                <div className="d-flex flex-row mt-2">
                  <div className="date-icon">
                  </div>
                  <span id="date" className="subtitle-2 gray-dd">{/*el.data*/}{this.props.userData.data}</span>
                </div>
                <div className="d-flex flex-row">
                  <div className="time-icon">
                  </div>
                  <span id="time" className="subtitle-2 gray-dd">{this.props.userData.horaInicio}{/*el.horaInicio*/}-{this.props.userData.horaFim}{/*el.horaFim*/}</span>
                </div>
              </div>

              <div style={heightContainer} className="pt-1 pb-1 d-flex flex-column justify-content-between align-items-end">
                <span className="m-0 text-uppercase font-weight-bold primary-2-text subtitle-1">{/*el.origem*/}{this.props.userData.origem}</span>
                <span className="m-0 text-uppercase font-weight-bold primary-2-text subtitle-1">{/*el.destino*/}{this.props.userData.destino}</span>
              </div>

             {/* ESTADO DE ENTREGA */}
             <div className="progress vertical">
              <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>
              </div>  
             </div>
              
              <div className="d-flex justify-content-center align-items-center">
                <span className="font-weight-bold primary-text subtitle-1"> {/*el.preco*/}{this.props.userData.preco}€</span>
              </div>

            </div>
            {/* // </Link>
                    // ))} */}
          </div>
          </div>
        </div>
        </React.Fragment>
    )
  }
}

const heightContainer = {
  height:'110px'
}

// const AtividadeItemExp = connect(null, null)(AtividadeItem);
export default ViagensItem
