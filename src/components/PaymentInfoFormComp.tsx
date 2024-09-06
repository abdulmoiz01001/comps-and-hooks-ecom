import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';

const PaymentInfoForm = ({ prevStep, setFormData, formData, submitForm }: { prevStep: any, setFormData: any, formData: any, submitForm: any }) => {
  const validationSchema = Yup.object({
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, 'Card number must be 16 digits')
      .nullable(),  // Optional but validated if filled
    expiryDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Invalid expiry date')
      .nullable(),  // Optional but validated if filled
    cvv: Yup.string()
      .matches(/^\d{3}$/, 'CVV must be 3 digits')
      .nullable(),  // Optional but validated if filled
  });

  // Define animation variants for smooth transitions
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        submitForm();
      }}
    >
      {() => (
        <motion.div
          className="w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full space-y-4"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <Form className="space-y-4">
            <motion.div
              className='w-full flex flex-col justify-start items-start'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            >
              <label>Card Number</label>
              <Field name="cardNumber" type="text" className="w-full px-4 py-2 mt-2 border rounded-md" />
              <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm" />
            </motion.div>

            <motion.div
              className='w-full flex flex-col justify-start items-start'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            >
              <label>Expiry Date</label>
              <Field name="expiryDate" type="text" className="w-full px-4 py-2 mt-2 border rounded-md" />
              <ErrorMessage name="expiryDate" component="div" className="text-red-500 text-sm" />
            </motion.div>

            <motion.div
              className='w-full flex flex-col justify-start items-start'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            >
              <label>CVV</label>
              <Field name="cvv" type="text" className="w-full px-4 py-2 mt-2 border rounded-md" />
              <ErrorMessage name="cvv" component="div" className="text-red-500 text-sm" />
            </motion.div>

            <div className="flex justify-between mt-4">
              <motion.button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Previous
              </motion.button>

              <motion.button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Submit
              </motion.button>
            </div>
          </Form>
        </motion.div>
      )}
    </Formik>
  );
};

export default PaymentInfoForm;
