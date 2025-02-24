import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined
} from "@ant-design/icons";
import "./footer.css";
import { Divider } from "antd";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <ul>
            <li>
              <a href="">
                <FacebookOutlined />
              </a>
            </li>
            <li>
              <a href="">
                <InstagramOutlined />
              </a>
            </li>
            <li>
              <a href="">
                <YoutubeOutlined />
              </a>
            </li>
          </ul>
        </div>

        <Divider style={{ width: "100%" }} />

        <div className="footer-columns">
          <div className="footer-column">
            <img src="" alt="" className="footer-logo" />
            <p>Tầng 1 Helio Center, Đường 2/9, Hải Châu, Đà Nẵng</p>
          </div>

          <div className="footer-column">
            <h2>AN NGUYEN CINEMA</h2>
            <ul>
              <li>
                <a href="">GIỚI THIỆU</a>
              </li>
              <li>
                <a href="">TUYỂN DỤNG</a>
              </li>
              <li>
                <a href="">LIÊN HỆ</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>THÔNG TIN CHUNG</h2>
            <ul>
              <li>
                <a href="">ĐIỀU KHOẢN CHUNG</a>
              </li>
              <li>
                <a href="">CÂU HỎI THƯỜNG GẶP</a>
              </li>
              <li>
                <a href="">ĐIỀU KHOẢN GIAO DỊCH</a>
              </li>
            </ul>
          </div>

          <div>story facebook</div>
        </div>

        <div className="footer-info">
          <p>Tên Doanh Nghiệp: Công Ty TNHH ÂN NGUYỄN.</p>
          <p>
            Giấy CNĐKKD: 0400668112 - Ngày cấp: 05/11/2008. Đăng ký thay đổi lần
            thứ 11 ngày 21/12/2016
          </p>
          <p>Cơ quan cấp: Đặng Thành Vinh</p>
          <p>
            Địa chỉ đăng ký kinh doanh: 22 đường 2/9, Phường Bình Hiên, Q.Hải
            Châu, Tp.Đà Nẵng, Việt Nam.
          </p>
          <p>Điện thoại: 0236 xxx xx</p>
        </div>

        <Divider style={{ width: "100%" }} />

        <div className="footer-bottom">
          <p>MỘT SẢN PHẨM ĐẾN TỪ ÂN NGUYỄN, ANNDB2.</p>
          <img src="" alt="" className="footer-logo" />
          <p>BẢN QUYỀN © 2025 ÂN NGUYỄN CINEMA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
