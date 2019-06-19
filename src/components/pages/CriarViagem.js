import React, { Component } from 'react'

//DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { connect } from "react-redux";
// import { fetchViagems } from "../actions/viagems";

// const mapDispatchToProps = dispatch => {
//     return {
//       fetchViagems: viagems => dispatch(fetchViagems(viagems)),
//     };
// };

export default class CriarViagem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataViagem: new Date(),
      horaInicio: new Date(),
      horaFim: new Date(),
      origem: "",
      destino: "",
      tamanho: "grande",
      nomeProduto: "",
      tipo_id: 1
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange3(date) {
    this.setState({
      horaInicio: date,
    });
  }

  handleChange4(date) {
    this.setState({
      horaFim: date,
    });
  }

  // handleChange(event) {
  //     this.setState({ [event.target.id]: event.target.value });
  // }

  // handleSubmit(event) {
  //     event.preventDefault();
  //     const { origem } = this.state;
  //     const { destino } = this.state;
  //     const { tamanho } = this.state;
  //     const { nomeProduto } = this.state;
  //     const { dataViagem } = this.state;
  //     const { horaInicio } = this.state;
  //     const { horaFim } = this.state;

  //     this.props.fetchViagems({ origem, destino, tamanho, nomeProduto, dataViagem, horaInicio, horaFim });
  //     this.props.history.push('/condutores',{
  //         state: { origem, destino, tamanho, nomeProduto, dataViagem, horaInicio, horaFim }
  //     });
  //     this.setState({ origem: "" , destino: "", tamanho: "", preco: "", dataViagem: "", horaInicio: "", horaFim: ""});
  // }

  handleChange2(data) {
    // console.log(data.getDate())
    this.setState({
      dataViagem: data
    });
  }

  render() {
    const { dataViagem/*origem, destino, ,tamanho, nomeProduto*/ } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="spacing-top row justify-content-center">
            <label className="mr-3 mb-0 align-self-center">De</label>
            <input type="text" placeholder="Origem" id="origem" /*value={origem}*/ /*onChange={this.handleChange}*/ className="col-8 m-2 form-control-lg" />
          </div>
          <div className="row justify-content-center">
            <label className="mr-3 mb-0 align-self-center">Para</label>
            <input type="text" placeholder="Destino" id="destino" /*value={destino}*/ /*onChange={this.handleChange}*/ className="col-8 m-2 form-control-lg" />
          </div>

          <div className="date-time mt-2 form-group row justify-content-center">
            <label className="ml-2 mr-2 mb-0 align-self-center">Data</label>
            <div className="col-4 p-0">
              <DatePicker
                className="pt-2 pb-2 col-11 rounded"
                selected={dataViagem}
                onChange={this.handleChange2}
                onSelect={this.handleSelect}
                dateFormat="dd/MM/yyyy"
                placeholderText="Data"
              />
            </div>
            <label className="mr-2 mb-0 align-self-center">Hora</label>
            <div>
              <DatePicker
                className="date-time-input-size p-2 rounded"
                selected={this.state.horaInicio}
                onChange={this.handleChange3}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="HH:mm"
                timeCaption="Time"
                placeholderText="Hora"
              />
            </div>
            <span className="p-1">:</span>
            <div>
              <DatePicker
                className="date-time-input-size p-2 rounded"
                selected={this.state.horaFim}
                onChange={this.handleChange4}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="HH:mm"
                timeCaption="Time"
                placeholderText="Hora"
              />
            </div>
          </div>

          <div className="mr-4 ml-4 mb-4 mt-5 row justify-content-left gray-text text-uppercase">
            <h6 className="mr-3 mb-0 align-self-left font-weight-bold">Características do produto</h6>
          </div>

          <div className="mr-5 ml-5 row justify-content-left">
            <label className="ml-2 mb-0">Tamanho</label>
          </div>

          <div className="row justify-content-center">
            <select id="tamanho" /*value={tamanho} onChange={this.handleChange}*/ className="custom-select custom-select-lg col-4 m-2 font-weight-normal">
              <option value="grande">Grande&nbsp;(até 50kg)</option>
              <option value="medio">Médio&nbsp;(até 30kg)</option>
              <option value="pequeno">Pequeno&nbsp;(até 10kg)</option>
            </select>
          </div>

          <div className="spacing-bottom spacing-top-b row justify-content-center align-self-center">
            <div className="m-2 row align-items-center primary-btn primary pedido justify-content-center blue-btn">
              {/* <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/condutores/"> */}
              <button type="submit" className="btn-style white-text font-weight-bold text-uppercase link-no-decoration">
                Pesquisar
                                </button>
              {/* </Link>  */}
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

