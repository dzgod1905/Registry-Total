import { Form, Input, Button, ConfigProvider } from "antd";
import { useState } from "react";
import classes from "./../styles/Reset.module.css";
import { IoMailOutline } from "react-icons/io5";

interface FindEmailProps {
  openNotification: (title: string, message: string) => void;
  setStatus: (status: string) => void;
  setFindingEmail: (findingEmail: boolean) => void;
  setVerifying: (verifying: boolean) => void;
  next: () => void;
  turnOffForgotMode: () => void;
}

const FindEmail = (props: FindEmailProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values: { email: string }) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/users/forgotPassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        props.openNotification("Lỗi", "Không tìm thấy email này.");
        props.setStatus("error");
        setIsSubmitting(false);
        throw new Error("Could not find email.");
      }
      console.log(response);
      props.setStatus("finish");
      props.setFindingEmail(false);
      props.setVerifying(true);
      props.next();
    } catch (err) {
      console.error(err);
      console.log("loi me roi dit cu");
    }
  };

  return (
    <Form name="findEmail" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Hãy nhập email",
          },
        ]}
      >
        <Input
          prefix={<IoMailOutline className={classes.icon} />}
          placeholder="Email"
          type="email"
          autoComplete="off"
          size="large"
          className={classes.input}
          style={{ paddingLeft: ".4rem" }}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={classes.button}
          size="large"
          loading={isSubmitting}
          style={{ fontSize: "1.6rem" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang tìm kiếm" : "Tiếp tục"}
        </Button>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
              colorTextDisabled: "rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          <Button
            htmlType="button"
            className={classes.button}
            style={{ height: "4.2rem" }}
            disabled={isSubmitting}
            onClick={() => {
              props.turnOffForgotMode();
            }}
          >
            Trở về đăng nhập
          </Button>
        </ConfigProvider>
      </Form.Item>
    </Form>
  );
};

export default FindEmail;