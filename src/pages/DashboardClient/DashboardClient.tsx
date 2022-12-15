import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import DashboardContent from "../../modules/dashboard/DashboardContent";
import DashboardHeadMobile from "../../modules/dashboard/DashboardHeadMobile";
import DashboardUserInfo from "../../modules/dashboard/DashboardUserInfo";
import { DashboardClientStyles } from "./DashboardClientStyles.styled";


const DashboardClient: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);

  useEffect(() => {
    if (!user?.username) navigate("/login");
  }, [user]);

  return (
    <DashboardClientStyles>
      <DashboardHeadMobile>Dashboard</DashboardHeadMobile>
      <DashboardUserInfo></DashboardUserInfo>
      <DashboardContent></DashboardContent>
    </DashboardClientStyles>
  );
};

export default DashboardClient;
