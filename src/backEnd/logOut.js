import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
const LoginOut=()=>{
    const {logout,isAuthenticated}=useAuth0();
    return(
      isAuthenticated &&(
         <button className="log" onClick={()=> logout() }>
            Выход
         </button>
        )
    )
}
export default LoginOut