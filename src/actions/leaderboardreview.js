import { FETCH_LEADERBOARDREVIEWS } from "../constants/action-types";

// definir as actions de adicionar e apagar produtos
// cada action tem de ter um "type" único que a identifica
// opcionalmente pode ter também um "payload" que é normalmente informação necessária à sua execução

// definir a action para carregar produtos da api
export const fetchLeaderboardreviews = () => ({type: FETCH_LEADERBOARDREVIEWS});
