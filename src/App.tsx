import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/main-layout"
import Population from "./pages/population"
import Finances from "./pages/finances"
import Weather from "./pages/weather"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route path="population" element={<Population/>}></Route>
            <Route path="weather" element={<Weather/>}></Route>
            <Route path="finances" element={<Finances/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
