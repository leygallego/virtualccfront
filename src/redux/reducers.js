import { GET_SOME } from "./actions";


const initialState = {
    some: '',
}

export default function useReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SOME:
            return{
                ...state,
                some: action.payload
            }
                
        default:
           return state;
    }
}