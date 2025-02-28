import {
  Button,
  Input,
  Form,
  Row,
  Col,
  Divider,
  message,
  notification
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/context/auth.context";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false); //setLoading = false để cho nó không xoayxoay

  const onFinish = async (values) => {
    setLoading(true); // để cho nó xoayxoay
    const res = await loginAPI(values.email, values.password);
    if (res.data) {
      message.success("login success");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(res.data.user);
      navigate("/");
    } else {
      notification.error({
        message: "Error Login",
        description: JSON.stringify(res.message)
      });
    }
    setLoading(false); // tắt xoay
  };

  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <legend style={{ textAlign: "center" }}>ANTIN CENIMA</legend>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email khong duoc de trong!"
                },
                {
                  type: "email",
                  message: "Email khong dung dinh dang"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password khong duoc de trong!"
                }
              ]}
            >
              <Input.Password
                onKeyDown={(event) => {
                  if (event.key === "Enter") form.submit();
                }}
              />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  textAlign: "center"
                }}
              >
                <Button
                  loading={loading}
                  type="primary"
                  onClick={() => form.submit()}
                >
                  Login
                </Button>
              </div>
            </Form.Item>
          </Form>
          <Divider />
          <div style={{ textAlign: "center" }}>
            Do not have an account? <Link to={"/register"}>Register</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
