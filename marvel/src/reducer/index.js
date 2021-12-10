const initialState = {
    allCharacters: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        default: return state;
        case 'GET_CHARACTERS':
            return {
                ...state,
                allCharacters: action.payload
            }
        case 'SEARCH_BY_NAME':
            return {
                ...state,
                allCharacters: action.payload
            }
        case 'SEARCH_BY_STORY':
            return {
                ...state,
                allCharacters: action.payload
            }
        case 'SEARCH_BY_COMIC':
            return {
                ...state,
                allCharacters: action.payload
            }
        case 'SEARCH_BY_SERIE':
            return {
                ...state,
                allCharacters: action.payload
            }
    }
}

export default rootReducer;


  // public: dcc040bad49ea9ec6c932d4c419b7902
  // private: d00f2d544a5fadf07d42d430ea007ebdcd5b6ed5
  // ts: 1 
  // 1d00f2d544a5fadf07d42d430ea007ebdcd5b6ed5dcc040bad49ea9ec6c932d4c419b7902
  // hash: 39882d128e7b707d033f508923c7d21c

// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c