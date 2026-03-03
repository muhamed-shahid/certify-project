import { Navigate } from "react-router-dom";
export default function AdminProtectedRoute({ children}) {
    const isAdminLoggedIn = localStorage.getItem("token")

    if (!isAdminLoggedIn) {
        return <Navigate to="/admin/login"/>
    }

    return children;
}