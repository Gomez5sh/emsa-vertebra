import bg from "../data/fondo.png";
import Logo from "../data/logo.svg";
import { Button, Form, Input, message } from "antd";
import { useContextState } from "../contexts/ContextProvider";

const Login = () => {
  const { setLogin, setUser, setActiveMenu } = useContextState();

  const onFinish = (values: any) => {
    if (values.username === "admin" && values.password === "vertebra2022") {
      const user = {
        name: values.username,
        password: values.password,
      };
      setUser(user);
      setLogin(true);
      setActiveMenu(true);
      message.success("Inicio de sesión exitoso");
    } else {
      message.error("Error al iniciar sesión");
    }
  };

  return (
    <div
      className={`flex flex-wrap lg:flex-nowrap justify-center bg-[url(${bg})] bg-cover h-screen overflow-hidden bg-no-repeat w-screen max-h-full max-w-full`}
    >
      <div
        className={`mt-40 rounded-lg text-white text-md m-2 w-fit p-24 shadow-lg flex flex-col justify-center items-center hover:shadow-green-500/30 bg-white h-fit`}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "10rem",
            padding: "1rem",
          }}
        />
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              size="small"
              placeholder="Usuario"
              style={{ width: "100%", minWidth: 200 }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input.Password
              size="small"
              placeholder="Contraseña"
              style={{ width: "100%", minWidth: 200 }}
            />
          </Form.Item>
          <Button
            size="small"
            shape="round"
            type="primary"
            htmlType="submit"
            style={{ width: "100%", backgroundColor: "green", border: "none" }}
          >
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
