import { Tooltip } from "antd";
import { motion } from "framer-motion";
import { BiBulb } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { HiChartBar, HiCalculator } from "react-icons/hi";
import { useContextState } from "../contexts/ContextProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, login } = useContextState();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900 && !login) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 bg-white border-2 shadow-lg";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const links = [
    {
      title: "Tableros",
      links: [
        {
          name: "tension",
          icon: <HiChartBar />,
        },
        {
          name: "medidores",
          icon: <HiCalculator />,
        },
      ],
    },
  ];

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-[#051367]"
    >
      {login && (
        <>
          {activeMenu && (
            <>
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  onClick={handleCloseSideBar}
                  className="items-center gap-3 ml-3 mt-4 flex text-3xl font-extrabold tracking-tight text-white"
                >
                  <BiBulb />
                  <span>
                    SMART<span className="text-[#90E0EF]">ECO</span>
                  </span>
                </Link>
                <Tooltip title="Menu" placement="bottom">
                  <button
                    type="button"
                    onClick={() => setActiveMenu(!activeMenu)}
                    className="text-xl rounded-full p-3 hover:bg-ligth-gray mt-4 block md:hidden"
                  >
                    <MdOutlineCancel />
                  </button>
                </Tooltip>
              </div>
              <div className="mt-10">
                {links.map((item: any) => (
                  <div key={item.title}>
                    <p className="text-[#90E0EF] m-3 mt-4 uppercase focus:text-gray-600/60">
                      {item.title}
                    </p>
                    {item.links.map((link: any) => (
                      <NavLink
                        key={link.name}
                        to={`/${link.name}`}
                        onClick={handleCloseSideBar}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </motion.div>
  );
};

export default SideBar;
