import { useState } from "react";
import { Steps } from "antd";

import { PrimaryButton } from "../../components/buttons";
import { Form } from "../../components/form";
import { Card } from "../../components/card";
import VietNamBanner from "../../../assets/banner.png";
import InstructionModal from "../../ui/customer_ui/instructionModal";
import TourGuideBookingInfo from "../../ui/customer_ui/tourGuideBookingInfo";
import GuideInfoModal from "../../ui/customer_ui/guideInfoModal";

const { Step } = Steps;

const TourGuideBookingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [mainForm] = Form.useForm();
  
  const guide = {
    id: "LO161022",
    name: "Mark Zucc",
    gender: "Male",
    languages: ["English", "Malay"],
    image: VietNamBanner, 
  };

  const next = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: "Step 1",
      content: <InstructionModal />,
    },
    {
      title: "Step 2",
      content: <TourGuideBookingInfo form={form} />,
    },
    {
      title: "Step 3",
      content: <GuideInfoModal guide={guide}/>,
    },
  ];

  const handleSubmit = (values: any) => {
    console.log("Form Values: ", values);
  };

  const initialValues = {
    tourName: "",
    note: "",
    startDate: "",
    endDate: "",
    arrivalTime: "",
    departureTime: "",
    numOfAdult: 0,
    numOfChild: 0,
    tourType: [],
  };

  return (
    <div
      style={{
        backgroundImage: `url(${VietNamBanner})`,
        backgroundSize: "cover",
      }}
      className="h-full py-[2rem]"
    >
      <Card cardTitle="Create your tour" className="w-[50%] mx-auto">
      <Steps current={currentStep} className="my-[5%]">
              {steps.map((step, index) => (
                <Step key={index} title={step.title} />
              ))}
            </Steps>
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            const { mainForm } = forms;
            if (name === "BookingForm") {
              mainForm.setFieldsValue({ ...values });
              next()
            }
          }}
        >
          <div>{steps[currentStep].content}</div>
          <Form
            initialValues={initialValues}
            name="mainForm"
            form={mainForm}
            onFinish={handleSubmit}
          >
            <Form.Item name="tourName" hidden />
            <Form.Item name="note" hidden />
            <Form.Item name="startDate" hidden />
            <Form.Item name="endDate" hidden />
            <Form.Item name="arrivalTime" hidden />
            <Form.Item name="departureTime" hidden />
            <Form.Item name="adults" hidden />
            <Form.Item name="children" hidden />
            <Form.Item name="tourType" hidden />

            <div>
              <div className="flex justify-end mt-4">
                {currentStep > 0 && (
                  <PrimaryButton
                    text="Previous"
                    className="mr-[1%]"
                    onClick={() => prev()}
                  />
                )}
                {currentStep < steps.length - 1 && currentStep!= 1 && (
                  <PrimaryButton text="Next" onClick={() => next()} />
                )}
                {currentStep == 1 && currentStep < steps.length - 1 && (
                  <PrimaryButton text="Next" onClick={() => form.submit()} />
                )}
                {currentStep === steps.length - 1 && (
                  <PrimaryButton
                    text="Submit"
                    onClick={() => {
                      mainForm.submit();
                    }}
                  />
                )}
              </div>
            </div>
          </Form>
        </Form.Provider>
      </Card>
    </div>
  );
};

export default TourGuideBookingPage;
