
import { GET_CATEGORIES } from '../types';

export function fetchCategories() {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const json = await response.json()
        dispatch({
            type: GET_CATEGORIES,
            payload: json
        })
    }
}