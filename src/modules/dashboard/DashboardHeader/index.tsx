import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import { DashboardHeaderStyles } from "./DashboardHeaderStyles.styled";

const DashboardHeader: React.FC = () => {
  const { control } = useForm();
  return (
    <DashboardHeaderStyles>
      <div className="search">
        <Input control={control} type="text" name="search" />
        <Button bgColor="#fff">
          <img src="/images/icon/image3.png" alt="icon" />
        </Button>
      </div>

      <Dropdown height="100%" width="100%" className="drop-down" />
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
