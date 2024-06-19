import React from "react";
import { Table, Space, message, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductTable = ({ products, loading }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      message.success("Product deleted successfully");
    } catch (error) {
      message.error("Failed to delete the product");
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <Link to={`${record.id}`}>{text}</Link>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => navigate(`update/${record.id}`)}>Update</Button>
          <Button type="danger" onClick={() => handleDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} bordered dataSource={products} rowKey="id"

      loading={loading}
    />
  );
};

const deleteProduct = async (id) => {
  const { data } = await axios.delete(`https://dummyjson.com/products/${id}`);
  return data;
};

export default ProductTable;
