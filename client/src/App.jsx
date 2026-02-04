import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import UniversityApproval from "./pages/admin/UniversityApproval";
import CompanyApproval from "./pages/admin/CompanyApproval";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import UniversityLogin from "./pages/university/UniversityLogin";
import UniversityDashboard from "./pages/university/UniversityDashboard";
import AddCertificate from "./pages/university/AddCertificate";
import ViewCertificate from "./pages/university/ViewCertificate";
import CompanyLogin from "./pages/company/CompanyLogin";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import VerifyCertificate from "./pages/company/VerifyCertificate";

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
    <Route path="/university/viewCertificate" element={<ViewCertificate/>}/>
    <Route path="/company/login" element={<CompanyLogin/>}/>
    <Route path="/company/dashboard" element={<CompanyDashboard/>}/>
    <Route path="/company/verifyCertificate" element={<VerifyCertificate/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;