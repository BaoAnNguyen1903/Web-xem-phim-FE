import { Link, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import {
  LoginOutlined,
  AliwangwangOutlined,
  ScheduleOutlined,
  HomeOutlined,
  GiftOutlined,
  PlayCircleOutlined,
  UserOutlined
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
        id: ""
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
          HOME
        </Link>
      ),
      key: "home",
      icon: <HomeOutlined />
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/lich-chieu"}>
          LỊCH CHIẾU
        </Link>
      ),
      key: "lich-chieu",
      icon: <ScheduleOutlined />
    },
    {
      label: "PHIM",
      icon: <PlayCircleOutlined />,
      children: [
        {
          label: (
            <Link style={{ textDecoration: "none" }} to={"/phim-dang-chieu"}>
              PHIM ĐANG CHIẾU
            </Link>
          ),
          key: "phim-dang-chieu"
        },
        {
          label: (
            <Link style={{ textDecoration: "none" }} to={"/phim-sap-chieu"}>
              PHIM SẮP CHIẾU
            </Link>
          ),
          key: "phim-sap-chieu"
        }
      ]
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/uu-dai"}>
          ƯU ĐÃI
        </Link>
      ),
      key: "uu-dai",
      icon: <GiftOutlined />
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/tin-tuc-phim"}>
          TIN TỨC PHIM
        </Link>
      ),
      key: "tin-tuc-phim",
      icon: <GiftOutlined />
    },
    {
      label: "THÀNH VIÊN",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link style={{ textDecoration: "none" }} to={"/tai-khoan"}>
              TÀI KHOẢN
            </Link>
          ),
          key: "tai-khoan"
        },
        {
          label: (
            <Link style={{ textDecoration: "none" }} to={"/quyen-loi"}>
              QUYỀN LỢI
            </Link>
          ),
          key: "quyen-loi"
        }
      ]
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
            icon: <LoginOutlined />
          }
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
                key: "logout"
              }
            ]
          }
        ]
      : [])
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
