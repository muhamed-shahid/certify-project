import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import UniversityApproval from "./pages/admin/UniversityApproval";
import CompanyApproval from "./pages/admin/CompanyApproval";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/admin/login" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
    <Route path="/admin/univerities" element={<UniversityApproval/>}/>
    <Route path="/admin/companies" element={<CompanyApproval/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;