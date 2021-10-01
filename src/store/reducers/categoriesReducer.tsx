import { GET_CATEGORIES } from "../types"
const initialState = {
    categories: [],
}

export const categoriesReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return { ...state, categories: [...state.categories, action.payload] }
        default: return state
    }    
}   