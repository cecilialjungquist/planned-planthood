import './App.css';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  // TO DO
  // * Fixa så att man kan ta bort planteringar
  // * Fixa så att man kan klicka på planteringskorten och få upp "en ny sida"

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="plant" element={<Plant />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

  )
}

export default App;