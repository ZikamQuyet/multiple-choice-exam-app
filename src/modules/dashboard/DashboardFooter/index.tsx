import React from "react";
import styled from "styled-components";
import Pagination from "../../../components/Pagination";

const DashboardFooterStyles = styled.div``;
const DashboardFooter: React.FC = () => {
  return (
    <DashboardFooterStyles>
      <Pagination />
    </DashboardFooterStyles>
  );
};

export default DashboardFooter;
