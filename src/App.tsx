import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/auth-context";
import { QuizProvider } from "./contexts/datatQuestionsContext";
import { OpenProvider } from "./contexts/open-context";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardClient from "./pages/DashboardClient/DashboardClient";
import Exam from "./pages/Exam";
import ExamFinish from "./pages/ExamFinish";
import Login from "./pages/Login";

import NotFoundPage from "./pages/NotFoundPage";
import { theme } from "./utils/constants";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <OpenProvider>
          <QuizProvider>
            <Routes>
              <Route path="/" element={<DashboardClient />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/exam/:examIndex/:questionIndex"
                element={<Exam />}
              ></Route>
              <Route path="/exam-finish" element={<ExamFinish />}></Route>
              <Route
                path="/dashboard-admin"
                element={<DashboardAdmin />}
              ></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </QuizProvider>
        </OpenProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
