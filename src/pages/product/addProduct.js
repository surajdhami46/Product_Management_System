import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Toast } from 'bootstrap';


const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [form] = Form.useForm();
  const param = useParams();

  const addproduct = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`https://dummyjson.com/products/add`, values);
      if (data) {
        setLoading(false);
        setProduct(data);
        Toast("Product Added Successfully ")
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    addproduct(values);
  };

  return (
    <Form
      form={form}
      name="wrap"
      labelCol={{
        flex: '110px',
      }}
      labelAlign="left"
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      colon={false}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Product Name"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input the product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input the product description!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label=" ">
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
