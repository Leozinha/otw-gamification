import React, { Component } from 'react'

export class Atividade extends Component {
  render() {
    return (
      <div id="atividade">
        <div className="container">
          <div className="row">
            <div className="col">
            <div className="menu p-1 bring-to-front d-flex justify-content-around bars">
                    <div id="menu-pedido" ref={div => this.myElementColor = div} onClick={this.handleClickPedido.bind(this)} className="p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">pedidos</div>
                    <div id="menu-viagem" ref={div => this.myElementColorViagem = div} onClick={this.handleClickViagem.bind(this)}  className="p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">viagens</div>
                </div>
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                
                </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

//TODO propTypes

export default Atividade
