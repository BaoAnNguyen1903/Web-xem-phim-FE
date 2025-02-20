import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import "./styles/global.css";
import { AuthWrapper } from "./components/context/auth.context";
// import PrivateRoute from "./pages/private.route";
import Home from "./pages/home";
import ErrorPage from "./pages/error";
import App from "./App";
import LichChieu from "./pages/lichChieu";
import PhimDangChieu from "./pages/phimDangChieu";
import PhimSapChieu from "./pages/phimSapChieu";
import UuDai from "./pages/uu-dai/uuDai";
import QuaMungLenHangUuDai from "./pages/uu-dai/quaMungLenHangUuDai";
import QuaTangSinhNhatThanhVien from "./pages/uu-dai/quaTangSinhNhatThanhVien";
import UuDaiVNPayQr from "./pages/uu-dai/uuDaiVNPayQr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/lich-chieu-phim",
        element: <LichChieu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/phim-dang-chieu",
        element: <PhimDangChieu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/phim-sap-chieu",
        element: <PhimSapChieu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/uu-dai",
        element: <UuDai />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/qua-mung-len-hang-uu-dai-thanh-vien",
        element: <QuaMungLenHangUuDai />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/qua-tang-sinh-nhat-thanh-vien",
        element: <QuaTangSinhNhatThanhVien />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/xem-phim-metiz-thoa-thich-cung-uu-dai-sieu-hoi-tu-vnpay-qr",
        element: <UuDaiVNPayQr />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/super-monday-thu-hai-sieu-hang",
        element: <UuDaiVNPayQr />,
        errorElement: <ErrorPage />,
      },

      // {
      //   path: "/books",
      //   element: <PrivateRoute>{/* <BookPage /> */}</PrivateRoute>,
      //   errorElement: <ErrorPage />,
      // },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
);
