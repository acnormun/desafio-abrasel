import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Palidromos } from "./Palidromo";
import { DefaultLayout } from "../layouts";

export function Router(){
    return (
        <Routes>
            <Route path="/" element = {<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/palidromos" element={<Palidromos/>}/>
            </Route>
        </Routes>
    )
}