import { Banner } from "../../components/banner";
import VietNamBanner from "../../../assets/banner.png";
import { Col, Row, Typography } from "antd";
import { Divider } from "../../components/divider";
import CarouselCard from "../../ui/public/tourGuideTours";
import { PrimaryButton } from "../../components/buttons";
import { StarFilled } from "@ant-design/icons";
import { formatUnixToLocal } from "../../utils/utils";
import { useTourGuide } from "../../hooks/useTourGuide";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTour } from "../../hooks/useTour";
// import { useFeedback } from "../../hooks/useFeedback";
import { reviewsData } from "../../utils/testData";
import { genderGenerator } from "../../utils/generators/gender";
import { Image } from "../../components/image";

const { Title, Paragraph, Text } = Typography;

const TourGuideProfile = () => {
  const { tourGuideId } = useParams();
  const { state: stateTourGuide, handleGetTourGuidebyId } = useTourGuide();
  const { state: stateTour, handleGetTourByTourGuide } = useTour();
  // const {state: stateFeedback, handleGetTourGuideFeedback} = useFeedback()

  useEffect(() => {
    if (tourGuideId) {
      handleGetTourGuidebyId({ tourGuideId: parseInt(tourGuideId) });
      handleGetTourByTourGuide({
        TourGuideId: parseInt(tourGuideId),
        page: 1,
        pageSize: 10,
      });
      // handleGetTourGuideFeedback({ cityId: stateTourGuide});
    }
  }, [handleGetTourGuidebyId, tourGuideId, handleGetTourByTourGuide]);

  return (
    <div>
      <Banner image={VietNamBanner} height="20rem" boxShadow={false} />
      <div className="flex justify-evenly">
        <Paragraph className="mt-[2rem] w-[40%] text-lg">
          {stateTourGuide.currentTourguide.description}
        </Paragraph>
        <div className="mt-[-5rem] flex flex-col items-center">
          <Image
            src={stateTourGuide.currentTourguide.avatar}
            className="h-[15rem] w-[15rem] rounded-full object-cover"
            alt="VietNamBanner"
          />
          <Title level={1} style={{ fontWeight: "bolder", color: "#004AAD" }}>
            {`${stateTourGuide.currentTourguide.firstName} ${stateTourGuide.currentTourguide.lastName}`}
          </Title>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <Divider colorSplit="black" />
        </div>
      </div>
      <Title
        level={1}
        style={{ fontWeight: "bolder", color: "#004AAD", marginLeft: "5rem" }}
      >
        My Tours
      </Title>
      <CarouselCard tours={stateTour.currentTourList.tours} />
      <div className="my-[3rem] flex items-center justify-end">
        <Title level={4}>Can't find your suitable tour</Title>
        <PrimaryButton
          text="Booking"
          className="ml-[1rem] mr-[5rem]"
          size="large"
        />
      </div>
      <div className="flex justify-evenly">
        <div className="w-[30%] font-bold">
          <Title level={2} style={{ fontWeight: "bolder", color: "#004AAD" }}>
            Information
          </Title>
          <div className="flex justify-between">
            <div>
              <Paragraph>ID:</Paragraph>
              <Paragraph>Fullname:</Paragraph>
              <Paragraph>Gender:</Paragraph>
              <Paragraph>Languages:</Paragraph>
            </div>
            <div>
              <Paragraph>{tourGuideId}</Paragraph>
              <Paragraph>{`${stateTourGuide.currentTourguide.firstName} ${stateTourGuide.currentTourguide.lastName}`}</Paragraph>
              <Paragraph>
                {genderGenerator(stateTourGuide.currentTourguide.gender)}
              </Paragraph>
              <Paragraph>Vietnamese, English</Paragraph>
            </div>
          </div>
        </div>
        <div>
          <Title
            style={{
              color: "#004AAD",
              fontWeight: "bolder",
              marginBottom: 0,
            }}
          >
            Recent Reviews
          </Title>

          {/* fix data */}
          <Text>
            {reviewsData.stars} <StarFilled /> ({reviewsData.amount} reviews)
          </Text>
          {reviewsData.ratings.map((rating, index) => (
            <div key={index} className="my-[3rem]">
              <Row>
                <Col>
                  <img
                    src={VietNamBanner}
                    className="h-[3rem] w-[3rem] rounded-full object-cover"
                  />
                </Col>
                <Col className="ml-[0.5rem]">
                  <Paragraph style={{ fontWeight: "bold", marginBottom: "0" }}>
                    {rating.name}
                  </Paragraph>
                  <Paragraph>{formatUnixToLocal(rating.date)}</Paragraph>
                </Col>
                <Col offset={1}>
                  <Paragraph>
                    <StarFilled /> {rating.star}
                  </Paragraph>
                </Col>
              </Row>
              <Paragraph>{rating.description}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
