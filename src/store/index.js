import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

// importar os reducers da aplicação
// import produto from "../reducers/produto";
// import produtos from "../reducers/produtos";
// import viagem from "../reducers/viagem";
// import viagems from "../reducers/viagems";
// import userInfo from "../reducers/users";
// import review from "../reducers/review";
import leaderboardpoints from "../reducers/leaderboardpoints";


// importar os sagas da aplicação
import mySagas from "../sagas/index";


// inicializar o saga Middleware
const sagaMiddleware = createSagaMiddleware();

// criar a store do Redux
const store = createStore(
    // caso exista mais do que 1 reducer, usar esta função para "combiná-los"
  combineReducers({
    // produto, produtos, viagem, viagems, userInfo, review
  }),
    // associar o saga à store do Redux
    applyMiddleware(sagaMiddleware)
);

// executar o middleware sagas
sagaMiddleware.run(mySagas);

export default store;