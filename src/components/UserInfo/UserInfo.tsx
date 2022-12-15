import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { UserInfoStyles } from "./UserInfoStyles.styled";

const UserInfo: React.FC = () => {
  const { user } = useAuth();
  console.log("user :>> ", user);
  return (
    <UserInfoStyles>
      <div className="img-user">
        <img src="/images/avatar2.png" alt="avatar" />
      </div>
      <div className="content-user">
        <p className="user">
          <span>User: </span>
          <span>{user.username}</span>
        </p>
        <p className="point">
          <span>Point: </span>
          <span>2488</span>
        </p>
      </div>
    </UserInfoStyles>
  );
};

export default UserInfo;
