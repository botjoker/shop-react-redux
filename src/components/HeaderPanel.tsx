import React, {FC} from "react";
import { Layout } from 'antd';
import { NavBar } from './NavBar';
const { Header } = Layout;

export const HeaderPanel: FC = () => {
    return (
        <Header>
            <NavBar />
        </Header>
    )
}