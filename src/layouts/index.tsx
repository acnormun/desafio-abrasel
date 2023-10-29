
import { Header } from "../components/Header";
import { LayoutBorder, LayoutContainer } from "./styles";
import {Outlet} from 'react-router-dom'

export function DefaultLayout(){
    return(
        <LayoutContainer>
            <LayoutBorder>
            <Header/>
            <Outlet/>
            </LayoutBorder>
        </LayoutContainer>
    )
}