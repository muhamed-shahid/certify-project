import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/admin/login" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;