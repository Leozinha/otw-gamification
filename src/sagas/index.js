// import mySagaProdutoDetail from './getProduto';
// import mySagaProdutos from './getProdutos';
// import mySagaUserDetail from './getUser';
// import mySagaViagemDetail from './getViagem';
// import mySagaViagems from './getViagems';
// import mySagaProdutoPOST from './PostProduto';
// import mySagaViagemPOST from './PostViagem';
// import mySagaUserPOST from './PostUser';
// import mySagaReviewPOST from './PostReview';

import mySagaLeaderboards from './getLeaderboardpoints';



// import tokenSaga from './auth';


import { fork } from 'redux-saga/effects';


function* rootSaga() {
  yield [
    // fork(mySagaProdutoDetail),
    // fork(mySagaProdutos),
    // fork(mySagaViagemDetail),
    // fork(mySagaUserDetail),
    // fork(mySagaViagems),
    // fork(mySagaProdutoPOST),
    // fork(mySagaViagemPOST),
    // fork(mySagaUserPOST),
    // fork(mySagaReviewPOST),

    fork(mySagaLeaderboards),
  ]
}

export default rootSaga;