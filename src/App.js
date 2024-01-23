import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Cadastro} from "./components/Cadastro";


function App() {
  return (
    <div>
        <Header></Header>
        <BrowserRouter>
            <Routes>
                <Route path="/Cadastro" element={<Cadastro/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
