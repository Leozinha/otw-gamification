//TODO input preço e preview do valor ao lado!

import React, { Component } from 'react'

//DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt';
registerLocale('pt', pt);
setDefaultLocale('pt');

// import { connect } from "react-redux";
// import { addViagem } from "../../actions/viagems";
// // import Feedback from "./Feedback";

// const mapDispatchToProps = dispatch => {
//     return {
//         addViagem: viagem => dispatch(addViagem(viagem))
//     };
// };

let FocusColorGray = {
  color: "#A9AAAB",
  fontWeight: "normal"
}

let FocusColorBlue = {
  color: "#1220DC",
  fontWeight: "bold"
}

class CriarViagem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataInicio: new Date(),
      // dataFim: new Date(),
      horaInicio: new Date(),
      horaFim: new Date(),
      onChangeBool: false,
      tipo_id: 1,
      FocusColorDe: FocusColorGray,
      FocusColorPara: FocusColorGray,
      FocusColorData: FocusColorGray,
      FocusColorHora: FocusColorGray,
      FocusColorPreco: FocusColorGray,
    };

    this.handleChange = this.handleChange.bind(this);
    this.dataInicio = this.dataInicio.bind(this);
    // this.dataFim = this.dataFim.bind(this);
    this.horaInicio = this.horaInicio.bind(this);
    this.horaFim = this.horaFim.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { origem } = this.state;
    // const { destino } = this.state;
    // // const { tamanho } = this.state;
    // const { nomeProduto } = this.state;
    // const { dataViagem } = this.state;
    // const { horaInicio } = this.state;
    // const { horaFim } = this.state;

    const post = {
      origem: this.state.origem,
      destino: this.state.destino,
      preco: this.state.preco,
      data: this.state.dataInicio.getFullYear() + "-" + (this.state.dataInicio.getMonth() + 1) + "-" + this.state.dataInicio.getDate(),
      horaInicio: this.state.horaInicio.getHours() + ":" + this.state.horaInicio.getMinutes(),
      horaFim: this.state.horaFim.getHours() + ":" + this.state.horaFim.getMinutes(),
      tipo_id: 1,
    }
    console.log('teste1', JSON.stringify(post));


    fetch('http://localhost:8000/api/viagem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRkMzIyYTY3YTZmMGNmMjE0MGY3NmRkNzRjYTNjY2EyNDI5NDY3MDBiYTRjMTFkNWNkNmM3NDU0ZjdkMTg1ZDc3Nzk2NmIyMGM1MDQzN2EwIn0.eyJhdWQiOiIxIiwianRpIjoiNGQzMjJhNjdhNmYwY2YyMTQwZjc2ZGQ3NGNhM2NjYTI0Mjk0NjcwMGJhNGMxMWQ1Y2Q2Yzc0NTRmN2QxODVkNzc3OTY2YjIwYzUwNDM3YTAiLCJpYXQiOjE1NjIyNzY0MDAsIm5iZiI6MTU2MjI3NjQwMCwiZXhwIjoxNTkzODk4ODAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lO4htPabPKP_jbhfEObBqvhgWpRm7RJVLMnRiI25VGPRT3T7-kOjV8BTnNNhBwjUe_sX-k3lrdRnnwSifxlTDWUy69BUBuTJ4iZMsrC4dpII8y5cUYF08HpmNoxppx2swph4xVxUkvapWpIXsxNUzchA8sl12hA0IdnpZ4ehfR_Ix08V9OM-OHO_E6Ut6QC73jv5rXIoHu074m-RuJfy0pAkTt35d0tAf0nmeZNtGwYyQl1eGzpOMc5y3GmlxMTIXH99_TbxMH3zfWxg7vpJshUIcvmVKUkOBZV6OK2m-fnTmbfAjx-WsRdOnQC8mltAn5gDmnUhLbdwoPFtZ4hWPXhy8w4tRvd_Z1gLRPWxNMjM8DaSKJCUYvKxgY7I-_Lvavanks9fmQ-V6JrW8owbrma3iiC9pclWhYyjwx0rE8kpMGcDcp-g0_Ve01_XqAls5O5itjpdFpV1N4MHxhiktM55IY_qM2JTTJlzzmhxeiPkAFtiS_6UGqkFAgRkh6EmeUipqBRCm0MTprsAb9JGNSTJG9_tcmKTzLMSImmyC6vVFPn1S9k-xTqeNp4K9G_9RuvHXrCR9vk9whSJpv6YBXPI8V1U9VGiNk7q1ShbWW3q8NczsdqwluA8q4VPp_j33HSYk3lu111uOvf39GiWrtFSnUQT5gAdieu7dDZIrco'
      },
      body: JSON.stringify(post),
    }).then(res => res.json())

    // this.props.addViagem({ origem, destino, /*tamanho,*/ nomeProduto, dataViagem, horaInicio, /*horaFim*/ });
    // this.props.history.push('/condutores',{
    //     state: { origem, destino, /*tamanho,*/ nomeProduto, dataViagem, horaInicio, /*horaFim*/ }
    // });
    this.setState({ origem: "", destino: "", /*tamanho: "",*/ preco: "", dataInicio: "", horaInicio: "", /*horaFim: ""*/ });
  }

  dataInicio(data) {
    this.setState({
      dataInicio: data
    });

    // dataHoraLabel = "Início"
  }

  // dataFim(data) {
  //   // console.log(data.getDate())
  //   this.setState({
  //     dataFim: data
  //   });
  // }

  horaInicio(date) {
    this.setState({
      horaInicio: date,
    });
  }

  horaFim(date) {
    this.setState({
      horaFim: date,
    });
  }

  FocusColor = (e) => {

 e.stopPropagation();

    console.log(e.target.id)

    switch(e.target.id) {
      case 'de':
        return this.setState({FocusColorDe: FocusColorBlue, FocusColorPara: FocusColorGray, FocusColorData: FocusColorGray, FocusColorHora: FocusColorGray, FocusColorPreco: FocusColorGray});
      case 'para':
        return this.setState({FocusColorPara: FocusColorBlue, FocusColorDe: FocusColorGray, FocusColorData: FocusColorGray, FocusColorHora: FocusColorGray, FocusColorPreco: FocusColorGray});
      case 'data':
        return this.setState({FocusColorData: FocusColorBlue, FocusColorPara: FocusColorGray, FocusColorDe: FocusColorGray, FocusColorHora: FocusColorGray, FocusColorPreco: FocusColorGray});
      case 'hora':
        return this.setState({FocusColorHora: FocusColorBlue, FocusColorPara: FocusColorGray, FocusColorData: FocusColorGray, FocusColorDe: FocusColorGray, FocusColorPreco: FocusColorGray});
      case 'preco':
        return this.setState({FocusColorPreco: FocusColorBlue, FocusColorPara: FocusColorGray, FocusColorData: FocusColorGray, FocusColorHora: FocusColorGray, FocusColorDe: FocusColorGray});
      default:
        return this.setState({FocusColor: FocusColorGray});
    }
   
  }

notActiveFocus = () => {
  this.setState({
    FocusColorDe: FocusColorGray,
    FocusColorPara: FocusColorGray,
    FocusColorData: FocusColorGray,
    FocusColorHora: FocusColorGray,
    FocusColorPreco: FocusColorGray,
  });
}

  render() {
    const { origem, destino, preco, dataInicio, /*dataFim, */ horaInicio, horaFim, FocusColorDe, FocusColorPara,FocusColorData,FocusColorHora,FocusColorPreco } = this.state;
    return (
      <div id="criar-viagem" onClick={this.notActiveFocus}>
        <div className="container">
          <div className="row">
            <div className="col ">
              <form className="mt-4" onSubmit={this.handleSubmit}>
                <label style={FocusColorDe} className="labelViagem pl-2 subtitle-1">De</label>

                <div className="form-group mr-2 ml-2">
                  <input id="de" /*value={data.id}*/ type="text" placeholder="Origem"  
                  onClick={(e) => this.FocusColor(e)} value={origem} onChange={this.handleChange} className="w-100 form-control-lg" />
                </div>
                <label style={FocusColorPara} className="labelViagem pl-2 subtitle-1">Para</label>
                <div className="form-group mr-2 ml-2">
                  <input type="text" placeholder="Destino" id="para" onClick={(e) => this.FocusColor(e)} value={destino} onChange={this.handleChange} className="form-control-lg w-100" />
                </div>

                <div className="mr-2 ml-2 d-flex justify-content-between gray-text">
                  <label style={FocusColorData} className="labelViagem subtitle-1 align-self-left">Data</label>
                  <label style={FocusColorHora} className="labelViagem mr-5rem subtitle-1">Hora</label>
                </div>

                <div className="d-flex justify-content-between">
           
                 {/* <div className="d-flex flex-column"> */}
                   <div className="form-group">
                    <div className="pl-2" onClick={(e) => this.FocusColor(e)}>
                      <React.Fragment>
                        <DatePicker
                        id="data"
                        className="pt-2 pb-2 col-11 rounded"
                        selected={dataInicio}
                        placeholderText="Data"
                        onChange={this.dataInicio}
                        onSelect={this.handleSelect}
                        dateFormat="dd/MM/yyyy"
                        locale="pt"
                      />
                      </React.Fragment>
                    </div>
                  </div>

                 {/* </div> */}
                  
                  {/* <div className="d-flex flex-column mr-auto"> */}
                  <div className="d-flex mr-2">
                     <div className="form-group">
                      <div className="pl-2" onClick={(e) => this.FocusColor(e)}>
                        <DatePicker
                        id="hora"
                        className="date-time-input-size p-2 rounded"
                        selected={horaInicio}
                        onChange={this.horaInicio}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="HH:mm"
                        locale="pt"
                        // timeCaption="Time"
                        placeholderText="Hora"
                      />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="pl-2"  onClick={(e) => this.FocusColor(e)}>
                        <DatePicker id="hora"
                        className="date-time-input-size p-2 rounded"
                        selected={horaFim}
                        onChange={this.horaFim}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="HH:mm"
                        locale="pt"
                        timeCaption="Time"
                        placeholderText="Hora"
                      />
                      </div>
                    </div>
                  </div>
                 
                </div>

                {/* <label className="pl-2 subtitle-2 text-uppercase align-self-center">O que posso levar</label> */}


                <div className="form-group mr-2 ml-2 d-flex flex-column align-items-center">
                  {/* <select id="tamanho" value={tamanho} onChange={this.handleChange} className="custom-select custom-select-lg font-weight-normal"> */}
                  {/* <option value="grande">Grande&nbsp;(até 50kg)</option> */}
                  {/* <option value="medio">Médio&nbsp;(até 30kg)</option> */}
                  {/* <option value="pequeno">Pequeno&nbsp;(até 10kg)</option> */}
                  {/* </select> */}

                  <label style={FocusColorPreco} className="subtitle-1 align-self-start pl-6rem">Preço</label>
                  <div style={{ width:"66%" }} className="d-flex align-items-center justify-content-between">
                  {/* PREÇO  */}
                  <input type="text" placeholder="€" id="preco" value={preco} style={{ width:'35%', marginLeft:'2rem' }} className="align-self-around mt-2 form-control-lg text-center" onClick={(e) => this.FocusColor(e)} onChange={this.handleChange}  />
                  {/* PREVIEW PREÇO  */}
                  <div className="d-flex align-items-center">
                  {
                  preco ?
                  <React.Fragment>
                    <h4 style={{ opacity:1, margin:0 }}>{preco}</h4>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <h4 style={{ opacity:0.5, margin:0 }}>0</h4>
                  </React.Fragment>
                  }                    
                  <span className="subtitle-2 p-1 align-self-end">€</span>
                  </div>
                  </div>
                                   
                  <div className="mt-5 primary-btn primary text-center blue-btn">
                    <button type="submit" className="btn-size btn-style white-text link-no-decoration">
                      Criar Viagem
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//TODO propTypes
// const CriarViagemExp = connect(null, mapDispatchToProps)(CriarViagem);
export default CriarViagem;