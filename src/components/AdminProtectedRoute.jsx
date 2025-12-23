import { Navigate } from "react-router-dom";
export default function AdminProtectedRoute({ children}) {
    const isAdminLoggedIn = localStorage.getItem("adminToken")

    if (!isAdminLoggedIn) {
        return <Navigate to="/admin/login"/>
    }

    return children;
}