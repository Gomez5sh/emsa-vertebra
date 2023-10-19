import { Descriptions, Row, Col, Image } from "antd";
import { images } from "../assets/ImagesJson";

const DataComponent = ({ record }: any) => {
  return (
    <Row gutter={[8, 8]} justify="center">
      {record && record.length
        ? record.map((element: any) => (
            <>
              <Col span={24}>
                <Descriptions
                  title="HOJA DE VIDA DE EQUIPOS INSTALADOS"
                  bordered
                >
                  <Descriptions.Item label="Proyecto:">
                    {element.project ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Realiza:">
                    {element.makes ?? " "}
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions title="1. DATOS DEL EQUIPO" bordered>
                  <Descriptions.Item label="Nombre del equipo:" span={3}>
                    {element.name ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="No. Contrato:" span={3}>
                    {element.contrac_number ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Instalado en el circuito:" span={3}>
                    {element.installed_circuit ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Marca del detector de tensión:"
                    span={2}
                  >
                    {element.detector_brand ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Serial del detector de tensión:"
                    span={2}
                  >
                    {element.detector_serial ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Marca del receptor:" span={2}>
                    {element.receiver_brand ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Serial del receptor:" span={2}>
                    {element.receiver_serial ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Estado del equipo:" span={2}>
                    {element.equipment_status ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Número SIM card:" span={2}>
                    {element.sim_number ?? " "}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={24}>
                <Descriptions title="2. INSTALACIÓN DEL EQUIPO" bordered>
                  <Descriptions.Item label="Fecha de instalación:" span={3}>
                    {element.instalation_date ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Ubicación de instalación:" span={3}>
                    {element.instalation_location ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="No. del transformador:" span={2}>
                    {element.transformer_number ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Nivel de tensión:" span={2}>
                    {element.tension_levelOne ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Desenergización realizada:"
                    span={2}
                  >
                    {element.de_energization ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Nivel de tensión:" span={2}>
                    {element.tension_levelTwo ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Entrada en operación:" span={2}>
                    {element.tension_levelTwo ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Equipos energizados:">
                    {element.energization_equipment ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Comunicación detector - receptor:">
                    {element.communication_receiver_detector ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Transmisión de señal - servidor:">
                    {element.signal_transmission_server ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Detección de tensión:">
                    {element.voltage_detection ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Comunicación repector - servidor:">
                    {element.Repector_server_communication ?? " "}
                  </Descriptions.Item>
                  <Descriptions.Item label="Generación de alarmas - servidor:">
                    {element.Alarm_generation_server ?? " "}
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions bordered layout="vertical">
                  <Descriptions.Item label="Observaciones:" span={3}>
                    {element &&
                      element.observationsOne &&
                      element.observationsOne.length &&
                      element.observationsOne.map((item: any) => (
                        <ul>
                          <li>{`* ${item.coment}`}</li>
                        </ul>
                      ))}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={24}>
                <Descriptions
                  title="3. MANTENIMIENTO DEL EQUIPO"
                  bordered
                  column={4}
                  layout="vertical"
                >
                  {element &&
                    element.maintenance &&
                    element.maintenance.length &&
                    element.maintenance.map((element: any) => (
                      <>
                        <Descriptions.Item label="Fecha del mantenimiento">
                          {element.date ?? " "}
                        </Descriptions.Item>
                        <Descriptions.Item label="Motivo del mantenimiento">
                          {element.reason ?? " "}
                        </Descriptions.Item>
                        <Descriptions.Item label="Descripción del mantenimiento">
                          {element.description ?? " "}
                        </Descriptions.Item>
                        <Descriptions.Item label="Descripción del mantenimiento">
                          {element &&
                            element.managers &&
                            element.managers.length &&
                            element.managers.map((item: any) => (
                              <ul>
                                <li>{`* ${item.manager}`}</li>
                              </ul>
                            ))}
                        </Descriptions.Item>
                      </>
                    ))}
                </Descriptions>
                <Descriptions bordered layout="vertical">
                  <Descriptions.Item label="Observaciones:" span={3}>
                    {element &&
                      element.observationsOne &&
                      element.observationsOne.length &&
                      element.observationsOne.map((item: any) => (
                        <ul>
                          <li>{`* ${item.coment}`}</li>
                        </ul>
                      ))}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </>
          ))
        : []}
    </Row>
  );
};

export default DataComponent;
