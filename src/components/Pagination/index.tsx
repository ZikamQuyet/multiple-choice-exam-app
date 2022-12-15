import React from "react";
import Button from "../Button";
import { PaginationStyles } from "./PaginationStyles.styled";

const Pagination: React.FC = () => {
  return (
    <PaginationStyles>
      <li>
        <Button width="32px" height="32px" borderRadius="4px" bgColor="#919EAB">
          <img src="/images/icon/back.svg" alt="" />
        </Button>
      </li>
      <li>
        <Button width="32px" height="32px" borderRadius="4px">
          1
        </Button>
      </li>

      <li>
        <Button width="32px" height="32px" borderRadius="4px">
          2
        </Button>
      </li>
      <li>
        <Button width="32px" height="32px" borderRadius="4px">
          ...
        </Button>
      </li>
      <li>
        <Button width="32px" height="32px" borderRadius="4px">
          9
        </Button>
      </li>
      <li>
        <Button width="32px" height="32px" borderRadius="4px">
          <img src="/images/icon/next.svg" alt="" />
        </Button>
      </li>
    </PaginationStyles>
  );
};

export default Pagination;
