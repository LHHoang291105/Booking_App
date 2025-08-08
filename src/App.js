import { BrowserRouter, Routes , Route  } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import List from './pages/list/List.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
           <Route path="/hotels/:id" element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
