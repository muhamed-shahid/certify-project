import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import UniversityApproval from "./pages/admin/UniversityApproval";
import CompanyApproval from "./pages/admin/CompanyApproval";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import UniversityLogin from "./pages/university/UniversityLogin";
import UniversityDashboard from "./pages/university/UniversityDashboard";
import AddCertificate from "./pages/university/AddCertificate";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/admin/login" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<AdminProtectedRoute><AdminDashboard/></AdminProtectedRoute>}/>
    <Route path="/admin/universities" element={<AdminProtectedRoute><UniversityApproval/></AdminProtectedRoute>}/>
    <Route path="/admin/companies" element={<AdminProtectedRoute><CompanyApproval/></AdminProtectedRoute>}/>
    <Route path="/university/login" element={<UniversityLogin/>}/>
    <Route path="/university/dashboard" element={<UniversityDashboard/>}/>
    <Route path="/university/addCertificate" element={<AddCertificate/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;