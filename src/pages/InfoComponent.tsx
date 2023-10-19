import { Tabs, Row, Col } from "antd";
import DataComponent from "../components/DataComponent";

const { TabPane } = Tabs;

const InfoComponent = ({ record }: any) => {
  return (
    <div className="content-scroll">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <DataComponent record={record} />
        </Col>
      </Row>
    </div>
  );
};

export default InfoComponent;
