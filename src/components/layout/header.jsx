import { Link, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import {
  UsergroupAddOutlined,
  LoginOutlined,
  HomeOutlined,
  AuditOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
  const [current, setCurrent] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await logoutAPI();
    if (res.data) {
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      message.success("logout thanh cong");
      navigate("/");
    }
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/"}>
          Home
        </Link>
      ),
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/users"}>
          Users
        </Link>
      ),
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/books"}>
          Books
        </Link>
      ),
      key: "books",
      icon: <AuditOutlined />,
    },

    ...(!user.id // nếu không co user.id thì in ra nút login
      ? [
          {
            label: (
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                Dang nhap
              </Link>
            ),
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id // nếu có user.id thì in ra tên người dùngdùng
      ? [
          {
            label: `${user.fullName}`,
            key: `setting`,
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: <span onClick={() => handleLogout()}>dang xuat</span>,
                key: "logout",
              },
            ],
          },
        ]
      : []),
  ];
  return (
    // <ul>
    //     <li><NavLink to="/">Home</NavLink></li>
    //     <li><NavLink to="/login">Login</NavLink></li>
    //     <li><NavLink to="/user">User</NavLink></li>
    // </ul>

    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
//ân ăn cứtcứt
