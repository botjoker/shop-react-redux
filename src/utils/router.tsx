import React from "react";
import { MainPage } from '../pages/MainPage';
import { CatalogPage } from '../pages/CatalogPage';
import { CategoryPage } from '../pages/CategoryPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { OrderPage } from '../pages/OrderPage';
import { ActionsPage } from '../pages/ActionsPage';
import { ContactsPage } from '../pages/ContactsPage';



export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    MAIN_PAGE = '/',
    CATALOG_PAGE = '/catalog',
    CATEGORY_PAGE = '/category',
    PRODUCT_PAGE = '/product',
    CART_PAGE = '/cart',
    ORDER_PAGE = '/order',
    CONTACTS_PAGE = '/contacts',
    ACTIONS_PAGE = '/actions',
}

export const publicRoutes: IRoute[] = [
    { 
        path: RouteNames.MAIN_PAGE,
        exact: true,
        component: MainPage
    },
    { 
        path: RouteNames.CATALOG_PAGE,
        exact: true,
        component: CatalogPage
    },
    { 
        path: RouteNames.CATEGORY_PAGE,
        exact: true,
        component: CategoryPage
    },
    { 
        path: RouteNames.PRODUCT_PAGE,
        exact: true,
        component: ProductPage
    },
    { 
        path: RouteNames.CART_PAGE,
        exact: true,
        component: CartPage
    },
    { 
        path: RouteNames.ORDER_PAGE,
        exact: true,
        component: OrderPage
    },
    { 
        path: RouteNames.CONTACTS_PAGE,
        exact: true,
        component: ContactsPage
    },  
    { 
        path: RouteNames.ACTIONS_PAGE,
        exact: true,
        component: ActionsPage
    },
]