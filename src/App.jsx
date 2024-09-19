import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Borrowers from "@/pages/Borrowers/Borrowers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="borrowers" element={<Borrowers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
