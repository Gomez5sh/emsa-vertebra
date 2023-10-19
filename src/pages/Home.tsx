import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Logo from "../data/undraw_data_extraction_re_0rd3.svg";
import { VscExtensions, VscSave } from "react-icons/vsc";

const Home = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div
        style={{
          height: "100vh",
          maxHeight: "85vh",
        }}
        className="m-1 md:m-2 mt-1 p-1 md:p-10 bg-white rounded-3xl w-full flex flex-wrap lg:flex-nowrap shadow-lg"
      >
        <Row gutter={[8, 8]} justify="center" style={{ width: "100%" }}>
          <Col span={12}>
            <Link
              to="/tension"
              className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 w-full top-1"
            >
              <div className="bg-white dark:text-gray-200 cursor-pointer transition-all dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center h-fit  hover:shadow-lg border-2 hover:bottom-0">
                <div className="flex items-center justify-between">
                  <div>
                    <VscExtensions className="text-4xl text-black" />
                    <p className="text-2xl text-black z-7 cursor-pointer">
                      Tablero de ausencia de tensioón
                    </p>
                    <p className="font-bold text-gray-400 text-md z-7 cursor-pointer">
                      Medición de metricas de tablero de tensión
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col span={12}>
            <Link
              to="/medidores"
              className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 w-full top-1"
            >
              <div className="bg-white dark:text-gray-200 cursor-pointer dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center h-fit hover:shadow-lg border-2 hover:bottom-0">
                <div className="flex items-center justify-between">
                  <div>
                    <VscSave className="text-4xl text-black" />
                    <p className="text-2xl text-black z-7 cursor-pointer">
                      Tablero de estado de medidores
                    </p>
                    <p className="font-bold text-gray-400 text-md z-7 cursor-pointer">
                      Validción de estado de medidores por etapa
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <img src={Logo} alt="Logo emsa smart eco" className="w-1/2 h-auto" />
        </Row>
      </div>
    </div>
  );
};

export default Home;
