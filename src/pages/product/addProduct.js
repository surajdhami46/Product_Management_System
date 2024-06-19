import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Toast } from 'bootstrap';
import TextArea from 'antd/es/input/TextArea';


const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [form] = Form.useForm();
  const param = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('New Product Added Successfullt !');
  };
  const params = useParams()

  const addproduct = async (values) => {
    setLoading(true);
    try {

      if (params.id) {
        const { data } = await axios.put(`https://dummyjson.com/products/${params.id}`, values);
        if (data) {
          setLoading(false);
          setProduct(data);
          info()
        }
      } else {

        const { data } = await axios.post(`https://dummyjson.com/products/add`, values);
        if (data) {
          setLoading(false);
          setProduct(data);
          info()
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    addproduct(values);
  };




  const singleData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${[params.id]}`)

    form.setFieldsValue({
      title: data.title,
      description: data.description,
      price: data.price
    })

    console.log(data)


  }


  useEffect(() => {
    if ([params.id]) {
      singleData()
    }

  }, [params])


  return (

    <section className=' flex items-center justify-center'>
      {contextHolder}
      <Form
        form={form}
        name="wrap"
        layout='vertical'
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
          label="price"
          name="price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type='number' />
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
          <TextArea size='100' />
        </Form.Item>
        <Form.Item label=" ">
          <Button type="primary" htmlType="submit" loading={loading}>
            {params.id ? 'Update' : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AddProduct;
