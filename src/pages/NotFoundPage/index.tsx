import React from "react";
import Button from "../../components/Button";
import { NotFoundPageStyles } from "./NotFoundPageStyles.styled";

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageStyles>
      <div className="content">
        <p>Not page</p>
        <Button to="/" padding="20px" borderRadius="8px">
          Go to home
        </Button>
      </div>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
