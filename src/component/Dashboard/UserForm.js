import { Button, Form, Input, Modal, Popconfirm, Space, Table, message } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
const UserProfile = () => {
    const userData = JSON.parse(localStorage.getItem("data"));
    const [user, setUser] = useState(userData);

    const loginUser = JSON.parse(localStorage.getItem('token'))



    const confirm = (email) => {

        const data = user.filter(item => item.email !== email)
        setUser(data)
        localStorage.setItem('data', JSON.stringify(data))
        message.success('Deleted successfully');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'address',
        },

        {
            title: 'Actions',
            dataIndex: 'role',
            key: 'address',
            render: (_, record) => <Space>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this user?"
                    onConfirm={() => confirm(record.email)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button danger disabled={loginUser.role !== 'ADMIN' || record.name === 'admin'}>Delete</Button>
                </Popconfirm>
                <button className="hover:text-green-300"

                    onClick={() => showModal(record)}
                >Update</button>
            </Space>
        },
    ];


    //update user modal
    const [form] = useForm()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (data) => {
        form.setFieldsValue({
            name: data.name,
            email: data.email,

        })
        setIsModalOpen(true);
    };

    const handleOk = (email) => {
        
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Name:</strong> {loginUser.name}</p>
            <p><strong>Email:</strong> {loginUser.email}</p>
            <div>
                <Table dataSource={user} columns={columns} />
            </div>
            <Modal title="Update User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    form={form}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default UserProfile;