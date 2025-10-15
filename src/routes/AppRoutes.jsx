import { createBrowserRouter } from "react-router-dom";
import App from "/src/App.jsx";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true,element:<Home/>},
            {path:"/perfil",element:<Perfil/>},
            {path:"/carrinho",element:<Carrinho/>}
        ]
    }
])

export default router;