import logo from './logo.svg';
import './App.css';
import ApiCall from './Components/ApiCall';
import Create from './Components/Create';
import Read from './Components/Read';
import Edit from './Components/Edit';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
