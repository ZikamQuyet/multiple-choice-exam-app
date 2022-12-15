import styled from "styled-components";

export const DashboardHeaderStyles = styled.div`
  display: flex;
  gap: 1.75rem;
  justify-content: space-between;
  .search {
    display: flex;
    width: 80%;
    border: 1px solid #000;
    input {
      width: 90%;
    }
    button {
      width: 10%;
    }
  }
  .drop-down {
    width: 20%;
    appearance: none;
    background-image: url("images/icon/drop-down.svg");
    background-repeat: no-repeat;
    background-position: right 0.75rem top 50%;
    background-size: 2rem auto;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    .drop-down {
      display: none;
    }
    .search {
      width: 100%;
    }
  }
`;