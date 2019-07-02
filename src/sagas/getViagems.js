import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_VIAGEMS, VIAGEMS_FETCH_SUCCEEDED, VIAGEMS_FETCH_ERROR } from '../constants/action-types'
import {ENDPOINT} from "../constants/services"

// função para obter os dados da API em formato JSON
function fetchAll(viagems) {
    const date = viagems.payload.viagems.dataViagem;
    const dateBody = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    const horaInicio = viagems.payload.viagems.horaInicio;
    const horaInicioBody = horaInicio.getHours() + ":" + horaInicio.getMinutes();
    const horaFim = viagems.payload.viagems.horaFim;
    const horaFimBody = horaFim.getHours() + ":" + horaFim.getMinutes();
    console.log('response', JSON.stringify({
        origem: viagems.payload.viagems.origem,
        destino: viagems.payload.viagems.destino,
        data: dateBody,
        horaInicio: horaInicioBody,
        horaFim: horaFimBody,
        
    }));
    

    return fetch(ENDPOINT+'viagem/search',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY5YzI2YjU2ZTg4ZTQ5MzljNmY2NjY2Njk3ZWJkZTM2YmJlODRhNjVlMzEyYjRhZDA1ODE4MmQ5YjYyMmJhNjYzMGQ2MjBjNDQyNWE3MzRmIn0.eyJhdWQiOiIxIiwianRpIjoiNjljMjZiNTZlODhlNDkzOWM2ZjY2NjY2OTdlYmRlMzZiYmU4NGE2NWUzMTJiNGFkMDU4MTgyZDliNjIyYmE2NjMwZDYyMGM0NDI1YTczNGYiLCJpYXQiOjE1NjE2NzQyNDcsIm5iZiI6MTU2MTY3NDI0NywiZXhwIjoxNTkzMjk2NjQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.beSOtcsXhq7iW1xrd0RgKR9VDbsIgm1Ij6C1HtMnryMts5iWvXT9lPFWsgVvHfbjTx8HYg0R0cO9e7M-2SJohqPQSwacs2fYrp3VoWC8PaXENiXmts91FCpwU3rH6RdU6amWsfMo-KQ0ybdKp-RovxGivfovVNAAAK-jnu6zOxV0QC0K774c3yrMS-fSyHOCQ-31VGChIPZ5a23k1jEz3DwBHU0w21tA_rR-xiIfZK_xSKqWaexFFOl-NoydYiuSduM02RsUticRii8O9_BmNG9-QKN2UBn_Hfj5gx9RCFrVB5WAtI_s3TaAJrUvM6HJ6AdIoqCSs5LZhcmvek45aQzEzHpzqitWQVt0cdSUkSGGByZyQSFN09itpsf-DKzJ_uewFVlvlwJjNudh6SuTnFvN9mD9bi2eJOdVoH2l3VdaXuwX8JJwtBWywzYLGYl6oN6ZtO4-E99EaaQOwNWArS07q6ejKdomobI0Vhp2wjHg07_kaPa00lda2WdvRViUZy6WWKlzp7vFTV_3emR977i7eSPsa1PeyAHImTUSHWkF6CzTCUPLLuNwneDsDBAW9xXqGCpN3Yy7aMYe9QeMlkgHoQM2OX--zM3rzGLLwTuC4OljD8s71p8E75qtNoJUEyH0IKCYewH7XnvhQ2Rpetok7gBqMMEAyFNrP9h5SXA'
        },
        body: JSON.stringify({
          origem: viagems.payload.viagems.origem,
          destino: viagems.payload.viagems.destino,
          data: dateBody,
          horaInicio: horaInicioBody,
          horaFim: horaFimBody,
        })
      }).then(response => response.json(), );
    }

function* fetchViagems(viagems) {

    try {
        const search = yield call(fetchAll, viagems);
        const viagens = search.listaViagens;
        yield put({type: VIAGEMS_FETCH_SUCCEEDED, payload: viagens});
    } catch (e) {
        // caso exista um erro, devolve a mensagem de erro
        console.log('erro', e);
        yield put({type: VIAGEMS_FETCH_ERROR, message: e.message});
    }
}

/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/
function* mySagaViagems() {
    console.log('search viagem saga init');
    yield takeLatest(FETCH_VIAGEMS, fetchViagems);
}

export default mySagaViagems;