import React from 'react'

export default function Tabs(props) {

  let Display = props.tabDisplay;

  return (
    <React.Fragment>
      <div id="tab" style={Display} className="navbar background align-items-center justify-content-center text-center white">
    <div className="container p-0">
      <div id="menu-pedido" /*ref={div => this.myElementColor = div} onClick={this.handleClickPedido.bind(this)}*/ className="col p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">pedidos</div>
      <div id="menu-viagem" /*ref={div => this.myElementColorViagem = div} onClick={this.handleClickViagem.bind(this)}*/ className="col p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">viagens</div>
    </div>
  </div>
  </React.Fragment>
  )
}
