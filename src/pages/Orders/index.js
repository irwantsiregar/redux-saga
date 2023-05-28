import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((response) => {
      setDataSource(response.products);
      setLoading(false);
    });
  }, []);
  const inventoryColumns = [
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
      title: "DiscountedPrice",
      dataIndex: "discountedPrice",
      render: (value) => {
        return <span>${value}</span>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
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

export default Orders;
