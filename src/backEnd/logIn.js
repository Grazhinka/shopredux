import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
const Login=()=>{
    const {loginWithRedirect, isAuthenticated}=useAuth0();
    return(
        !isAuthenticated &&(
         <button className="log" onClick={()=> loginWithRedirect() }>
            Войти
         </button>
    ))
}
export default Login