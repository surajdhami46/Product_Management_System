import React from "react";
import { Card, Space, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductCard({ data }) {

  const navigate = useNavigate()
  const {id, title, description  } = data;
  const handledelete = async() => {
    try{
      await deleteproduct(data.id);
      message.success("product deleted successfully");
    
    }
    catch(error){
      message.error("failed to delete the product")
    }
  }

  return (
    <Card 
      title={title}
      extra={<Link to={`${data.id}`}>More</Link>}
      style={{
        width: 300,
      }}
    >
      <p className="text-[red]">{title}</p>
      <p>{description}</p>
      <Space>
      <p><button className="text-rose-500 rounded-md p-2 border bg-green-200" onClick={handledelete}>delete</button></p>
      <p><button className="text-rose-500 rounded-md p-2 border bg-green-200" onClick={()=>{
          navigate(`update/${data?.id}`)
      }}>update</button></p>
      </Space> 
    </Card>
  );
}

const deleteproduct =async (id) => {
const {data}=await axios.delete(`https://dummyjson.com/products/${id}`);
return data;
}