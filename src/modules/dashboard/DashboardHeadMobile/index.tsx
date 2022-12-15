import React from "react";
import Button from "../../../components/Button";
import { useOpen } from "../../../contexts/open-context";
import { DashboardHeadMobileStyles } from "./DashboardHeadMobileStyles.styled";

interface IDashboardHeadMobile {
  children?: string;
}

const DashboardHeadMobile: React.FC<IDashboardHeadMobile> = ({
  children,
  ...rest
}) => {
  const { isOpenMenu, setIsOpenMenu } = useOpen();
  return (
    <DashboardHeadMobileStyles {...rest}>
      <Button bgColor="none" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <img src="images/icon/btn-menu.svg" alt="" />
      </Button>
      <h3>{children}</h3>
      <div></div>
    </DashboardHeadMobileStyles>
  );
};

export default DashboardHeadMobile;
