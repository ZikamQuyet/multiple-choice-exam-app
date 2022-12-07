import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardClient from "./pages/DashboardClient";
import Exam from "./pages/Exam";
import ExamFinish from "./pages/ExamFinish";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardClient />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/exam" element={<Exam />}></Route>
      <Route path="/exam-finish" element={<ExamFinish />}></Route>
      <Route path="/dashboard-client" element={<DashboardAdmin />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default App;
