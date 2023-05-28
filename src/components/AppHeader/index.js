import { Image, Space, Badge, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";

function AppHeader() {
  return (
    <div className="AppHeader">
      <Image width={40} src="https://picsum.photos/100" />
      <Typography.Title>YIA System</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20} dot>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}

export default AppHeader;
