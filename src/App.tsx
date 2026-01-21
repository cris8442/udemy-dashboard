import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/main-layout"
import Population from "./pages/population"
import Finances from "./pages/finances"
import Weather from "./pages/weather"
import { FinancesProvider } from "./providers/FinancesProvider"

function App() {

  return (
    <>
    <FinancesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
              <Route path="population" element={<Population/>}></Route>
              <Route path="weather" element={<Weather/>}></Route>
              <Route path="finances" element={<Finances/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </FinancesProvider>
    </>
  )
}

export default App
