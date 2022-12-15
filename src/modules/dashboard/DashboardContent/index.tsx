import React from "react";
import DashboardFooter from "../DashboardFooter";
import DashboardHeader from "../DashboardHeader";
import DashboardTest from "../DashboardTest/DashboardTest";
import { DashboardContentStyles } from "./DashboardContentStyles.styled";

const DashboardContent: React.FC = () => {
  return (
    <DashboardContentStyles>
      <DashboardHeader />
      <DashboardTest />
      <DashboardFooter />
    </DashboardContentStyles>
  );
};

export default DashboardContent;
