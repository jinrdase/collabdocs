import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@pages/auth/LoginPage";
import RegisterPage from "@pages/auth/RegisterPage";
import DocumentListPage from "@pages/documents/DocumentListPage";
import { env } from "./config/env";

console.log("API Base URL:", env.apiBaseUrl);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/documents" element={<DocumentListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
