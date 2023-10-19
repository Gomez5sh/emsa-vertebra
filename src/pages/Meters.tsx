import moment from "moment";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import InfoComponent from "./InfoComponent";
import { items, items2 } from "../data/Meters";
import { Tabs, Row, Col, Space, Drawer, Button } from "antd";

const { TabPane } = Tabs;

const Meters = () => {
  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState([] as any);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setRecord([]);
    setVisible(false);
  };

  return (
    <Fragment>
      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-1 h-full w-full top-1">
        <div className="m-1 md:m-2 mt-1 p-1 md:p-2 bg-white rounded-3xl w-full flex flex-wrap lg:flex-nowrap shadow-lg">
          <Tabs defaultActiveKey="1">
            <TabPane
              tab="Etapa 1"
              key="1"
              style={{ padding: 0, margin: 0, width: "100%" }}
            >
              <div className="content-scroll">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {items.map((element: any, index: number) => {
                    //"2 de noviembre 2022"
                    //1,8,15,22
                    const d1 = element.dummy
                      ? moment().format("YYYY-MM-DD")
                      : moment()
                          .set({ days: parseInt(moment().format("d")) - 2 })
                          .format("YYYY-MM-DD");

                    return (
                      <Col
                        flex={3}
                        key={`itemOne-${index}`}
                        style={{
                          maxWidth: 350,
                        }}
                      >
                        <div
                          onClick={() => {
                            setRecord([element]);
                            showDrawer();
                          }}
                          className="bg-white dark:text-gray-200 transition-all dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center h-fit  hover:shadow-lg border-2 hover:bottom-0 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <Space size="small" align="baseline">
                                {element.dummy ? (
                                  <motion.div
                                    style={{
                                      width: "1rem",
                                      height: "1rem",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: "5px",
                                      backgroundColor: "#00FFAB",
                                    }}
                                    animate={{
                                      scale: [1, 1.4, 1.4, 1, 1],
                                      borderRadius: [
                                        "20%",
                                        "20%",
                                        "50%",
                                        "50%",
                                        "20%",
                                      ],
                                      rotate: [0, 0, 270, 270, 0],
                                    }}
                                    transition={{
                                      duration: 3,
                                      ease: "easeInOut",
                                      yoyo: Infinity,
                                    }}
                                  />
                                ) : (
                                  <motion.div
                                    style={{
                                      width: "1rem",
                                      height: "1rem",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: "5px",
                                      backgroundColor: "#FF6464",
                                    }}
                                    animate={{
                                      scale: [1, 1.4, 1.4, 1, 1],
                                      borderRadius: [
                                        "20%",
                                        "20%",
                                        "50%",
                                        "50%",
                                        "20%",
                                      ],
                                      rotate: [0, 0, 270, 270, 0],
                                    }}
                                    transition={{
                                      duration: 3,
                                      ease: "easeInOut",
                                      yoyo: Infinity,
                                    }}
                                  />
                                )}
                                <p className="text-lg text-black z-7 flex flex-wrap">
                                  {element.punto}
                                </p>
                              </Space>
                              <p className="font-bold text-gray-400 text-md z-7">
                                {"Serial: " + element._id}
                              </p>
                              <p className="font-bold text-gray-400 text-md z-7">
                                {`Fecha: ${d1}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </TabPane>
            <TabPane tab="Etapa 2" key="2">
              <div className="content-scroll">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {items2.map((element: any, index: number) => {
                    const d1 = element.dummy
                      ? moment().format("YYYY-MM-DD")
                      : moment()
                          .set({ days: parseInt(moment().format("d")) - 2 })
                          .format("YYYY-MM-DD");
                    return (
                      <Col flex={3} key={`itemOne-${index}`}>
                        <div
                          onClick={() => {
                            setRecord([element]);
                            showDrawer();
                          }}
                          className="bg-white dark:text-gray-200 transition-all dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center h-fit  hover:shadow-lg border-2 hover:bottom-0 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <Space size="small" align="baseline">
                                {element.dummy ? (
                                  <motion.div
                                    style={{
                                      width: "1rem",
                                      height: "1rem",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: "5px",
                                      backgroundColor: "#00FFAB",
                                    }}
                                    animate={{
                                      scale: [1, 1.4, 1.4, 1, 1],
                                      borderRadius: [
                                        "20%",
                                        "20%",
                                        "50%",
                                        "50%",
                                        "20%",
                                      ],
                                      rotate: [0, 0, 270, 270, 0],
                                    }}
                                    transition={{
                                      duration: 3,
                                      ease: "easeInOut",
                                      yoyo: Infinity,
                                    }}
                                  />
                                ) : (
                                  <motion.div
                                    style={{
                                      width: "1rem",
                                      height: "1rem",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: "5px",
                                      backgroundColor: "#FF6464",
                                    }}
                                    animate={{
                                      scale: [1, 1.4, 1.4, 1, 1],
                                      borderRadius: [
                                        "20%",
                                        "20%",
                                        "50%",
                                        "50%",
                                        "20%",
                                      ],
                                      rotate: [0, 0, 270, 270, 0],
                                    }}
                                    transition={{
                                      duration: 3,
                                      ease: "easeInOut",
                                      yoyo: Infinity,
                                    }}
                                  />
                                )}
                                <p className="text-lg text-black z-7 flex flex-wrap">
                                  {element.punto}
                                </p>
                              </Space>
                              <p className="font-bold text-gray-400 text-md z-7">
                                {"Serial: " + element._id}
                              </p>
                              <p className="font-bold text-gray-400 text-md z-7">
                                {`Ultima conexion: ${d1}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Drawer
        mask
        width="60%"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        forceRender
        destroyOnClose
        footer={
          <Button
            onClick={onClose}
            shape="round"
            size="small"
            type="primary"
            style={{
              backgroundColor: "#051467",
              border: "none",
              width: "100%",
              maxWidth: 200,
            }}
          >
            Cerrar
          </Button>
        }
      >
        <InfoComponent record={record} />
      </Drawer>
    </Fragment>
  );
};

export default Meters;
