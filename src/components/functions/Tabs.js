import React from 'react'

export default function Tabs(props) {

  let Display = props.tabDisplay;

  let titleOne = props.titleOne;
  let titleTwo = props.titleTwo;

  let tabActiveOne = props.tabActiveOne;
  let tabActiveTwo = props.tabActiveTwo;

  return (
    <React.Fragment>
      <div id="tab" style={Display} className="navbar background align-items-center justify-content-center text-center white">
    <div className="container p-0">
      <div id="menu-pedido" /*ref={div => this.myElementColor = div} onClick={this.handleClickPedido.bind(this)}*/ style={tabActiveOne} className="col p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">{titleOne}</div>
      <div id="menu-viagem" /*ref={div => this.myElementColorViagem = div} onClick={this.handleClickViagem.bind(this)}*/ style={tabActiveTwo} className="col p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">{titleTwo}</div>
    </div>
  </div>
  </React.Fragment>
  )
}
