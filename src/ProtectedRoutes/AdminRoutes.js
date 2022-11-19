import SignIn from "../containers/Auth/SignIn";
import Home from "../containers/Home";

const AdminRoutes = ({isAuthenticated, isAdmin, children}) => {
    if(!isAuthenticated) {
        return <SignIn />
    }
    if(isAuthenticated && isAdmin) {
        return children
    }
    return <Home />
}

export default AdminRoutes