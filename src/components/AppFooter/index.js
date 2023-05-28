import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+62123456">+62123456</Typography.Link>
      <Typography.Link href="https://google.com" target={"_blank"}>
        Privacy Police
      </Typography.Link>
      <Typography.Link href="https://google.com" target={"_blank"}>
        Term Of Use
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
