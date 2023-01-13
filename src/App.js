import "./App.css"
import Login from './Components/Login';
import {Route,Routes} from "react-router-dom";
import SignUp from './Components/SignUp';
import Header from './Components/Header';

function App() {
  return (
    <>
     <Header/>
     
    <Routes>
     <Route  path = "/" element = {<Login/>}></Route>
     <Route path = "/SignUp" element={<SignUp/>}></Route>
     </Routes>
    </>
  );
}

export default App;

