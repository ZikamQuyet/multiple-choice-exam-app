import styled from "styled-components";

export const UserInfoStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  .content-user {
    font-weight: 700;
    line-height: 1.2rem;
    padding: 1rem;
    .user {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.5rem;
    }
  }
`;
