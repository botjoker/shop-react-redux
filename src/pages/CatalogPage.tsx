import React, {FC, useState, useEffect} from "react";

export const CatalogPage: FC = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async() => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const categoriesData = await response.json();
            setCategories(categoriesData)  
        }
        fetchCategories()
    }, [])

    return (
        <div>
            {
                categories.map(item => {
                    return <div key={item}>{item}</div>
                })
            }
        </div>
    )
}