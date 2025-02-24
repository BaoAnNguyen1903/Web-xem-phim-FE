import { useContext } from "react";
import { AuthContext } from "../../components/context/auth.context";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);

  if (user && user.id) {
    return <>{props.children}</>;
  }
  //   return <Navigate to="/login" replace />; //sử dụng khi muốn redirect về 1 trang khác nếu k có quyền truy cập
  return (
    // sử dụng để thông báo họ không có quyền truy cập vào
    <Result
      status="4033"
      title="Unauthorize!"
      subTitle={"bạn cần đặng nhập để truy cập nguồn tài nguyên này"}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back to home</span>
          </Link>
        </Button>
      }
    />
  );
};

export default PrivateRoute;
