import React, {FC, useState, useEffect} from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoriesActions";

export const CatalogPage: FC = () => {

    // const [categories, setCategories] = useState([])

    const dispatch = useDispatch()
    const categories = useSelector((state: RootStateOrAny) => {
        return state.categories.categories
    })

    

    useEffect(() => {
        // const fetchCategories = async() => {
        //     const response = await fetch('https://fakestoreapi.com/products/categories')
        //     const categoriesData = await response.json();
        //     setCategories(categoriesData)  
        // }
        // fetchCategories()
        dispatch(fetchCategories())
    }, [])

    return (
        <div>
            {
                categories.map((item:any) => {
                    return <div key={item}>{item}</div>
                })
            }
        </div>
    )
}