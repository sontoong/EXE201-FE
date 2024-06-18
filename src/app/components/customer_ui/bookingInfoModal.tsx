import { Col, InputNumber, Row, Space } from "antd";
import { Form } from "../form";
import { Input, InputDate, InputSelectTag, InputTime } from "../inputs";

const BookingModal = ({ form }: { form: any }) => {

  const initialValues = {
    tourGuideId: 0,
    customerId: 0,
    tourName: "",
    tourRequirement: "",
    startDate: "",
    endDate: "",
    arrivalTime: "",
    departureTime: "",
    adults: 0,
    children: 0,
    tourType: [],
  };

  const handleSubmit = (values: object) => {
    console.log("Form Values: ", values);
  };

  const tourTypes = [
    { value: "Funny", label: "Funny" },
    { value: "Adventure", label: "Adventure" },
    { value: "Luxury", label: "Luxury" },
    { value: "Family", label: "Family" },
    { value: "Wildlife", label: "Wildlife" },
    { value: "Real Life", label: "Real Life" },
    { value: "Cultural", label: "Cultural" },
    { value: "Budget", label: "Budget" },
    { value: "Romantic", label: "Romantic" },
    { value: "Beach", label: "Beach" },
    { value: "Survival", label: "Survival" },
    { value: "Gourmet", label: "Gourmet" },
    { value: "Eco-Friendly", label: "Eco-Friendly" },
    { value: "Historical", label: "Historical" },
    { value: "Mountain", label: "Mountain" },
    { value: "Urban Exploration", label: "Urban Exploration" },
    { value: "Rural Retreat", label: "Rural Retreat" },
    { value: "Spiritual", label: "Spiritual" },
    { value: "Festival", label: "Festival" },
    { value: "Wellness", label: "Wellness" },
  ];

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={handleSubmit}
      name="BookingForm"
    >
      <Form.Item
        name="tourName"
        label="Tour Request"
        rules={[
          {
            type: "string",
            required: true,
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Type your tour request here" />
      </Form.Item>
      <Row>
        <Col>
          <Form.Item
            name="startDate"
            label="Start"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputDate placeholder="Enter start date" />
          </Form.Item>
        </Col>
        <Col offset={4}>
          <Form.Item
            name="endDate"
            label="End"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputDate placeholder="Enter end date" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item
            name="arrivalTime"
            label="Arrival"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputTime placeholder="Enter arrival time" />
          </Form.Item>
        </Col>
        <Col offset={5}>
          <Form.Item
            name="departureTime"
            label="Departure"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputTime placeholder="Enter departure time" />
          </Form.Item>
        </Col>
      </Row>
          <Space className="w-full justify-between">
            <Form.Item
              name="adults"
              label="Adults"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber placeholder="How many adults will there be?" />
            </Form.Item>
            <Form.Item
              name="children"
              label="Child/Children (2-12y)"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber placeholder="How many children will there be?" />
            </Form.Item>
          </Space>
      <Form.Item
        name="tourRequirement"
        label="Your Requirement"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea placeholder="I want to..." />
      </Form.Item>
      <Form.Item
        name="tourType"
        label="Type of holiday I am looking for"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputSelectTag
          placeholder="Choose types of holiday"
          options={tourTypes}
        />
      </Form.Item>
    </Form>
  );
};

export default BookingModal;