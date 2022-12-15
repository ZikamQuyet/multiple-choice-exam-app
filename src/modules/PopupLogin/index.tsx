import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button";
import Field from "../../components/Field";
import Input from "../../components/Input";
import Label from "../../components/Label/Label";
import { useForm } from "react-hook-form";
import PopupLoginStyles from "./PopupLoginStyles.styled";
import { toast } from "react-toastify";
import { dataUser } from "../../config/dataUser";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const schema = yup
  .object()
  .shape({
    username: yup.string().required("Please enter your username"),
    password: yup
      .string()
      .min(3, "Your password must be at least 3 characters or greater")
      .required("Please enter your password"),
  })
  .required();

const PopupLogin: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [userRM, setUserRM] = useState(
    JSON.parse(localStorage.getItem("userRM") || "{}")
  );

  useEffect(() => {
    if (user?.username) navigate("/");
  }, []);

  useEffect(() => {
    const arrErr: any = Object.values(errors);
    if (arrErr.length > 0) {
      toast.error(arrErr[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  const findUser = (listUser: any, value: any) => {
    return listUser.find(
      (item: any) =>
        item.username === value.username && item.password === value.password
    );
  };

  const handleSignIn = async (data: any) => {
    const user = await findUser(dataUser, data);
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      if (data.rememberMe) localStorage.setItem("userRM", JSON.stringify(data));
      else localStorage.setItem("userRM", JSON.stringify({}));
      if (user.type === "admin") navigate("/dashboard-admin");
      else navigate("/");
    } else {
      toast.error("error user or password", {
        pauseOnHover: false,
      });
    }
  };

  return (
    <PopupLoginStyles>
      <div className="avatar-login">
        <img src="/images/icon/image-1abc.svg" alt="logo" />
      </div>
      <form className="popup-login-form" onSubmit={handleSubmit(handleSignIn)}>
        <Field marginBottom="70px">
          <Label htmlFor="username" width="20%">
            <img src="/images/icon/image2.jpg" alt="icon" />
          </Label>
          <Input
            width="80%"
            type="text"
            name="username"
            placeholder="username"
            defaultValue={userRM.username}
            control={control}
          ></Input>
        </Field>

        <Field marginBottom="24px">
          <Label htmlFor="password" width="20%">
            <img src="/images/icon/icon-password.jpg" alt="icon" />
          </Label>
          <Input
            width="80%"
            type="password"
            name="password"
            control={control}
            defaultValue={userRM.password}
            placeholder="password"
          ></Input>
        </Field>

        <Field marginBottom="24px">
          <Input type="checkbox" name="rememberMe" control={control}></Input>
          <Label htmlFor="rememberMe" marginLeft="10px" fontWeight={700}>
            Remember me
          </Label>
        </Field>

        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          bgColor="#D9D9D9"
          borderRadius="4px"
          width="100%"
        >
          LOGIN
        </Button>
      </form>
    </PopupLoginStyles>
  );
};

export default PopupLogin;
