import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_LEADERBOARDPOINTS, LEADERBOARDPOINTS_FETCH_SUCCEEDED, LEADERBOARDPOINTS_FETCH_ERROR } from '../constants/action-types'
import {ENDPOINT} from "../constants/services"

// função para obter os dados da API em formato JSON
function fetchAll() {
    return fetch(ENDPOINT+'leaderboard').then(response => response.json(), );
}

// worker Saga: irá ser invocada quando ocorrer um FETCH_PRODUTOS action
function* fetchLeaderboards() {
    try {
        // invocar a função para obter a lista de produtos
        const leaderboardpoints = yield call(fetchAll);
        // assim que houver uma resposta da API, invoca a action, enviado os novos produtos obtidos
        yield put({type: LEADERBOARDPOINTS_FETCH_SUCCEEDED, payload: leaderboardpoints});
    } catch (e) {
        // caso exista um erro, devolve a mensagem de erro
        yield put({type: LEADERBOARDPOINTS_FETCH_ERROR, message: e.message});
    }
}

/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/
function* mySagaLeaderboards() {
    console.log('produtos saga init');
    yield takeLatest(FETCH_LEADERBOARDPOINTS, fetchLeaderboards);
}

export default mySagaLeaderboards;