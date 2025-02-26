import { Link } from "react-router-dom";

const UuDai = () => {
  return (
    <div>
      <h1>KHUYẾN MÃI & ƯU ĐÃI</h1>
      <div>
        <ul>
          <li>
            <Link to="/qua-mung-len-hang-uu-dai-thanh-vien">
              <div className="product-poster">
                <div className="crop-square">
                  <img src="./images/img-len-hang.png" />
                </div>
                <div>
                  <div>
                    <h4>26/02/2025 - 28/02/2025</h4>
                  </div>
                  <h2>
                    QUÀ MỪNG LÊN HẠNG ƯU ĐÃI THÀNH VIÊN ÂN NGUYỄN CINEMA 2025
                  </h2>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link>
              <div className="product-poster">
                <div className="crop-square">
                  <img src="./images/img-sinh-nhat.png" />
                </div>
                <div>
                  <div>
                    <h4>26/02/2025 - 28/02/2025</h4>
                  </div>
                  <h2>QUÀ SINH NHẬT THÀNH VIÊN</h2>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link>
              <div className="product-poster">
                <div className="crop-square">
                  <img src="./images/img-vnpay.png" />
                </div>
                <div>
                  <div>
                    <h4>26/02/2025 - 28/02/2025</h4>
                  </div>
                  <h2>
                    XEM PHIM ÂN NGUYỄN THỎA THÍCH CÙNG ƯU ĐÃI SIÊU HỜI TỪ VNPAY
                  </h2>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link>
              <div className="product-poster">
                <div className="crop-square">
                  <img src="./images/img-len-hang.png" />
                </div>
                <div>
                  <div>
                    <h4>26/02/2025 - 28/02/2025</h4>
                  </div>
                  <h2>SUPER MONDAY (THỨ HAI SIÊU HẠNG)</h2>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UuDai;
