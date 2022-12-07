import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import PopupLogin from "../modules/PopupLogin";

const DashboardClientStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("images/bg1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const DashboardClient: React.FC = () => {
  return (
    <DashboardClientStyles>
      <PopupLogin />
    </DashboardClientStyles>
  );
};

export default DashboardClient;
