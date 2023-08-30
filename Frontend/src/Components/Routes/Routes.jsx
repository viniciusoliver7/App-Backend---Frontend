import {Routes,Route} from "react-router-dom"
import Table from "../../Graphs/Table/Table"
import Home from "../Home/Home"


export default function Switch(params) {

    return(
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/Tabelas" Component={Table}/>
        </Routes>
    )

    
}