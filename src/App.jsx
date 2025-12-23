import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import UniversityApproval from "./pages/admin/UniversityApproval";
import CompanyApproval from "./pages/admin/CompanyApproval";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/admin/login" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<AdminProtectedRoute><AdminDashboard/></AdminProtectedRoute>}/>
    <Route path="/admin/univerities" element={<AdminProtectedRoute><UniversityApproval/></AdminProtectedRoute>}/>
    <Route path="/admin/companies" element={<AdminProtectedRoute><CompanyApproval/></AdminProtectedRoute>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;