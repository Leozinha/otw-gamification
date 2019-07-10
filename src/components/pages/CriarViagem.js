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
      origem: "",
      destino: "",
      onChangeBool: false,
      preco: "",
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
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlNzZmN2M4NDBmNzIwZWEzNjQzMGRiZjAyOTMyNTc3ZjA0ZWFmYjRmYTE1N2M0OWFiYTI2YTlmOWYzOGJjNDQwNjhiM2RhZDhlZmRiMmJhIn0.eyJhdWQiOiIyIiwianRpIjoiYWU3NmY3Yzg0MGY3MjBlYTM2NDMwZGJmMDI5MzI1NzdmMDRlYWZiNGZhMTU3YzQ5YWJhMjZhOWY5ZjM4YmM0NDA2OGIzZGFkOGVmZGIyYmEiLCJpYXQiOjE1NjI2ODMwNDgsIm5iZiI6MTU2MjY4MzA0OCwiZXhwIjoxNTk0MzA1NDQ4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BlXsfXqiz6gn8RPzOK6g9Cey9jplRtQ3BEIGDvxg3AOGmk8kVTWY9w9Q3ghqhoNhcGJm0hIYr5JMpDFXiSvZl_cz_4KFK8rsBH_7xnZprwEdz61a5PusGK45EO4jA0v_DOpamDaLnJC1RN84NEriBXlBNfeytGsZKZVQIHBSH9Zu8pKeJhRQcuYTHZsiWaVhZq6QvcalgE1-aH5-RrxAiPXkm0FEPphYiQe5DA-F7stXcB18oJop1G76btSiW9Q9MlowBNVja1ILO6VvXuPNr5_s1-1OTjgMn0EDIPyw45qAIrIYolIBYrRywnWrrK7OCCKUolwp4dcWJDQoS0hcFwvydGu-wBM3Xm5XRd8bQf99SRWG8z3-e_WZbhdMEgDLL6vls05xg_NL2h_-xt8AxIHHClc1Y8doRJHs8VcWPRc85r3k7vFu4WpwQX_iyVLetX0shA3OIU534hKhp3Ea4R0Cdchnt2fmr8tkj2NEsU0GZW6UYyLjl38EWm-9SedEYP5pREuzmmST90cm2-kBnrJgSLRyc_GIyrF14pIqk8Te1duNvYtrmukegM7l0zGoMNamggmP2LBiP86bJWoTcfGDL70t1DabRZWLqg1m7FnTiMbp5FWgU5Cqr7-hBHVpFbdf40RsXsi5-8JnjDxuArC4IHfcj7kC_lsYcmsZnQU'
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