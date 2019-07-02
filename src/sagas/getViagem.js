import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_VIAGEM, VIAGEM_FETCH_SUCCEEDED, VIAGEM_FETCH_ERROR } from '../constants/action-types';
import {ENDPOINT} from "../constants/services"

function fetchDetail(id){
    console.log(id);
    return fetch(ENDPOINT+'viagem/'+id, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY5YzI2YjU2ZTg4ZTQ5MzljNmY2NjY2Njk3ZWJkZTM2YmJlODRhNjVlMzEyYjRhZDA1ODE4MmQ5YjYyMmJhNjYzMGQ2MjBjNDQyNWE3MzRmIn0.eyJhdWQiOiIxIiwianRpIjoiNjljMjZiNTZlODhlNDkzOWM2ZjY2NjY2OTdlYmRlMzZiYmU4NGE2NWUzMTJiNGFkMDU4MTgyZDliNjIyYmE2NjMwZDYyMGM0NDI1YTczNGYiLCJpYXQiOjE1NjE2NzQyNDcsIm5iZiI6MTU2MTY3NDI0NywiZXhwIjoxNTkzMjk2NjQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.beSOtcsXhq7iW1xrd0RgKR9VDbsIgm1Ij6C1HtMnryMts5iWvXT9lPFWsgVvHfbjTx8HYg0R0cO9e7M-2SJohqPQSwacs2fYrp3VoWC8PaXENiXmts91FCpwU3rH6RdU6amWsfMo-KQ0ybdKp-RovxGivfovVNAAAK-jnu6zOxV0QC0K774c3yrMS-fSyHOCQ-31VGChIPZ5a23k1jEz3DwBHU0w21tA_rR-xiIfZK_xSKqWaexFFOl-NoydYiuSduM02RsUticRii8O9_BmNG9-QKN2UBn_Hfj5gx9RCFrVB5WAtI_s3TaAJrUvM6HJ6AdIoqCSs5LZhcmvek45aQzEzHpzqitWQVt0cdSUkSGGByZyQSFN09itpsf-DKzJ_uewFVlvlwJjNudh6SuTnFvN9mD9bi2eJOdVoH2l3VdaXuwX8JJwtBWywzYLGYl6oN6ZtO4-E99EaaQOwNWArS07q6ejKdomobI0Vhp2wjHg07_kaPa00lda2WdvRViUZy6WWKlzp7vFTV_3emR977i7eSPsa1PeyAHImTUSHWkF6CzTCUPLLuNwneDsDBAW9xXqGCpN3Yy7aMYe9QeMlkgHoQM2OX--zM3rzGLLwTuC4OljD8s71p8E75qtNoJUEyH0IKCYewH7XnvhQ2Rpetok7gBqMMEAyFNrP9h5SXA'
      },
    }).then(response => response.json(), );
}

function* fetchViagem(action){
    const id = action.payload.viagem;
    console.log('action', action);
    try{
        const viagem = yield call(fetchDetail, id);
        yield put({type: VIAGEM_FETCH_SUCCEEDED, payload: viagem});
        console.log('success try catch of one viagem', viagem);
    } catch(e){
        console.log(e);
        yield put({type: VIAGEM_FETCH_ERROR, message: e.message});
    }
}

function* mySagaViagemDetail(){
    console.log('viagem saga init of one viagem');
    yield takeLatest(FETCH_VIAGEM, fetchViagem);
}

export default mySagaViagemDetail;
