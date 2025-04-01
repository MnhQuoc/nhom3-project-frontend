import './App.css'
import {Route, Routes} from "react-router";
// import Dashboard from "./pages/Dashboard/index.jsx";
import Master from "./components/Admin/Layout/Master.jsx";
import ClothesList from "./pages/Clothes/ClothesList/index.jsx";
import Manshirt from "./pages/Clothes/manshirt/index.jsx";
import Mantrouser from "./pages/Clothes/Mantrouser/index.jsx";
import Accessory from "./pages/Clothes/Accessory/index.jsx";
import SignIn from "./pages/Login/index.jsx";

function App() {
  return (
    <>
       <Routes>
           <Route path="/login" element={<SignIn />} />
           <Route path="/admin" element={<Master/>}>
               <Route path="clothes" element={<ClothesList />} />
               <Route path="manshirt" element={<Manshirt />} />
               <Route path="mantrouser" element={<Mantrouser />} />
               <Route path="accessory" element={<Accessory />} />
           </Route>
       </Routes>
    </>
  )
}

export default App
