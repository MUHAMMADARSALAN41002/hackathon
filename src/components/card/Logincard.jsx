import { Card, Avatar } from "antd";
import tech from '../../images/tech.jpg'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

const { Meta } = Card;

const Logincard = (props) => {

  return (
  <>
    <Card
    hoverable
      style={{width: 300, margin:"50px"}}
      cover={
        <img
          alt="example"
          src={tech}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
       
        title={props.title}

      />
    </Card>
  </>
  );
};
export default Logincard;