import React from "react";
import { Row, Col, Select, Form, Input, Button } from "antd";

const { Option } = Select;
const { Item } = Form;

const initialValues = {
  framework: "",
  nodeNumber: 0,
  edgeNumber: 0
};

export default function Tool(props) {
  const { time, loading, initGraph, changeGraph } = props;

  function handleInit({ framework, nodeNumber, edgeNumber }) {
    initGraph(framework, nodeNumber, edgeNumber);
  }

  return (
    <Form className="tool" initialValues={initialValues} onFinish={handleInit}>
      <Row gutter={10} className="tool-row">
        <Col span={6} className="tool-column">
          <Item label="框架：" name="framework" className="tool-item">
            <Select className="select" placeholder="选择一个框架">
              <Option value="logicflow">Logic Flow</Option>
              <Option value="x6">X6</Option>
            </Select>
          </Item>
          <Item label="节点数量：" name="nodeNumber" className="tool-item">
            <Input type="number" />
          </Item>
          <Item label="连线数量：" name="edgeNumber" className="tool-item">
            <Input type="number" />
          </Item>
        </Col>
        <Col span={6} className="tool-column">
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            loading={loading}
          >
            初始化渲染
          </Button>
        </Col>
        <Col span={6} className="tool-column"></Col>
        <Col span={6} className="tool-column">
          <div>渲染时间：{time} ms</div>
        </Col>
      </Row>
    </Form>
  );
}
