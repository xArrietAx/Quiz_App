import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Home } from "./Views/Home";
import { Game } from "./Views/Game";
import { Results } from "./Views/Results";
import { NotFound } from "./Views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Game" element={
          <ProtectedRoute>
            <Game />
          </ProtectedRoute>
        } />
        <Route path="/Results" element={
          <ProtectedRoute>
            <Results />
          </ProtectedRoute>
        } />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default App;