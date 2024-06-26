import { Typography } from "antd";
import { Link } from "react-router-dom";

const GuideInfoModal = ({ guide } : {guide : any}) => {
  const { Title, Paragraph } = Typography;

  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[50%]">
          <img
            src={guide.image}
            className="rounded-full object-cover w-[10rem] h-[10rem]"
            alt={guide.name}
          />
          <Title level={2} style={{ fontWeight: "bolder", color: "#004AAD" }}>
            {guide.name}
          </Title>
        </div>
        <div className="font-bold w-[50%]">
          <Title level={2} style={{ fontWeight: "bolder", color: "#004AAD" }}>
            Information
          </Title>
          <div className="flex justify-between">
            <div className="w-[50%]">
              <Paragraph>ID:</Paragraph>
              <Paragraph>Fullname:</Paragraph>
              <Paragraph>Gender:</Paragraph>
              <Paragraph>Languages:</Paragraph>
            </div>
            <div>
              <Paragraph>{guide.id}</Paragraph>
              <Paragraph>{guide.name}</Paragraph>
              <Paragraph>{guide.gender}</Paragraph>
              <Paragraph>{guide.languages.join(", ")}</Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Paragraph>
        Please review the information and thank you for using our services. If
        you need any adjustments, please let me know!
      </Paragraph>
      <Link to="/" className="underline text-[#FFDE59] font-bold">
        Check your request !!
      </Link>
    </div>
  );
};

export default GuideInfoModal;