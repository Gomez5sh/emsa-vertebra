import { useEffect } from "react";
import { Tooltip, message } from "antd";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { useContextState } from "../contexts/ContextProvider";
import { AiOutlineMenuUnfold, AiOutlineMenu } from "react-icons/ai";

const NavButton = ({
  title,
  custonFunc,
  icon,
  color,
  dotColor,
  login,
}: any) => (
  <>
    {login && (
      <Tooltip title={title} placement="bottom" color={color}>
        <button
          type="button"
          style={{ color }}
          onClick={() => custonFunc()}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
          <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          />
          {icon}
        </button>
      </Tooltip>
    )}
  </>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    login,
    setLogin,
    setUser,
  } = useContextState();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (screenSize && screenSize <= 900 && !login) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu, login]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        login={login}
        custonFunc={() => setActiveMenu(!activeMenu)}
        title={activeMenu ? "Cerrar Menu" : "Abrir Menu"}
        icon={activeMenu ? <AiOutlineMenu /> : <AiOutlineMenuUnfold />}
      />
      <div className="flex">
        <Link to="/">
          <NavButton
            login={login}
            custonFunc={() => {
              setActiveMenu(false);
              setLogin(false);
              setUser({
                user: {
                  name: "",
                  email: "",
                },
              });
              message.success("Sesión cerrada");
            }}
            title="Cerrar sesión"
            icon={<IoMdLogIn />}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
