import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
const { Option } = Select;

const AddNewIngrendient = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined className="plus_add_button" />}
      >
        Thêm thành phần mới vào danh sách
      </Button>
      <Drawer
        title="Thêm thành phần mới vào danh sách"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Về Danh Sách</Button>
            <Button onClick={onClose} type="primary">
              Thêm
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="ingredient_name"
                label="Tên thành phần:"
                rules={[
                  {
                    required: true,
                    message: "Bạn không được để trống tên thành phần",
                  },
                ]}
              >
                <Input placeholder="Tên thành phần" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="seasson_id"
                label="Mùa của thành phần này:"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập mùa thành phần!",
                  },
                ]}
              >
                <Select placeholder="Chọn mùa">
                  <Option value="spring">Xuân</Option>
                  <Option value="summer">Hạ</Option>
                  <Option value="fall">Thu</Option>
                  <Option value="winter">Đông</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="fat"
                label="Hàm lượng chất béo:"
                rules={[
                  {
                    required: true,
                    message: "Chất béo của món ăn chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất béo món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Protein"
                label="Hàm lượng Protein:"
                rules={[
                  {
                    required: true,
                    message: "Protein chưa nhập!!!",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Protein món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Carbon"
                label="Hàm lượng Carbon:"
                rules={[
                  {
                    required: true,
                    message: "Carbon chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Carbon món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Calories"
                label="Hàm lượng Calories:"
                rules={[
                  {
                    required: true,
                    message: "Calories chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Calories món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng vitamin:"
                rules={[
                  {
                    required: true,
                    message: "vitamin chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Vitamin món ăn chứa" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="vitamin"
                label="Hàm lượng Micronutrium:"
                rules={[
                  {
                    required: true,
                    message: "Micronutrium chưa nhập",
                  },
                ]}
              >
                <Input placeholder="Hàm lượng chất Micronutrium món ăn chứa" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewIngrendient;
