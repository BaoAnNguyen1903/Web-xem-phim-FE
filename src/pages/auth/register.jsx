import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserAPI } from "../../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    if (res.data) {
      notification.success({
        message: "Register user",
        description: "Dang ky thanh cong"
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Register user error",
        description: JSON.stringify(res.message)
      });
    }
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ margin: "10px" }}
      //   onFinishFailed={onFinishFailed}
    >
      <h3 style={{ textAlign: "center" }}>Dang ky tai khoan</h3>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!"
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!"
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Password" // giống thẻ spanspan
            name="password"
            rules={[
              {
                required: true, // dấu * đỏ thể hiện bắt buộc phải nhập vào
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!"
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <div>
            <Button onClick={() => form.submit()} type="primary">
              Register
            </Button>

            <Button
              onClick={() => {
                form.setFieldsValue({
                  email: "anndbdeptrai@gmail.com",
                  fullName: "an dep trai"
                });
              }}
            >
              Test
            </Button>
          </div>
          <Divider />
          <div>
            Da co tai khoan? <Link to={"/login"}>Dang nhap tai day</Link>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default RegisterPage;
