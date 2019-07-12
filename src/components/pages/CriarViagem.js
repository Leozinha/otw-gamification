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
      origem: '',
      destino: '',
      preco: '',
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
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ3OWMxNjA1YzM5ZmZjYmY4OTdlNzg4OWVkZTZiMmVlNWZhMzA2YTBhYzcwYjE3NDdkMzRhMzllNDQyYzliMzEzOTU0NWFhZmVlOTc1MWIxIn0.eyJhdWQiOiIxIiwianRpIjoiNDc5YzE2MDVjMzlmZmNiZjg5N2U3ODg5ZWRlNmIyZWU1ZmEzMDZhMGFjNzBiMTc0N2QzNGEzOWU0NDJjOWIzMTM5NTQ1YWFmZWU5NzUxYjEiLCJpYXQiOjE1NjI5NDEzNjYsIm5iZiI6MTU2Mjk0MTM2NiwiZXhwIjoxNTk0NTYzNzY2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PB0NjzePS7wnYkgE193oV_BH0mgB0PXU8hNJOQppfVZaqVcfte4Gizw5Yu0gga2v0DM6KMCX2uY7Ma2l0P-FyZsDgYCInCm7YvVx5zpqy7eSdIDCWhkzo0jiQ0xgohyOmiShoAgVUvTK69C-L3wJwq3K4LU_hyhUJ8GikppUXvubcaAoiCXtCv3TDW9d7tdkAuEyXMlq5VEG5M83iviret7-qve2UJp_hlfK1Wspqz0wsKpwXE_RIvmVUMryeqjHYGDDOAtwq7iBkhWiZ-d3_ZCAzasDN7hmriRnusk0PxfuOMjTkHAes5xsBnQ1N1xVNFO8nE9RXCzRdX9Xa9WxX2bwMfJ999SMHK-9EAYJSvQokjLSq-Fdquzu68qyIY-vb5yJcrMvEwl_7lCIsQY6_X6N9MOBDd7bjCXndkXMgIuqbvntu4WJtIH4X4VAu6tHAWNGgdNqLFfktQHFvHV45PuVGyD8-Spw9lKTbj7XfnR_nnvcWFG30N_IMsX7j6nvcKfpVGx__4w0gEjYJEc8ppv1boa43jlW6E4baTpcbK8KD3BuACadQtJQTTGlzMArx7z8eqM_FKNYAalOx-Hu5NkzZX_hpBkDDoZymPb2YjCoZj9frorFrcaKew6zWD0KNvSvuV5LolfbPdVj2AxtlnMGnEmiL-CNnNUP0eFzD0o'
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
                  <input id="origem" /*value={data.id}*/ type="text" placeholder="Origem"  
                  onClick={(e) => this.FocusColor(e)} value={origem} onChange={this.handleChange} className="w-100 form-control-lg" />
                </div>
                <label style={FocusColorPara} className="labelViagem pl-2 subtitle-1">Para</label>
                <div className="form-group mr-2 ml-2">
                  <input type="text" placeholder="Destino" id="destino" onClick={(e) => this.FocusColor(e)} value={destino} onChange={this.handleChange} className="form-control-lg w-100" />
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