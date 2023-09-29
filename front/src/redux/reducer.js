import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case ADD_FAV:
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };
 
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            const all = action.payload === "allCharacters"    

            return {
                ...state,
                myFavorites: all? [...state.allCharacters] : allCharactersFiltered
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]

            if(action.payload ==="A"){
                allCharactersCopy.sort((a,b) => a.id - b.id)
            }else if(action.payload ==="D"){
                allCharactersCopy.sort((a,b) => b.id - a.id)
            }

            return {
                ...state,
                myFavorites: allCharactersCopy
            }


        default: return {...state}

    }

}

export default reducer; 