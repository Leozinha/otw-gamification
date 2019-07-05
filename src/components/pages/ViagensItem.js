import React, { Component } from 'react'

// import { connect } from "react-redux";

class ViagensItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="viagens" className="">
        <div id="background" className="white rounded shadow p-2 mt-4">
          <div className="container">
            {/* {userInfo.viagems.map((el, index) => ( */}
            {/* // <Link className="link-no-decoration" to={{pathname: '/atividade2/'+el.id, state: { produto: el.produto }}}> */}
            <div className="row">

              <div className="col-1 previewComponent-md">
                <div id="image-default" className="image-default">
                </div>
              </div>

              <div className="col-5 d-flex flex-column justify-content-center align-items-start">

                <div className="align-items-center">
                  
                  <h6 className="text-uppercase font-weight-bold primary-text">{/*</h5>el.estado.estado*/}Maria</h6>

                  {/* <div className="icon-star">
                  </div>
                  <span id="review" className="font-weight-bold">3.5</span> */}
                </div>

                <div className="d-flex flex-row mt-2">
                  <div className="date-icon">
                  </div>
                  <span id="date" className="subtitle-1">{/*el.data*/}15/07/2019</span>
                </div>
                <div className="d-flex flex-row">
                  <div className="time-icon">
                  </div>
                  <span id="time" className="subtitle-1">18:00{/*el.horaInicio*/}-19:00{/*el.horaFim*/}</span>
                </div>
              </div>

              <div style={heightContainer} className="col-4 pt-1 pb-1 d-flex flex-column justify-content-between align-items-end">
                <h6 className="m-0 text-uppercase font-weight-bold primary-2-text subtitle-1">{/*el.origem*/}Aveiro</h6>
                <h6 className="m-0 text-uppercase font-weight-bold primary-2-text subtitle-1">{/*el.destino*/}Porto</h6>
              </div>

              <div className="location-img">

              </div>

              <div className="col-1 d-flex justify-content-center align-items-center">
                <h5 className="font-weight-bold"> {/*el.preco*/}€</h5>
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
