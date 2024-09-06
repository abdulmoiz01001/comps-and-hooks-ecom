import React, { useState } from "react";
import UserForm from "./UserFormComp";
import PersonalInfoForm from "./PersonalInfoFormComp";
import PaymentInfoForm from "./PaymentInfoFormComp";
import { useNavigate } from "react-router-dom";

const RegistrationComp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    image: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = () => {
    console.log('Form Submitted', formData);
    navigate('/otp');
  };

  const steps = [
    { label: "User Details", component: <UserForm nextStep={nextStep} setFormData={setFormData} formData={formData} /> },
    { label: "Personal Info", component: <PersonalInfoForm nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} formData={formData} /> },
    { label: "Payment Info", component: <PaymentInfoForm prevStep={prevStep} setFormData={setFormData} formData={formData} submitForm={submitForm} /> },
  ];

  const progressWidth = `${(currentStep / steps.length) * 100}%`;

  // Function to check if the step is completed
  const isStepCompleted = (stepIndex:any) => {
    return currentStep > stepIndex + 1; // Completed if the current step is ahead
  };

  return (
    <div className="w-[80vw]   mt-10 md:w-[90vw]  mx-auto">
      {/* Step Indicator */}
      <div className="relative flex w-full items-center justify-between mb-8">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 transform -translate-y-4 w-full h-1 bg-gray-200">
          <div
            className="h-1 bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: progressWidth }}
          ></div>
        </div>

        {/* Step Circles */}
        {steps.map((step, index) => (
          <div key={index} className="flex-1 relative z-10">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full mx-auto transition-all duration-500 ease-out ${
                currentStep === index + 1 || isStepCompleted(index)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {isStepCompleted(index) ? (
                <span className="text-white text-xl">✓</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="mt-2 text-sm text-center font-medium">
              {step.label}
            </div>
          </div>
        ))}
      </div>

      {/* Form Sections */}
      <div className="p-4  xxs:min-h-[100vh] rounded-lg flex items-center justify-between ">
        {steps[currentStep - 1].component as React.ReactNode}
        <div className="w-[50%] h-full md:hidden sm:hidden xs:hidden xxs:hidden flex justify-center items-center">
          <img
            src="https://www.parklanepracticeswindon.nhs.uk/wp-content/uploads/sites/557/2019/09/pt_info_pic_357510480.jpg"
            alt="user"
            className="w-1/2 h-1/2 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationComp;
