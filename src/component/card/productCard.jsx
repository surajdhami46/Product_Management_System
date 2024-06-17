import React from "react";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  const { title, description  } = data;
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
    </Card>
  );
}
