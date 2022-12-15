import Button from "../../../components/Button";
import UserInfo from "../../../components/UserInfo/UserInfo";
import { useOpen } from "../../../contexts/open-context";
import { DashboardUserInfoStyles } from "./DashboardUserInfoStyles.styled";

interface IDashboardUserInfo {
  className?: string;
}

const DashboardUserInfo: React.FC<IDashboardUserInfo> = ({
  className,
  ...rest
}) => {
  const { isOpenMenu, setIsOpenMenu } = useOpen();
  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  // console.log("openInfo :>> ", isOpen);
  return (
    // setup display flex để hiển thị style={{ display: "block" }}
    <DashboardUserInfoStyles
      style={isOpenMenu ? { display: "block" } : undefined}
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      className={className}
      {...rest}
    >
      <div
        className="dashboard-user-info-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <UserInfo />
        <Button
          border="1px solid #000"
          bgColor="#C9CBCB"
          borderRadius="4px"
          width="174px"
          to={"/login"}
          onClick={handleLogout}
        >
          LOGOUT
        </Button>
      </div>
    </DashboardUserInfoStyles>
  );
};

export default DashboardUserInfo;
