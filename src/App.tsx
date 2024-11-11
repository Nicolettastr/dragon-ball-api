import "./App.css";
import CharacterById from "./components/CharacterById";
import CharactersList from "./components/CharactersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CharacterProvider } from "./context/CharacterProvider";

const App = () => {
    return (
        <CharacterProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<CharactersList />} />
                    <Route path='/character/:id' element={<CharacterById />} />
                </Routes>
            </Router>
        </CharacterProvider>
    );
};

export default App;
