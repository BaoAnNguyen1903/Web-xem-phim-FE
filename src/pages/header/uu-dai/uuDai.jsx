import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const uuDaiData = [
  {
    title: "QUÀ MỪNG LÊN HẠNG - ƯU ĐÃI THÀNH VIÊN METIZ 2025",
    date: "10/01/2025 - 31/12/2025",
    image: "/images/img-len-hang.png",
    link: "/qua-mung-len-hang-uu-dai-thanh-vien"
  },
  {
    title: "QUÀ TẶNG SINH NHẬT THÀNH VIÊN",
    date: "01/01/2024 - 31/12/2024",
    image: "/images/img-sinh-nhat.png",
    link: "/uu-dai/qua-sinh-nhat"
  },
  {
    title: "XEM PHIM CÙNG VNPAY - GIẢM ĐẾN 15K",
    date: "13/09/2023 - 31/10/2023",
    image: "/images/img-vnpay.png",
    link: "/uu-dai/vnpay"
  },
  {
    title: "SUPER MONDAY (THỨ HAI SIÊU HẠNG)",
    date: "13/09/2023 - 31/10/2023",
    image: "/images/img-super-monday.png",
    link: "/uu-dai/vnpay"
  }
];

const UuDai = () => {
  return (
    <div className="uudai-container">
      <h1 style={{ textAlign: "center", margin: "20px", fontSize: "28px" }}>
        KHUYẾN MÃI & ƯU ĐÃI
      </h1>
      <Row gutter={[16, 16]} justify="center" margin="20px">
        {uuDaiData.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Link to={item.link}>
              <Card
                cover={
                  <img
                    alt={item.title}
                    src={item.image}
                    className="uudai-image"
                  />
                }
              >
                <p className="uudai-date">{item.date}</p>
                <h3 className="uudai-title">{item.title}</h3>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UuDai;
