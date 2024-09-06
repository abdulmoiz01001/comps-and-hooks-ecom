import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
const OTPComp = () => {
  // Formik initial values
  const initialValues = {
    otp: '',
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    otp: Yup.string()
      .length(6, 'OTP must be 6 digits')
      .required('OTP is required'),
  });

  const verifyOTP = async(values : any) => {
    try{

        console.log('OTP Submitted', values);
        const { otp } = values;
        console.log('OTP', otp);
    }catch(error){
        console.log('Error in OTP Verification', error);
    }

  }

  // Formik submit handler
  const onSubmit = async(values : {}) => {
    console.log('OTP Submitted', values);
    verifyOTP(values);
    // Add your OTP verification logic here
  };

  return (
    <div className="flex md:flex-col md:justify-center md:items-center  sm:flex-col sm:justify-center sm:items-center  xs:flex-col xs:justify-center xs:items-center xxs:flex-col xxs:justify-center xxs:items-center  min-h-full h-screen">
      {/* Image Section */}
      <div className="w-1/2 xxs:hidden  xs:hidden  bg-gray-100 flex items-center justify-center">
        <img
          src="https://thumbs.dreamstime.com/b/otp-one-time-password-step-authentication-data-protection-internet-security-concept-otp-one-time-password-step-authentication-data-254434939.jpg" // Replace with your image URL
          alt="OTP Verification"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="w-1/2 xs:w-full xxs:w-full shadow-lg xxs:shadow-none xs:shadow-none p-10 flex items-center justify-center bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold xxs:text-xl text-center mb-8">Verify Your OTP</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting , setFieldValue , values }) => (
              <Form >
                <div>
                  <label htmlFor="otp" className="block text-center  text-sm font-medium text-gray-700">
                    Enter OTP
                  </label>
                  <Field name="otp">
                    {({ field }: any) => (
                      <PinInput
                        type="number"
                        // name="otp"
                        onChange={(value) => setFieldValue('otp', value)}
                        value={values.otp}
                      >
                          {Array.from({ length: 6 }).map((_, index) => (
                            <PinInputField
                            type='number'
                             className='w-12 h-12 ml-4 mb-4 mt-4 text-2xl text-center'
                              key={index}
                              {...field}
                              value={values.otp[index] || ''}
                              onChange={(e) => {
                                const newOtp = values.otp.split('');
                                newOtp[index] = e.target.value;
                                setFieldValue('otp', newOtp.join(''));
                              }}
                              maxLength={1}
                            />
                          ))}
                        </PinInput>
                    )}
                  </Field>
                  <ErrorMessage
                    name="otp"
                    component="div"
                    className="text-red-500 text-center text-sm mt-1"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full active:scale-95 bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                    disabled={isSubmitting}
                  >
                    Verify OTP
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default OTPComp;
