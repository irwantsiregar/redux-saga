import { Image, Space, Badge, Typography, Drawer, List } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

function AppHeader() {
  const [orders, setOrders] = useState(0);
  const [comments, setComments] = useState(0);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((response) => {
      setComments(response.comments);
    });
    getOrders().then((response) => {
      setOrders(response.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image width={40} src="https://picsum.photos/100" />
      <Typography.Title>YIA System</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge
          count={orders.length}
          onClick={() => {
            setNotificationsOpen(true);
          }}
        >
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title} </Typography.Text>
                has been ordered.
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}

export default AppHeader;
