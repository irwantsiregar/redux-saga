import { Avatar, Space, Table, Typography, Rate } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((response) => {
      setDataSource(response.products);
      setLoading(false);
    });
  }, []);
  const inventoryColumns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (link) => {
        return <Avatar src={link} />;
      },
    },
    {
      title: "TItle",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => {
        return <span>${value}</span>;
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (rating) => {
        return <Rate value={rating} allowHalf disabled />;
      },
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={inventoryColumns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      ></Table>
    </Space>
  );
}

export default Inventory;
