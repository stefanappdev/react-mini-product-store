import { useLoginAuth } from "../contexts/LoginContext";
import { Navigate } from "react-router-dom";



const RequireLogin=({children})=>{
    const auth=useLoginAuth();


    return(!auth.isLoggedIn?<div>

            <Navigate to="/login"/>

    </div>:<>{children}</>)

}

export default RequireLogin