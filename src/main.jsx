import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import "./styles/global.css";
import { AuthWrapper } from "./components/context/auth.context";
// import PrivateRoute from "./pages/private.route";
import ErrorPage from "./pages/error";
import App from "./App";
import LichChieu from "./pages/header/lich-chieu/lichChieu";
import PhimDangChieu from "./pages/header/phim/phimDangChieu";
import PhimSapChieu from "./pages/header/phim/phimSapChieu";
import UuDai from "./pages/header/uu-dai/uuDai";
import QuaMungLenHangUuDai from "./pages/header/uu-dai/quaMungLenHangUuDai";
import QuaTangSinhNhatThanhVien from "./pages/header/uu-dai/quaTangSinhNhatThanhVien";
import UuDaiVNPayQr from "./pages/header/uu-dai/uuDaiVNPayQr";
import TinTucPhim from "./pages/header/tin-tuc-phim/tinTucPhim";
import HuongDanKhuVucGuiXe from "./pages/header/tin-tuc-phim/huongDanKhuVucGuiXe";
import QuyDinhRapPhim from "./pages/header/tin-tuc-phim/quyDinhRapPhim";
import TaiKhoan from "./pages/header/thanh-vien/taiKhoan";
import QuyenLoi from "./pages/header/thanh-vien/quyenLoi";
import KhuyenMaiU22 from "./pages/header/uu-dai/khuyenMaiU22";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/lich-chieu-phim",
        element: <LichChieu />,
        errorElement: <ErrorPage />
      },
      {
        path: "/phim-dang-chieu",
        element: <PhimDangChieu />,
        errorElement: <ErrorPage />
      },
      {
        path: "/phim-sap-chieu",
        element: <PhimSapChieu />,
        errorElement: <ErrorPage />
      },
      {
        path: "/uu-dai",
        element: <UuDai />,
        errorElement: <ErrorPage />
      },
      {
        path: "/qua-mung-len-hang-uu-dai-thanh-vien",
        element: <QuaMungLenHangUuDai />,
        errorElement: <ErrorPage />
      },
      {
        path: "/khuyen-mai-gia-ve-u22",
        element: <KhuyenMaiU22 />,
        errorElement: <ErrorPage />
      },
      {
        path: "/qua-tang-sinh-nhat-thanh-vien",
        element: <QuaTangSinhNhatThanhVien />,
        errorElement: <ErrorPage />
      },
      {
        path: "/xem-phim-metiz-thoa-thich-cung-uu-dai-sieu-hoi-tu-vnpay-qr",
        element: <UuDaiVNPayQr />,
        errorElement: <ErrorPage />
      },
      {
        path: "/super-monday-thu-hai-sieu-hang",
        element: <UuDaiVNPayQr />,
        errorElement: <ErrorPage />
      },
      {
        path: "/tin-tuc-phim",
        element: <TinTucPhim />,
        errorElement: <ErrorPage />
      },
      {
        path: "/huong-dan-loi-vao-khu-vuc-giu-xe",
        element: <HuongDanKhuVucGuiXe />,
        errorElement: <ErrorPage />
      },
      {
        path: "/nhung-quy-dinh-tai-rap-phim",
        element: <QuyDinhRapPhim />,
        errorElement: <ErrorPage />
      },
      {
        path: "/tai-khoan",
        element: <TaiKhoan />,
        errorElement: <ErrorPage />
      },
      {
        path: "/quyen-loi",
        element: <QuyenLoi />,
        errorElement: <ErrorPage />
      }

      // {
      //   path: "/books",
      //   element: <PrivateRoute>{/* <BookPage /> */}</PrivateRoute>,
      //   errorElement: <ErrorPage />,
      // },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
);
